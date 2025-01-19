"use client";

import React from "react";
import AudioPlayer from "./AudioPlayer";
import { FaHeart } from "react-icons/fa";

const SongPage = ({ song, liked, toggleLike }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl">
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
              onClick={toggleLike}
              className={`transition-all duration-100 ease-in text-xl ${
                liked ? "text-red-500" : "text-gray-400"
              }`}
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
