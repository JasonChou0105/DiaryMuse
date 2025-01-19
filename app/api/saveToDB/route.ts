import { NextResponse } from "next/server";
import clientPromise from "@/src/mongolib";

export async function POST(req: Request) {
    try {
        const { prompt, genres, user, date } = await req.json();

        // Validate input
        if (!prompt || !Array.isArray(genres)) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        console.log("Received metadata:", { prompt, genres, user, date });
        const client = await clientPromise;
        const db = client.db("uottahack7");
        const collection = db.collection("posts");
        console.log("Connected to MongoDB");

        // Save metadata in MongoDB
        const result = await collection.insertOne({
            prompt,
            genres,
            user: user || "", // Optional user identifier
            date,
        });
        console.log("Saved metadata to MongoDB");

        // Return _id instead of postId to match frontend expectations
        return NextResponse.json({ _id: result.insertedId.toString() }, { status: 201 });
    } catch (error) {
        console.error("Error saving metadata:", error);
        return NextResponse.json({ error: "Failed to save metadata" }, { status: 500 });
    }
}