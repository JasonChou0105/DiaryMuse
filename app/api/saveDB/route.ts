import { NextResponse } from "next/server";
import clientPromise from "@/src/mongolib";

/**
 * Handles POST requests to add a new entry to the database.
 * @param {Request} req - The HTTP request object.
 * @returns {Promise<Response>} - The HTTP response object.
 */
export async function POST(req: Request): Promise<Response> {
    try {
        const data = await req.json(); // Parse incoming JSON data
        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection("posts");

        console.log("Incoming data:", data);

        const result = await collection.insertOne(data);

        // Construct the response
        const responseData = { ...data, _id: result.insertedId };
        return NextResponse.json(responseData, { status: 201 });
    } catch (error) {
        console.error("Error inserting post data:", error);
        return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
    }
}
