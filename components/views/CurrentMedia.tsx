import React from 'react';
import NextImage from 'next/image';

interface MediaItem {
  type: 'main' | 'screenshot';
  url: string;
  alt: string;
}

interface CurrentMediaProps {
  item: MediaItem;
  className?: string;
  autoPlay?: boolean;
  showModal?: boolean;
}

export const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4');

export const CurrentMedia: React.FC<CurrentMediaProps> = ({ item, className = "", autoPlay = false, showModal = false }) => {
  if (isVideo(item.url)) {
    return (
      <video
        src={item.url}
        className={`w-full h-full ${className}`}
        controls={showModal}
        autoPlay={autoPlay}
        loop
        muted={!showModal}
        playsInline
      />
    );
  }
  return (
    <NextImage
      src={item.url}
      alt={item.alt}
      fill
      className={`${className}`}
    />
  );
};
