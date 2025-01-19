"use client";

import React, { useState } from "react";
import Lyrics from "./Lyrics";
import AudioPlayer from "./AudioPlayer";

const Result = (audioFile) => {
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
  });

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

  return (
    <div className="flex flex-col items-center p-4 mt-24">
      <div className="text-3xl w-2/3 mb-6 pb-2 font-bold border-b-2 border-beige-300">
        {formData.title || "Title Placeholder"}
      </div>

      <AudioPlayer audioUrl={audioFile} />
      <Lyrics caption={formData.caption || "Caption Placeholder"} />

      <div className="w-full bottom-0 p-4 bg-white shadow-md flex flex-col items-center">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-2/3 p-2 mb-2 border rounded-md shadow-md"
        />

        <textarea
          name="caption"
          placeholder="Enter Caption"
          value={formData.caption}
          onChange={handleInputChange}
          className="w-2/3 p-2 mb-2 border rounded-md shadow-md h-20"
        ></textarea>

        <div className="flex w-2/3 justify-between">
          <button
            onClick={handleSavePrivate}
            className="w-1/2 p-2 mr-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Save Privately
          </button>
          <button
            onClick={handlePostPublic}
            className="w-1/2 p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
          >
            Post Publicly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
