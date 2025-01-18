import { NextResponse } from "next/server";
import clientPromise from "../../../src/mongolib";

export async function POST(req: Request) {
    try {
        const { prompt, genres, user, date } = await req.json();

        // Validate input
        if (!prompt || !Array.isArray(genres) || !date) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("uottahack7");
        const collection = db.collection("prompts");

        // Insert data into MongoDB
        const result = await collection.insertOne({ prompt, genres, user, date });
        return NextResponse.json({ _id: result.insertedId.toString() }, { status: 201 });
    } catch (error) {
        console.error("Error saving data:", error);
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}
