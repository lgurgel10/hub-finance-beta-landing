
import React, { useRef, useState } from 'react';
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
        {/* Video element - carregado somente quando o play é clicado */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover rounded-[40px] ${!isPlaying ? 'hidden' : ''}`}
          loop
          muted
          playsInline
          controls={false}
          // Não precarregar o vídeo inteiro, apenas metadados
          preload="metadata"
        >
          <source src="/mockup iphone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Div contendo uma imagem estática ao invés de carregar o vídeo */}
        {!isPlaying && (
          <div className="w-full h-full rounded-[40px] overflow-hidden">
            {/* Usando uma imagem estilizada que se parece com o primeiro frame */}
            <div className="w-full h-full bg-black rounded-[40px]">
              <picture>
                <source srcSet="/mockup-first-frame.webp" type="image/webp" />
                <img 
                  src="/mockup-first-frame.jpg" 
                  alt="App Preview" 
                  className="w-full h-full object-cover rounded-[40px]"
                  loading="eager"
                />
              </picture>
            </div>
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
