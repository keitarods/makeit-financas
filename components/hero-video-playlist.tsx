"use client";

import { useState } from "react";

const videos = [
  {
    mp4: "/videos/orcamento-family-hero-1.mp4",
  },
  {
    mp4: "/videos/orcamento-family-hero-2.mp4",
  },
  {
    mp4: "/videos/orcamento-family-hero-3.mp4",
  },
  {
    mp4: "/videos/orcamento-family-hero-4.mp4",
  },
];

export default function HeroVideoPlaylist({ poster }: { poster: string }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = videos[currentVideoIndex];

  return (
    <video
      key={currentVideoIndex}
      aria-hidden="true"
      autoPlay
      muted
      playsInline
      preload="metadata"
      poster={poster}
      className="absolute inset-0 h-full w-full object-cover"
      onEnded={() => setCurrentVideoIndex((currentVideoIndex + 1) % videos.length)}
    >
      <source src={currentVideo.mp4} type="video/mp4" />
    </video>
  );
}
