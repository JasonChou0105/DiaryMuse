"use client";

import React, { useState, useRef } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(""); // To store GPT-4 response
  const [loading, setLoading] = useState(false); // To manage loading state
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setResponse(""); // Clear previous response

    try {
      const res = await fetch("/api/gpt4gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from API");
      }

      const data = await res.json();
      setResponse(data.response); // Adjust based on API response structure
    } catch (error) {
      console.error("Error fetching GPT-4 response:", error);
      setResponse("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setText(""); // Clear the text area after submission
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "auto"; // Reset height
        textAreaRef.current.style.overflowY = "hidden"; // Reset scrollbar
      }
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="block my-4 text-3xl font-bold text-gray-700">
          How Was Your Day?
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex max-w-2xl bg-beige-200 rounded-3xl shadow-lg"
        >
          <textarea
            id="textArea"
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onInput={handleInput}
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
      </div>
    </div>
  );
};

export default Home;
