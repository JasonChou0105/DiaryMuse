"use client";

import AudioPlayer from "./AudioPlayer";
import Lyrics from "./Lyrics";

const Result = () => {
  return (
    <div className="flex flex-col items-center p-4 mt-24">
      <div className="text-3xl w-2/3 mb-6 pb-2 font-bold border-b-2 border-beige-300">
        I love Darsh Gupta
      </div>
      <div className="flex justify-center items-center p-4">
        <iframe
          src="https://www.udio.com/embed/hrq5gZLv9YmdBMAPBjDvy7?embedVariant=default&utm_source=generator"
          className="w-[530px] h-[228px] rounded-[12px] border-none drop-shadow-3xl"
          allowFullScreen
        ></iframe>
      </div>
      <Lyrics />
    </div>
  );
};

export default Result;
