import React, { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobile();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // For mobile, make sure to load the first frame
    if (videoRef.current) {
      // This forces the video to load and display its first frame
      videoRef.current.load();
      
      // Add poster attribute dynamically after the component mounts
      if (isMobile) {
        videoRef.current.currentTime = 0.1;
      }
    }
  }, [isMobile]);

  return (
    <div className="w-full flex justify-center items-center pt-0 mt-0 sm:py-2 sm:mt-[-12px] bg-dark-700">
      <div className="w-[300px] h-[600px] relative transform scale-[0.9067]">
        <img
          src="/mockup iphone.gif"
          alt="Mockup iPhone animado"
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default VideoSection; 
