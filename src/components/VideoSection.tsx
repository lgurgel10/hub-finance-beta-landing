
import React, { useRef, useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="w-full flex justify-center items-center pt-0 mt-0 sm:py-2 sm:mt-[-12px] bg-dark-700">
      <div className="w-[300px] h-[600px] relative transform scale-[0.9067]">
        {/* Video element - hidden until play is clicked */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover rounded-[40px] ${!isPlaying ? 'hidden' : ''}`}
          onLoadedData={handleVideoLoaded}
          loop
          muted
          playsInline
          controls={false}
          preload="metadata"
        >
          <source src="/mockup iphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Static mockup image shown until play is clicked */}
        <div className={`w-full h-full bg-black rounded-[40px] flex items-center justify-center ${isPlaying ? 'hidden' : ''}`}>
          {/* Use a div with device frame styling */}
          <div className="w-full h-full rounded-[40px] bg-gray-900 border-8 border-gray-800 relative overflow-hidden">
            {/* Mock screen content - can be customized */}
            <div className="w-full h-full bg-gradient-to-b from-[#121212] to-[#1a1a1a] flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 mb-6 bg-[oklch(69.6%_.17_162.48)] rounded-full animate-pulse-slow"></div>
              <div className="w-3/4 h-3 bg-gray-700 rounded-full mb-3"></div>
              <div className="w-1/2 h-3 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        
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
