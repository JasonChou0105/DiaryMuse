import {NextResponse} from "next/server";
import udioapi from '../../../src/udioapi';

export async function POST(request: Request) {
    try {
        const result = await udioapi(request.description, request.lyrics);

        return NextResponse.json({ result });
    } catch (error) {
        console.error("Error interacting with OpenAI API:", error);
        return NextResponse.json(
            { message: "Error interacting with OpenAI API" },
            { status: 500 }
        );
    }
}