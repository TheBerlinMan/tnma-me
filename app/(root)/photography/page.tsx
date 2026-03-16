"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "../components/Lightbox";
import ScrollToTop from "../components/ScrollToTop";

const LazyImage = ({
  imageKey,
  index,
  getImageUrl,
  onLoad,
  isLoaded,
  onClick,
  isPriority,
}: {
  imageKey: string;
  index: number;
  getImageUrl: (key: string) => string;
  onLoad: (index: number) => void;
  isLoaded: boolean;
  onClick: () => void;
  isPriority: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(isPriority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPriority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isPriority]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className="bg-gray-100 rounded-sm overflow-hidden relative cursor-pointer group mb-2 break-inside-avoid"
    >
      {isVisible ? (
        <>
          <Image
            src={getImageUrl(imageKey)}
            alt={`Photo ${index + 1}`}
            width={400}
            height={600}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            priority={isPriority}
            className={`w-full h-auto transition-transform duration-300 group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => onLoad(index)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      ) : (
        <div className="w-full aspect-[2/3] bg-gray-200" />
      )}
    </div>
  );
};

const PhotographyPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const BUCKET = "myphotos";

  useEffect(() => {
    async function loadFiles() {
      try {
        const folderPromises = [1, 2, 3, 4].map((i) =>
          fetch(`/api/r2storage?bucket=${BUCKET}&folder=ilike${i}`).then(
            (res) => res.json()
          )
        );

        const results = await Promise.all(folderPromises);
        const allImages = results.flat();

        setImages(allImages);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    }
    loadFiles();
  }, []);

  const getImageUrl = useCallback(
    (key: string) => {
      return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(BUCKET)}`;
    },
    []
  );

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  }, []);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  if (loading) {
    return (
      <div className="columns-2 md:columns-3 gap-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="aspect-[2/3] bg-gray-200 animate-pulse rounded-sm mb-2 break-inside-avoid"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="columns-2 md:columns-3 gap-2">
        {images.map((imageKey, index) => (
          <LazyImage
            key={imageKey}
            imageKey={imageKey}
            index={index}
            getImageUrl={getImageUrl}
            onLoad={handleImageLoad}
            isLoaded={loadedImages.has(index)}
            onClick={() => openLightbox(index)}
            isPriority={index < 12}
          />
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-gray-500 text-sm">
          No images found in the ilike collections.
        </div>
      )}

      <Lightbox
        images={images}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onNavigate={setSelectedIndex}
        getImageUrl={getImageUrl}
      />

      <ScrollToTop />
    </div>
  );
};

export default PhotographyPage;
