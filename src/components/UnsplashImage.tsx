"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchUnsplashImage } from '@/utils/unsplash';

interface UnsplashImageProps {
  query: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function UnsplashImage({ 
  query, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false 
}: UnsplashImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setLoading(true);
        const url = await fetchUnsplashImage(query);
        if (url) {
          setImageUrl(url);
          setError(null);
        } else {
          setError("Failed to load image");
        }
      } catch (err) {
        setError("Error loading image");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [query]);

  if (loading) {
    return (
      <div 
        className={`bg-gray-800 animate-pulse ${className}`}
        style={{ width, height }}
      />
    );
  }

  if (error || !imageUrl) {
    return (
      <div 
        className={`bg-gray-900 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <p className="text-gray-400 text-sm">Image unavailable</p>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
