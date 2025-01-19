"use client";

import React, { useState, useRef, useEffect } from "react";
import Lyrics from "./Lyrics";
import AudioPlayer from "../../AudioPlayer";

const Result = ({ sectionRef, songData }) => {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
  });

  // Scroll to section once the component is mounted
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [sectionRef]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to save data to DB
  const saveToDB = async (data) => {
    try {
      const response = await fetch("/api/saveDB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to save data to the database");
      }
      const result = await response.json();
      console.log("Data saved successfully", result);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Collect the structured data to save
  const handleSavePrivate = () => {
    const data = {
      prompt: songData.lyrics, // Assuming `lyrics` is part of `songData`
      caption: formData.caption,
      title: formData.title,
      likes: 0, // Default likes set to 0, or you can remove this if not required
      genres: [], // No genres input, so just an empty array
      user: "", // Default empty user, replace with actual user data if available
      date: new Date().toISOString(),
      audioFile: songData.audioFile,
      lyrics: songData.lyrics,
      visibility: "private",
    };

    saveToDB(data); // Call the function to save data to DB
    console.log("Saved privately:", formData);
  };

  const handlePostPublic = () => {
    const data = {
      prompt: songData.prompt, // Assuming `lyrics` is part of `songData`
      caption: formData.caption,
      title: formData.title,
      likes: 0, // Default likes set to 0
      genres: songData.genres, // No genres input, so just an empty array
      user: "Jason Chou", // Default empty user
      date: new Date().toISOString(),
      audioFile: songData.audioFile,
      lyrics: songData.lyrics,
      visibility: "public",
    };

    saveToDB(data); // Call the function to save data to DB
    console.log("Posted publicly:", formData);
  };

  return (
      <div ref={sectionRef} className="flex flex-col items-center justify-center p-24 mt-24">
        <div className="text-3xl w-full mb-6 pb-2 font-bold border-b-2 border-beige-300">
          Customize Your Entry
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <div className="flex flex-col w-1/2 h-80">
            <AudioPlayer audioUrl={songData.audioFile} />
            <Lyrics />
          </div>

          <div className="w-1/2 p-6 bg-beige-200 shadow-md h-80 ml-4 rounded-md flex flex-col">
            <input
                type="text"
                name="title"
                placeholder="Enter Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border rounded-md shadow-md bg-beige-100 focus:outline-none"
            />

            <textarea
                name="caption"
                placeholder="Enter Caption"
                value={formData.caption}
                onChange={handleInputChange}
                className="w-full h-full mb-4 p-2 border rounded-md bg-beige-100 shadow-md h-28 focus:outline-none resize-none"
            ></textarea>

            <div className="flex mt-auto w-full">
              <button
                  onClick={handleSavePrivate}
                  className="w-1/2 p-2 mr-2 bg-stone-300 text-white rounded-md shadow-md hover:bg-stone-400 transition duration-300 focus:outline-none"
              >
                Save Privately
              </button>
              <button
                  onClick={handlePostPublic}
                  className="w-1/2 p-2 bg-beige-300 text-white rounded-md shadow-md hover:bg-beige-400 transition duration-300 focus:outline-none"
              >
                Post Publicly
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Result;
