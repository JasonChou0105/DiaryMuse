"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Result from "./Result/Result";
import GenreList from "./GenreList";

// Types
interface FormData {
  text: string;
  selectedGenres: string[];
}

interface APIResponse {
  response: string;
}

interface SongResponse {
  iframeSrc: string;
}

interface TextAreaStyles {
  height: string;
  overflowY: "hidden" | "auto";
}

// Constants
const MAX_TEXTAREA_HEIGHT = 112; // 4 lines × 28px line height
const LINE_HEIGHT = "1.75rem";

const Home: React.FC = () => {
  // State
  const [loading, setLoading] = useState<boolean>(false);
  const [iframeSrc, setIframeSrc] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    text: "",
    selectedGenres: [],
  });
  const [dbEntryId, setDbEntryId] = useState<string | null>(null); // ID for MongoDB document

  // Refs
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Handlers
  const handleTextAreaInput = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    const updateTextAreaHeight = (): TextAreaStyles => {
      // Reset height to recalculate
      textarea.style.height = "auto";
      const newHeight = textarea.scrollHeight;

      return {
        height: `${Math.min(newHeight, MAX_TEXTAREA_HEIGHT)}px`,
        overflowY: newHeight <= MAX_TEXTAREA_HEIGHT ? "hidden" : "auto",
      };
    };

    const styles = updateTextAreaHeight();
    textarea.style.height = styles.height;
    textarea.style.overflowY = styles.overflowY;

    setFormData((prev) => ({
      ...prev,
      text: event.target.value,
    }));
  };

  const resetForm = (): void => {
    setFormData({
      text: "",
      selectedGenres: [],
    });

    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.overflowY = "hidden";
    }
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (!formData.text.trim()) return;
    setLoading(true);

    try {
      // Save initial data to MongoDB
      const savedEntry = await saveToDB({
        prompt: formData.text,
        genres: formData.selectedGenres,
        user: "", // Replace with actual user identifier if available
        date: new Date().toISOString(),
      });

      setDbEntryId(savedEntry._id);

      // Generate lyrics using GPT-4
      const gptResponse = await fetchGPTResponse(formData.text);

      // Generate song using lyrics and genres
      const songResponse = await fetchSongResponse(
        formData.selectedGenres.join(", "),
        gptResponse.response
      );

      // Update MongoDB entry with song embed and lyrics
      await updateDBEntry(savedEntry._id, {
        songEmbed: songResponse.iframeSrc,
        lyrics: gptResponse.response,
      });

      setIframeSrc(songResponse.iframeSrc);
    } catch (error) {
      console.error("Error in submission process:", error);
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  const updateSelectedGenres = (updatedGenres: string[]): void => {
    setFormData((prev) => ({
      ...prev,
      selectedGenres: updatedGenres,
    }));
  };

  // API Calls
  const fetchGPTResponse = async (prompt: string): Promise<APIResponse> => {
    const response = await fetch("/api/gpt4gen", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch GPT-4 response");
    }

    return response.json();
  };

  const fetchSongResponse = async (
    description: string,
    lyrics: string
  ): Promise<SongResponse> => {
    const response = await fetch("/api/getsong", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description, lyrics }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch song response");
    }

    return response.json();
  };

  const saveToDB = async (data: {
    prompt: string;
    genres: string[];
    user: string;
    date: string;
  }): Promise<{ _id: string }> => {
    const response = await fetch("/api/saveToDB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save data to database");
    }

    return response.json();
  };

  const updateDBEntry = async (
    id: string,
    update: { songEmbed: string; lyrics: string }
  ): Promise<void> => {
    const response = await fetch(`/api/saveToDB/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    });

    if (!response.ok) {
      throw new Error("Failed to update database entry");
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="block my-4 text-3xl font-bold text-gray-700">
          How Was Your Day?
        </h1>

        <div className="bg-beige-200 rounded-3xl shadow-lg w-full flex flex-col items-center justify-center max-w-2xl">
          <form onSubmit={handleSubmit} className="w-full flex max-w-2xl">
            <textarea
              id="textArea"
              ref={textAreaRef}
              value={formData.text}
              onChange={handleTextAreaInput}
              className="block w-5/6 p-4 text-gray-700 bg-transparent rounded-l-3xl focus:outline-none focus:border-blue-500 resize-none"
              placeholder="Type something..."
              rows={1}
              style={{ lineHeight: LINE_HEIGHT }}
              disabled={loading}
            />

            <button
              type="submit"
              className="transition-all ease-in duration-300 w-1/6 m-2 text-black bg-beige-300 rounded-3xl hover:bg-beige-400 focus:outline-none shadow-md"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
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

      <Result iframeSrc={iframeSrc} />
    </div>
  );
};

export default Home;
