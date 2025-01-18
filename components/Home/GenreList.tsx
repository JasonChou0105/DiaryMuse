"use client";

import React from "react";

interface GenreListProps {
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
}

const GenreList: React.FC<GenreListProps> = ({
  selectedGenres,
  setSelectedGenres,
}) => {
  const musicGenres: string[] = [
    "Pop",
    "Rock",
    "Hip-Hop",
    "Jazz",
    "Classical",
    "Electronic",
    "Reggae",
    "Country",
  ];

  const handleGenreClick = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      // Remove if already selected
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else if (selectedGenres.length < 2) {
      // Add if fewer than 2 selected
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      // Replace the first selected genre
      setSelectedGenres([selectedGenres[1], genre]);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center w-full">
      {musicGenres.map((genre, index) => (
        <button
          key={index}
          onClick={() => handleGenreClick(genre)}
          className={`py-1 px-3 rounded-full text-sm font-medium transition-colors duration-300 ${
            selectedGenres.includes(genre)
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreList;
