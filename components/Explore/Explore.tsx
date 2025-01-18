import SongCard from "./SongCard";

function Explore() {
  //name, embed, lyrics, date made, likes, caption, prompt, genre
  const songs = [
    {
      name: "Chasing Dreams",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics: "Dreaming high, chasing skies, never let go of the fire inside.",
      dateMade: "2025-01-01",
      likes: 120,
      caption: "A song about pursuing your passions and dreams.",
      prompt:
        "I woke up feeling inspired after a long run and a motivating podcast.",
      genres: ["Pop", "Electronic"],
    },
    {
      name: "Lost in Time",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "Memories fade, but the feelings stay, lost in time, we drift away.",
      dateMade: "2025-01-05",
      likes: 95,
      caption: "Reflecting on moments that slip through our hands.",
      prompt:
        "I spent the day reminiscing about old photos and family gatherings.",
      genres: ["Jazz", "Classical"],
    },
    {
      name: "Eternal Glow",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "Through the dark, you shine the brightest, an eternal glow inside us.",
      dateMade: "2025-01-10",
      likes: 180,
      caption: "A tribute to the light within us all.",
      prompt:
        "I helped a friend in need and felt a strong sense of gratitude all day.",
      genres: ["Rock", "Pop"],
    },
    {
      name: "Rise Again",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "Fall to the ground, rise like the sun, a new day has just begun.",
      dateMade: "2025-01-12",
      likes: 250,
      caption: "An anthem of resilience and starting anew.",
      prompt:
        "I faced a tough challenge at work but found a solution by the end of the day.",
      genres: ["Electronic", "Hip-Hop"],
    },
    {
      name: "Whispers in the Wind",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "The wind carries secrets, soft and kind, whispers of love left behind.",
      dateMade: "2025-01-15",
      likes: 75,
      caption: "A soft melody inspired by nature's whispers.",
      prompt:
        "I spent the afternoon hiking in the woods, listening to the breeze and birds.",
      genres: ["Folk", "Classical"],
    },
    {
      name: "Echoes of You",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "Your voice remains, through every wall, echoes of you, forever call.",
      dateMade: "2025-01-16",
      likes: 200,
      caption: "A song about cherishing memories of loved ones.",
      prompt:
        "I found an old letter from a loved one and reflected on our time together.",
      genres: ["Ballad", "Jazz"],
    },
    {
      name: "City Lights",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "Under the city lights, we find our way, hearts ablaze, night turns to day.",
      dateMade: "2025-01-17",
      likes: 300,
      caption: "Celebrating the energy and beauty of city life.",
      prompt:
        "I spent the evening exploring downtown, enjoying the lights and sounds.",
      genres: ["Pop", "Hip-Hop"],
    },
    {
      name: "Unbroken Spirit",
      embed:
        "https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator",
      lyrics:
        "Through the storm, I find my calm, an unbroken spirit, keeping me strong.",
      dateMade: "2025-01-18",
      likes: 400,
      caption: "A powerful ballad of inner strength and courage.",
      prompt:
        "I overcame a difficult moment in my personal life and felt stronger afterward.",
      genres: ["Rock", "Ballad"],
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
