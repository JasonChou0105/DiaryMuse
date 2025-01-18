import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ message: "Prompt is required" }, { status: 400 });
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
        });

        console.log(completion.choices[0].message.content)

        return NextResponse.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error("Error interacting with OpenAI API:", error);
        return NextResponse.json(
            { message: "Error interacting with OpenAI API" },
            { status: 500 }
        );
    }
}