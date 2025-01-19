"use client";
import { useEffect, useState } from "react";
import SongCard from "./SongCard";

function Explore() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch songs from the API
    const fetchSongs = async () => {
      try {
        const response = await fetch("/api/posts/all", { method: "GET" });
        if (!response.ok) {
          throw new Error(`Error fetching songs: ${response.statusText}`);
        }
        const data = await response.json();
        setSongs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
