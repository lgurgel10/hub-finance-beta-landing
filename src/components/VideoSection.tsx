
import React, { useRef, useState, useEffect } from 'react';

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
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-[40px]"
          autoPlay={false}
          loop
          muted
          playsInline
          controls={false}
        >
          <source src="/mockup iphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Play button overlay for both mobile and desktop */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            style={{ pointerEvents: 'auto', background: 'none' }}
            aria-label="Play video"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.8" />
              <polygon points="26,20 48,32 26,44" fill="#121212" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection; 
