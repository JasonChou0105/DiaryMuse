"use client";

import React, { useState, useRef } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleInput = (event) => {
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Text:", text);
    setText(""); // Clear the text area after submission
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset height
      textAreaRef.current.style.overflowY = "hidden"; // Reset scrollbar
    }
  };

  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md"
        >
          <div className="block mb-2 text-lg font-medium text-gray-700">
            How Was Your Day?
          </div>
          <textarea
            id="textArea"
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onInput={handleInput}
            className="block w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none leading-7"
            placeholder="Type something..."
            rows={1}
            style={{ lineHeight: "1.75rem" }}
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
