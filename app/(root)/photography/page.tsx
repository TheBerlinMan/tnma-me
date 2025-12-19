"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lightbox from "../components/Lightbox";
import ScrollToTop from "../components/ScrollToTop";

// Component for lazy-loaded image that only renders when near viewport
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
    if (isPriority) return; // Priority images are always visible

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading when 200px away from viewport
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
      className="bg-gray-100 rounded-sm overflow-hidden relative h-[235px] w-[167px] cursor-pointer group"
    >
      {isVisible ? (
        <>
          <Image
            src={getImageUrl(imageKey)}
            alt={`Photo ${index + 1}`}
            fill
            sizes="167px"
            priority={isPriority}
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => onLoad(index)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      ) : (
        <div className="absolute inset-0 bg-gray-200" />
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
        // Fetch from all folders in parallel instead of sequentially
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
      return `/api/image?key=${encodeURIComponent(
        key
      )}&bucket=${encodeURIComponent(BUCKET)}`;
    },
    [BUCKET]
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
      <div>
        <div className="mb-4">
          <div className="font-medium">Photography</div>
          <div className="font-light">
            Archive of my favorite photos, unedited, in chronological order.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-[235px] w-[167px] bg-gray-200 animate-pulse rounded-sm"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-lg mb-4">
        <div className="font-medium">Photography</div>
        <div className="font-light">
          Archive of my favorite photos, unedited, in chronological order.
        </div>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-2">
        {images.map((imageKey, index) => (
          <LazyImage
            key={imageKey}
            imageKey={imageKey}
            index={index}
            getImageUrl={getImageUrl}
            onLoad={handleImageLoad}
            isLoaded={loadedImages.has(index)}
            onClick={() => openLightbox(index)}
            isPriority={index < 12} // Prioritize first 12 images (roughly 2 rows)
          />
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-gray-500 text-sm">
          No images found in the ilike collections.
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

export default PhotographyPage;
