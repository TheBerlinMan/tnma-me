"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "../components/Lightbox";
import ScrollToTop from "../components/ScrollToTop";

const SewingPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const BUCKET = "mydesigns";
  const FOLDER = "Sewing";

  useEffect(() => {
    async function loadFiles() {
      try {
        const res = await fetch(
          `/api/r2storage?bucket=${BUCKET}&folder=${FOLDER}`
        );
        const files: string[] = await res.json();
        setImages(files);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    }
    loadFiles();
  }, []);

  const getImageUrl = (key: string) => {
    return `/api/image?key=${encodeURIComponent(
      key
    )}&bucket=${encodeURIComponent(BUCKET)}`;
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  if (loading) {
    return (
      <div>
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[338px] w-[225px] bg-gray-200 animate-pulse rounded-sm"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Grid */}
      <div className="flex flex-wrap gap-2">
        {images.map((imageKey, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="bg-gray-100 rounded-sm overflow-hidden relative h-[338px] w-[225px] cursor-pointer group"
          >
            <Image
              src={getImageUrl(imageKey)}
              alt={`Sewing ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                loadedImages.has(index) ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(index)}
            />
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-gray-500 text-sm">
          No images found in the Sewing folder.
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onNavigate={setSelectedIndex}
        getImageUrl={getImageUrl}
      />

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
};

export default SewingPage;
