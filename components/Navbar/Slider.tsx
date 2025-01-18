"use client";

import React, { useState } from "react";

const Slider = () => {
  const [intensity, setIntensity] = useState(50); // Default slider value
  const [selectedIntensity, setSelectedIntensity] = useState(null);

  const handleSetIntensity = () => {
    setSelectedIntensity(intensity);
  };

  return (
    <div className="w-1/3 p-4">
      <div className="flex flex-col items-center">
        <label htmlFor="intensity-slider" className="mb-2 text-gray-700">
          Select Intensity: {intensity}%
        </label>
        <input
          id="intensity-slider"
          type="range"
          min="1"
          max="100"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <button
          onClick={handleSetIntensity}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Set Intensity
        </button>
        {selectedIntensity !== null && (
          <p className="mt-4 text-gray-700">
            Selected Intensity: {selectedIntensity}%
          </p>
        )}
      </div>
    </div>
  );
};

export default Slider;
