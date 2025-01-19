"use client";

import React from "react";
import AudioPlayer from "./AudioPlayer";
import { FaHeart } from "react-icons/fa";

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
const SongPage = () => {
  return (
    <div className="min-h-screen bg-beige-100 flex justify-center items-center p-4">
      <div className="shadow-lg rounded-lg w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {song.user}
              </h3>
              <p className="text-sm text-gray-500">{song.date}</p>
            </div>
          </div>
          <div className="text-gray-400 text-lg">•••</div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Audio Player */}
          <AudioPlayer audioUrl={song.audioFile} />

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            {song.title}
          </h1>

          {/* Caption */}
          <p className="mt-2 text-gray-700">{song.caption}</p>

          {/* Lyrics */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Lyrics</h2>
            <p className="mt-1 text-gray-700 whitespace-pre-line">
              {song.lyrics}
            </p>
          </div>

          {/* Genres */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Genres</h2>
            <p className="text-gray-700">{song.genres.join(", ")}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              className={`transition-all duration-100 ease-in text-xl text-red-500`}
            >
              <FaHeart />
            </button>
            <span className="text-gray-600">{song.likes}</span>
          </div>
          <p className="text-sm text-gray-500">Visibility: {song.visibility}</p>
        </div>
      </div>
    </div>
  );
};

export default SongPage;
