import { NextResponse } from "next/server";
import udioapi from '../../../src/udioapi';

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

        // Call the udioapi with the correct parameters
        const result = await udioapi(body.description, body.lyrics);

        // Return the successful response
        return NextResponse.json({ iframeSrc: result });

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