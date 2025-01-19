import fetchAudioFiles from "@/src/getmongo";

export async function GET() {
    try {
        const audioFiles = await fetchAudioFiles();
        return new Response(JSON.stringify(audioFiles), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
