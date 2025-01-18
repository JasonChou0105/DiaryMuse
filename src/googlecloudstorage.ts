import { Storage } from "@google-cloud/storage";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Configure Google Cloud Storage
const storage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME;
const bucket = storage.bucket(bucketName!);

export async function uploadFile(fileContent: Buffer, originalName: string): Promise<string> {
    const uniqueId = uuidv4();
    const extension = path.extname(originalName);
    const fileName = `${uniqueId}${extension}`;
    const file = bucket.file(fileName);

    await file.save(fileContent, {
        metadata: {
            contentType: "application/octet-stream", // Adjust based on file type
        },
        public: true,
    });

    // Make the file publicly accessible and return the URL
    await file.makePublic();
    return `https://storage.googleapis.com/${bucketName}/${fileName}`;
}
