
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="h-8 w-8 bg-gradient-to-br from-mint-400 to-mint-600 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-xl">G</span>
        </div>
        <div className="absolute -top-1 -right-1 h-2 w-2 bg-mint-400 rounded-full glow"></div>
      </div>
      <span className="font-bold text-xl text-white">GranaHub</span>
    </div>
  );
};

export default Logo;
