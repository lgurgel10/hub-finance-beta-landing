
import React from 'react';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
      <img 
        src="/lovable-uploads/9df08ef9-d60f-444b-ac5d-22f58db91e89.png" 
        alt="GranaHub Logo" 
        className="h-8" 
      />
    </div>
  );
};

export default Logo;
