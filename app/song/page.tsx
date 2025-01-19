"use client";

import SongItem from "@/components/SongItem";
import { useRouter } from "next/navigation";

function Page() {
  const song = {
    prompt:
      "I woke up feeling inspired after a long run and a motivating podcast.",
    caption: "A song about pursuing your passions and dreams.",
    title: "Chasing Dreams",
    likes: 120,
    genres: ["Pop", "Electronic"],
    user: "User1",
    date: "2025-01-01",
    audioFile:
      "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
    lyrics: "Dreaming high, chasing skies, never let go of the fire inside.",
    visibility: "Public",
  };

  const router = useRouter();
  const { songId } = router.query;
  //found from mongo later
  return <SongItem song={song} />;
}

export default Page;
