'use client';

import React, { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  images: string[];
  children?: React.ReactNode;
}

export default function ParallaxBackground({ images, children }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  // Précharger les images
  useEffect(() => {
    images.forEach((imagePath) => {
      if (!imagePath) return;
      
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, imagePath]));
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${imagePath}`);
      };
      img.src = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
    });
  }, [images]);

  if (!isClient) {
    return (
      <div className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black">
        <div className="relative z-10 w-full">{children}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background container */}
      <div className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none">
        {/* Base background */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-black" />

        {/* Image 1 - Slow parallax */}
        {images[0] && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url('${images[0]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              opacity: 0.25,
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s linear',
              willChange: 'transform',
            }}
          />
        )}

        {/* Image 2 - Medium parallax */}
        {images[1] && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url('${images[1]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              opacity: 0.20,
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: 'transform 0.1s linear',
              willChange: 'transform',
            }}
          />
        )}

        {/* Image 3 - Fast parallax */}
        {images[2] && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url('${images[2]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              opacity: 0.15,
              transform: `translateY(${scrollY * 0.7}px)`,
              transition: 'transform 0.1s linear',
              willChange: 'transform',
            }}
          />
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom right, rgba(255,255,255,0.92), rgba(255,255,255,0.85), rgba(255,255,255,0.88))',
            backdropFilter: 'blur(0px)',
            pointerEvents: 'none',
          }}
        />
        
        {/* Dark mode overlay */}
        <div
          className="absolute inset-0 w-full h-full dark:block hidden"
          style={{
            background: 'linear-gradient(to bottom right, rgba(0,0,0,0.92), rgba(0,0,0,0.85), rgba(0,0,0,0.88))',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
