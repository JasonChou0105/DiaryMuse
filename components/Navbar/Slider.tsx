"use client";

import React, { useState } from "react";

const Slider = () => {
  const [intensity, setIntensity] = useState(50); // Default slider value
  const thumbStyle = {
    background: `linear-gradient(to right, #454545 ${intensity}%, #e0e0e0 ${intensity}%)`,
  }; 
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-1/3 mx-12">
        <div className="flex items-center justify-center">
          <label htmlFor="intensity-slider" className="mx-4 text-white">
            Intensity:
          </label>
          <input
            id="intensity-slider"
            type="range"
            min="1"
            max="100"
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            className="w-full h-4 bg-stone-400 rounded-lg appearance-none cursor-pointer"
            style={thumbStyle} // Apply the dynamic style
          />
          <div className="mx-2">
            {intensity}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
