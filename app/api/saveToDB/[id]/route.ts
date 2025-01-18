import { NextResponse } from "next/server";
import clientPromise from "@/src/mongolib";
import { ObjectId } from "mongodb";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const { lyrics, additionalData } = await req.json();

        if (!ObjectId.isValid(id) || (!lyrics && !additionalData)) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("uottahack7");
        const collection = db.collection("posts");

        const updateData: Record<string, any> = {};
        if (lyrics) updateData.lyrics = lyrics;
        if (additionalData) updateData.additionalData = additionalData;

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
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
