"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const artSources = [
  { bucket: "myphotos", folder: "ilike1" },
  { bucket: "myphotos", folder: "ilike2" },
  { bucket: "myphotos", folder: "ilike3" },
  { bucket: "myphotos", folder: "ilike4" },
  { bucket: "mydrawings", folder: "AnxietySeries" },
  { bucket: "mydrawings", folder: "CangalhaSeries" },
];

function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const ArtCarousel = () => {
  const [images, setImages] = useState<{ key: string; bucket: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadAll() {
      try {
        const results = await Promise.all(
          artSources.map(async (source) => {
            const res = await fetch(
              `/api/r2storage?bucket=${source.bucket}&folder=${source.folder}`
            );
            const files: string[] = await res.json();
            return files.map((key) => ({ key, bucket: source.bucket }));
          })
        );
        const all = shuffle(results.flat());
        setImages(all);
      } catch (error) {
        console.error("Error loading carousel images:", error);
      }
    }
    loadAll();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setLoaded(false);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getImageUrl = useCallback((key: string, bucket: string) => {
    return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(bucket)}`;
  }, []);

  if (images.length === 0) {
    return (
      <div className="w-full h-[300px] bg-gray-100 rounded-lg animate-pulse" />
    );
  }

  const current = images[currentIndex];
  const next = images[(currentIndex + 1) % images.length];

  return (
    <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-gray-100">
      <Image
        key={current.key}
        src={getImageUrl(current.key, current.bucket)}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
      {/* Preload next image */}
      <div className="absolute -left-[9999px] w-0 h-0 overflow-hidden" aria-hidden="true">
        <Image
          src={getImageUrl(next.key, next.bucket)}
          alt=""
          width={1}
          height={1}
        />
      </div>
    </div>
  );
};

export default ArtCarousel;
