import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const file = searchParams.get("file");

    // Validate that "file" is provided
    if (!file) {
      return NextResponse.json(
        { message: "Missing required query parameter: file" },
        { status: 400 }
      );
    }

    // Process the file (for example, log it or fetch related data)
    console.log("Received file:", file);

    // Return the file as part of the response (for demonstration)
    return NextResponse.json({ file });
  } catch (error) {
    console.error("Error in /api/getsong:", error);

    // Return a generic error response
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
