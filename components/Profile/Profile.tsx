import SongCard from "./SongCard";

function Profile() {
  //name, embed, lyrics, date made, likes, caption, prompt, genre

  const songs = [
    {
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
    },
    {
      prompt:
        "I spent the day reminiscing about old photos and family gatherings.",
      caption: "Reflecting on moments that slip through our hands.",
      title: "Lost in Time",
      likes: 95,
      genres: ["Jazz", "Classical"],
      user: "User2",
      date: "2025-01-05",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "Memories fade, but the feelings stay, lost in time, we drift away.",
      visibility: "Public",
    },
    {
      prompt:
        "I helped a friend in need and felt a strong sense of gratitude all day.",
      caption: "A tribute to the light within us all.",
      title: "Eternal Glow",
      likes: 180,
      genres: ["Rock", "Pop"],
      user: "User3",
      date: "2025-01-10",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "Through the dark, you shine the brightest, an eternal glow inside us.",
      visibility: "Public",
    },
    {
      prompt:
        "I faced a tough challenge at work but found a solution by the end of the day.",
      caption: "An anthem of resilience and starting anew.",
      title: "Rise Again",
      likes: 250,
      genres: ["Electronic", "Hip-Hop"],
      user: "User4",
      date: "2025-01-12",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "Fall to the ground, rise like the sun, a new day has just begun.",
      visibility: "Public",
    },
  ];

  return (
    <div className="w-3/4 flex flex-col justify-items-center mx-auto p-6 mt-24">
      <h1 className="text-3xl pb-1 font-bold mb-6 border-b-2 border-beige-300">
        My Diary
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 justify-items-center w-full">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
