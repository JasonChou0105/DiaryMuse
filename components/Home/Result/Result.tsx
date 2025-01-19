"use client";

import React, { useState, useRef, useEffect } from "react";
import Lyrics from "./Lyrics";
import AudioPlayer from "../../AudioPlayer";
import fetchAudioFiles from "@/src/getmongo";

const Result = () => {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
  });
  const [songData, setSongData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSavePrivate = () => {
    console.log("Saved privately:", formData);
  };

  const handlePostPublic = () => {
    console.log("Posted publicly:", formData);
  };
  useEffect(() => {
    fetch("/api/getAudioFile")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setSongData(data))
      .catch((error) => console.error("There was an error:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-24 mt-24">
      <div className="text-3xl w-full mb-6 pb-2 font-bold border-b-2 border-beige-300">
        Cutomize Your Entry
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
