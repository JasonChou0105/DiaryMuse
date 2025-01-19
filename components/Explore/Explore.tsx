import SongCard from "./SongCard";

function Explore() {
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
    },
    {
      prompt:
        "I spent the afternoon hiking in the woods, listening to the breeze and birds.",
      caption: "A soft melody inspired by nature's whispers.",
      title: "Whispers in the Wind",
      likes: 75,
      genres: ["Folk", "Classical"],
      user: "User5",
      date: "2025-01-15",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "The wind carries secrets, soft and kind, whispers of love left behind.",
    },
    {
      prompt:
        "I found an old letter from a loved one and reflected on our time together.",
      caption: "A song about cherishing memories of loved ones.",
      title: "Echoes of You",
      likes: 200,
      genres: ["Ballad", "Jazz"],
      user: "User6",
      date: "2025-01-16",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "Your voice remains, through every wall, echoes of you, forever call.",
    },
    {
      prompt:
        "I spent the evening exploring downtown, enjoying the lights and sounds.",
      caption: "Celebrating the energy and beauty of city life.",
      title: "City Lights",
      likes: 300,
      genres: ["Pop", "Hip-Hop"],
      user: "User7",
      date: "2025-01-17",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "Under the city lights, we find our way, hearts ablaze, night turns to day.",
    },
    {
      prompt:
        "I overcame a difficult moment in my personal life and felt stronger afterward.",
      caption: "A powerful ballad of inner strength and courage.",
      title: "Unbroken Spirit",
      likes: 400,
      genres: ["Rock", "Ballad"],
      user: "User8",
      date: "2025-01-18",
      audioFile:
        "https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/5f32c095998d4bbd84f481cd3587a4c3/1/The%2520Untitled.mp3",
      lyrics:
        "Through the storm, I find my calm, an unbroken spirit, keeping me strong.",
    },
  ];
  return (
    <div className="w-3/4 flex flex-col justify-items-center mx-auto p-6 mt-24">
      <h1 className="text-3xl pb-1 font-bold mb-6 border-b-2 border-beige-300">
        Explore
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center w-full">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
