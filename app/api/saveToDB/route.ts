import { NextResponse } from "next/server";
import clientPromise from "@/src/mongolib";
import { uploadFile } from "@/src/googlecloudstorage";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        // Extract data from form
        const prompt = formData.get("prompt") as string;
        const genres = JSON.parse(formData.get("genres") as string) as string[];
        const file = formData.get("file") as File;

        if (!prompt || !Array.isArray(genres) || !file) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        // Upload file to Google Cloud Storage
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const fileUrl = await uploadFile(fileBuffer, file.name);

        // Save metadata and file URL in MongoDB
        const client = await clientPromise;
        const db = client.db("uottahack7");
        const collection = db.collection("posts");

        const result = await collection.insertOne({
            prompt,
            genres,
            fileUrl,
            user: "", // Placeholder
            date: new Date().toISOString(),
        });

        return NextResponse.json({ _id: result.insertedId.toString(), fileUrl }, { status: 201 });
    } catch (error) {
        console.error("Error saving data:", error);
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}
