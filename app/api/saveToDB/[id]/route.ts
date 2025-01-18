import { NextResponse } from "next/server";
import clientPromise from "../../../../src/mongolib";
import { ObjectId } from "mongodb";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { songEmbed, lyrics } = await req.json();

        // Validate input
        if (!ObjectId.isValid(id) || (!songEmbed && !lyrics)) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("uottahack7"); // Replace with your database name
        const collection = db.collection("prompts");

        // Update document in MongoDB
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { songEmbed, lyrics } }
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({ error: "No document updated" }, { status: 404 });
        }

        return NextResponse.json({ message: "Document updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating document:", error);
        return NextResponse.json({ error: "Failed to update document" }, { status: 500 });
    }
}
