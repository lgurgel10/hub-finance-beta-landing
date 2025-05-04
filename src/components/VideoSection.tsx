import React from 'react';

const VideoSection = () => {
  return (
    <div className="w-full flex justify-center items-center py-2 bg-dark-700">
      <div className="w-[300px] h-[600px] relative transform scale-[0.9067]">
        <video
          className="w-full h-full object-cover rounded-[40px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/mockup iphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection; 