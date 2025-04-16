"use client";

import React, { useRef, useState } from 'react';

export function WelcomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Welcome to <span className="text-[#0066ff]">Luxe Queer</span>
      </h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-8">
        Step beyond the velvet rope and into a world where luxury meets authenticity.
      </p>
      
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-[0_0_30px_rgba(0,0,255,0.2)] border border-[#0000ff]/20">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/quantum-visualization.jpg"
          onClick={togglePlay}
        >
          <source src="/welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {!isPlaying && (
          <button 
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors"
            aria-label="Play video"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0066ff]/80 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white" 
                className="w-8 h-8 md:w-10 md:h-10 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
