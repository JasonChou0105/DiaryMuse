"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize WaveSurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#bbb",
      progressColor: "#000", // Darker color for played parts
      barWidth: 2,
      height: 100,
      cursorColor: "#000000",
    });

    wavesurferRef.current.load(audioUrl);

    return () => {
      wavesurferRef.current.destroy();
    };
  }, [audioUrl]);

  const handlePlayPause = () => {
    wavesurferRef.current.playPause();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 bg-beige-200 rounded-md shadow-md w-full">
      <div className="flex items-center">
        <button
          onClick={handlePlayPause}
          className="mx-8 flex aspect-square items-center justify-center text-center w-12 h-12 bg-beige-300 text-white rounded-full shadow-md hover:bg-beige-400 transition duration-200"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <div ref={waveformRef} className="w-full"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
