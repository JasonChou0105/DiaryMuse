import { getPostsByUser } from "@/src/getmongo";

export async function POST(req) {
    try {
        const { user } = await req.json();
        if (!user) {
            return new Response(JSON.stringify({ error: "User is required" }), { status: 400 });
        }
        const posts = await getPostsByUser(user);
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
