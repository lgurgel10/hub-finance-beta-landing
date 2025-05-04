
import React, { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full flex justify-center items-center pt-0 mt-0 sm:py-2 sm:mt-[-12px] bg-dark-700">
      <div className="w-[300px] h-[600px] relative transform scale-[0.9067]">
        {/* Video element - always loaded but hidden until play is clicked */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover rounded-[40px] ${!isPlaying ? 'hidden' : ''}`}
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
        >
          <source src="/mockup iphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* First frame of video shown until play is clicked */}
        {!isPlaying && (
          <div className="w-full h-full rounded-[40px] overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-[40px] pointer-events-none"
              muted
              playsInline
              preload="auto"
              autoPlay={false}
            >
              <source src="/mockup iphone.mp4#t=0.001" type="video/mp4" />
            </video>
          </div>
        )}
        
        {/* Play button overlay visible on both mobile and desktop until played */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <div className="rounded-full bg-white bg-opacity-80 p-4 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-opacity-100">
              <Play size={32} className="text-dark-700 ml-1" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
