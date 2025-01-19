import { NextResponse } from "next/server";

// Define the expected request body structure
interface SongRequest {
    description: string;
    lyrics: string;
}

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body: SongRequest = await request.json();

        // Validate the required fields
        if (!body.description || !body.lyrics) {
            return NextResponse.json(
                { message: "Missing required fields: description and lyrics" },
                { status: 400 }
            );
        }

        // Fetch the response from the long-running ngrok API
        const response = await fetch(`${process.env.NGROKLINK}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: body.description,
                lyrics: body.lyrics,
            }),
        });

        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`);
        }

        const data = await response.json();
        console.log("AUDIO FILE DATA JASON CHOU", data.file);

        // Return the successful response
        return NextResponse.json({ audioFile: data.file }) //TODO
    } catch (error) {
        // Log the specific error
        console.error("Error in /api/getsong:", error);

        // Check if it's a parsing error
        if (error instanceof SyntaxError) {
            return NextResponse.json(
                { message: "Invalid request body" },
                { status: 400 }
            );
        }

        // Return a generic error for other cases
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
