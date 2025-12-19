"use client";

import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
  getImageUrl: (key: string) => string;
}

const Lightbox = ({
  images,
  selectedIndex,
  onClose,
  onNavigate,
  getImageUrl,
}: LightboxProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isCurrentLoaded, setIsCurrentLoaded] = useState(false);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setIsCurrentLoaded(false);
      onNavigate((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length, onNavigate]);

  const goToPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setIsCurrentLoaded(false);
      onNavigate(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, images.length, onNavigate]);

  // Get adjacent indices for preloading
  const getAdjacentIndices = useCallback(
    (index: number) => {
      const prev = index === 0 ? images.length - 1 : index - 1;
      const next = (index + 1) % images.length;
      // Preload 2 images ahead and 1 behind
      const next2 = (index + 2) % images.length;
      return [prev, next, next2];
    },
    [images.length]
  );

  // Preload adjacent images when current image changes
  useEffect(() => {
    if (selectedIndex === null || images.length === 0) return;

    const adjacentIndices = getAdjacentIndices(selectedIndex);

    adjacentIndices.forEach((idx) => {
      if (!loadedImages.has(idx)) {
        const img = new window.Image();
        img.src = getImageUrl(images[idx]);
        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, idx]));
        };
      }
    });
  }, [selectedIndex, images, getImageUrl, getAdjacentIndices, loadedImages]);

  // Reset loaded state when opening lightbox on a new image
  useEffect(() => {
    if (selectedIndex !== null && loadedImages.has(selectedIndex)) {
      setIsCurrentLoaded(true);
    }
  }, [selectedIndex, loadedImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToNext, goToPrev, onClose]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  if (selectedIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
      >
        <X size={32} />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrev();
        }}
        className="absolute left-6 text-white/70 hover:text-white transition-colors z-10"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-6 text-white/70 hover:text-white transition-colors z-10"
      >
        <ChevronRight size={48} />
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading spinner */}
        {!isCurrentLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={getImageUrl(images[selectedIndex])}
          alt={`Image ${selectedIndex + 1}`}
          width={1200}
          height={1600}
          className={`max-w-full max-h-[90vh] object-contain transition-opacity duration-200 ${
            isCurrentLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          onLoad={() => {
            setIsCurrentLoaded(true);
            setLoadedImages((prev) => new Set([...prev, selectedIndex]));
          }}
        />
        <p className="absolute bottom-0 left-0 right-0 text-center text-white/50 text-sm py-4">
          {selectedIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
