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
                { role: "system", content: "You are writing song lyrics, based on how the user describes their day went. " +
                        "You will make the lyrics relevant to the experiences and follow the mood of the experiences (i.e. " +
                        "writing sadder lyrics for the sad experiences, and upbeat lyrics for the happy ones. Keep it to " +
                        "two lines of lyrics." }, //TODO
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