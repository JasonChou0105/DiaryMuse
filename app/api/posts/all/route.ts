import { getAllPosts } from "@/src/getmongo";

export async function GET() {
    try {
        const posts = await getAllPosts();
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}