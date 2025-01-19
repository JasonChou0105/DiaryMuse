import { NextResponse } from "next/server";
import clientPromise from "@/src/mongolib";
import { uploadFile } from "@/src/googlecloudstorage";
import { ObjectId } from "mongodb";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
        }

        const formData = await req.formData();
        const file = formData.get("file") as File;
        const lyrics = formData.get("lyrics") as string;

        if (!file || !(file instanceof File)) {
            return NextResponse.json({ error: "Invalid or missing file" }, { status: 400 });
        }
        if (!lyrics) {
            return NextResponse.json({ error: "Missing lyrics" }, { status: 400 });
        }

        // Convert file to Buffer
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const fileUrl = await uploadFile(fileBuffer, file.name);

        // Update MongoDB
        const client = await clientPromise;
        const db = client.db("uottahack7");
        const collection = db.collection("posts");

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { fileUrl, lyrics } }
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "File uploaded successfully", fileUrl }, { status: 200 });
    } catch (error) {
        console.error("Error uploading file:", error);
        return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
    }
}
