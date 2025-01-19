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

interface TextAreaStyles {
  height: string;
  overflowY: "hidden" | "auto";
}

// Constants
const MAX_TEXTAREA_HEIGHT = 112; // 4 lines × 28px line height
const LINE_HEIGHT = "1.75rem";

const Home: React.FC = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    text: "",
    selectedGenres: [],
  });
  const [dbEntryId, setDbEntryId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Refs
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Handlers
  const handleTextAreaInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${Math.min(newHeight, MAX_TEXTAREA_HEIGHT)}px`;
    textarea.style.overflowY = newHeight > MAX_TEXTAREA_HEIGHT ? "auto" : "hidden";

    setFormData((prev) => ({ ...prev, text: event.target.value }));
  };

  const resetForm = (): void => {
    setFormData({ text: "", selectedGenres: [] });
    setError(null);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.overflowY = "hidden";
    }
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (!formData.text.trim()) {
      setError("Text cannot be empty.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const savedEntry = await saveToDB({
        prompt: formData.text,
        genres: formData.selectedGenres,
        user: "", // Replace with actual user identifier if available
        date: new Date().toISOString(),
      });

      setDbEntryId(savedEntry._id);

      const gptResponse = await fetchGPTResponse(formData.text);

      const audioFile = await fetchSongResponse(
          formData.selectedGenres.join(", "),
          gptResponse.response
      );

      await updateDBEntry(savedEntry._id, {
        audioFile,
        lyrics: gptResponse.response,
      });

      setAudioFile(audioFile);
      resetForm();
    } catch (error) {
      console.error("Error in submission process:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateSelectedGenres = (updatedGenres: string[]): void => {
    setFormData((prev) => ({ ...prev, selectedGenres: updatedGenres }));
  };

  // API Utility Functions
  const apiRequest = async (
      url: string,
      method: string,
      body: Record<string, unknown>
  ): Promise<any> => {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  };

  const fetchGPTResponse = (prompt: string): Promise<APIResponse> => {
    return apiRequest("/api/gpt4gen", "POST", { prompt });
  };

  const fetchSongResponse = (
      description: string,
      lyrics: string
  ): Promise<{ audioFile: string }> => {
    return apiRequest("/api/getsong", "POST", { description, lyrics });
  };

  const saveToDB = (data: {
    prompt: string;
    genres: string[];
    user: string;
    date: string;
  }): Promise<{ _id: string }> => {
    return apiRequest("/api/saveToDB", "POST", data);
  };

  const updateDBEntry = (
      id: string,
      update: { audioFile: string; lyrics: string }
  ): Promise<void> => {
    return apiRequest(`/api/saveToDB/${id}`, "PATCH", update);
  };

  return (
      <div className="container">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="my-4 text-3xl font-bold text-gray-700">How Was Your Day?</h1>

          <div className="bg-beige-200 rounded-3xl shadow-lg w-full flex flex-col items-center justify-center max-w-2xl">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl flex">
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

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="w-full px-4 pb-2 flex max-w-2xl">
              <GenreList
                  selectedGenres={formData.selectedGenres}
                  setSelectedGenres={updateSelectedGenres}
              />
            </div>
          </div>
        </div>

        <Result audioFile={audioFile || 'https://storage.googleapis.com/udio-artifacts-c33fe3ba-3ffe-471f-92c8-5dfef90b3ea3/samples/213e499f134c44a5a40858410a073c6a/1/The%2520Untitled.mp3'} />
      </div>
  );
};

export default Home;
