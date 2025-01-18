"use client";

import React, { useState, useRef } from "react";
import Result from "./Result/Result";
import GenreList from "./GenreList";

const Home = () => {
  const textAreaRef = useRef(null);

  // Object state to store both selected genres and user input
  const [formData, setFormData] = useState({
    text: "",
    selectedGenres: [] as string[],
  });

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textAreaRef.current;

    // Reset the height to auto to recalculate
    textarea.style.height = "auto";

    // Calculate and set the new height, with a maximum height for 4 lines
    const maxHeight = 112; // 4 lines x 28px line height
    const newHeight = textarea.scrollHeight;

    if (newHeight <= maxHeight) {
      textarea.style.overflowY = "hidden"; // No scrollbar before 4 lines
    } else {
      textarea.style.overflowY = "auto"; // Enable scrollbar after 4 lines
    }

    textarea.style.height = `${Math.min(newHeight, maxHeight)}px`;

    // Update text in formData
    setFormData((prevState) => ({
      ...prevState,
      text: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);

    // Clear the formData
    setFormData({
      text: "",
      selectedGenres: [],
    });

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset height
      textAreaRef.current.style.overflowY = "hidden"; // Reset scrollbar
    }
  };

  const updateSelectedGenres = (updatedGenres: string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedGenres: updatedGenres,
    }));
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="block my-4 text-3xl font-bold text-gray-700">
          How Was Your Day?
        </div>
        <div className="bg-beige-200 rounded-3xl shadow-lg w-full flex flex-col items-center justify-center max-w-2xl">
          <form onSubmit={handleSubmit} className="w-full flex max-w-2xl">
            <textarea
              id="textArea"
              ref={textAreaRef}
              value={formData.text}
              onChange={handleInput}
              className="block w-5/6 p-4 text-gray-700 bg-transparent rounded-l-3xl focus:outline-none focus:border-blue-500 resize-none leading-7"
              placeholder="Type something..."
              rows={1}
              style={{ lineHeight: "1.75rem" }}
            ></textarea>
            <button
              type="submit"
              className="transition-all ease-in duration-300 w-1/6 m-2 text-black bg-beige-300 rounded-3xl hover:bg-beige-400 focus:outline-none shadow-md"
            >
              Generate
            </button>
          </form>
          <div className="w-full px-4 pb-2 flex max-w-2xl">
            <GenreList
              selectedGenres={formData.selectedGenres}
              setSelectedGenres={updateSelectedGenres}
            />
          </div>
        </div>
      </div>
      <Result audioUrl={"../../Rev.mp3"} />
    </div>
  );
};

export default Home;
