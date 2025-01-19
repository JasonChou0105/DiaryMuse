import { getPostsByGenre } from "@/src/getmongo";

export async function POST(req) {
    try {
        const { genre } = await req.json();
        if (!genre) {
            return new Response(JSON.stringify({ error: "Genre is required" }), { status: 400 });
        }
        const posts = await getPostsByGenre(genre);
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
