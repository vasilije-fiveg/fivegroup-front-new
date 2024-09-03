import React, { useState, useRef } from "react";
import video from "../../../public/assets/about.mp4";
import play from "../../../public/assets/play.png";
const VideoBox = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="relative bg-gray-400 w-full p-3 mt-20 mx-auto rounded-3xl">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full rounded-3xl "
        src={video} // Replace with your video file path
        type="video/mp4"
        controls={isPlaying}
      />

      {/* Gray Overlay and Play Button */}
      {!isPlaying && (
        <div
          className="absolute inset-0 video-overlay  rounded-3xl border-none bg-black  bg-opacity-80 flex justify-center items-center cursor-pointer"
          onClick={handlePlay}
        >
          <button className="text-white   bg-black p-3 bg-opacity-50 hover:bg-opacity-100 rounded-full">
            PLAY
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBox;
