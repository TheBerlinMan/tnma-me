"use client";

import { useEffect, useState, useCallback, useRef } from "react";
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
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [nextLoaded, setNextLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [scrolledAway, setScrolledAway] = useState(false);

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
    if (images.length === 0 || expanded) return;
    const interval = setInterval(() => {
      setNextLoaded(false);
      setNextIndex((currentIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, currentIndex, expanded]);

  useEffect(() => {
    if (nextLoaded && nextIndex !== null) {
      const timeout = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex(null);
        setNextLoaded(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [nextLoaded, nextIndex]);

  const goNext = useCallback(() => {
    if (images.length === 0) return;
    setExpandedIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    if (images.length === 0) return;
    setExpandedIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!expanded) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    const handleWheel = () => setScrolledAway(true);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [expanded, goNext, goPrev]);

  // Swipe / drag handling for expanded overlay
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const dragging = useRef(false);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragStart.current = { x: e.clientX, y: e.clientY };
    dragging.current = false;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const dx = Math.abs(e.clientX - dragStart.current.x);
    if (dx > 10) dragging.current = true;
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!dragStart.current) return;
      const dx = e.clientX - dragStart.current.x;
      dragStart.current = null;
      if (Math.abs(dx) > 50) {
        if (dx < 0) goNext();
        else goPrev();
      }
    },
    [goNext, goPrev]
  );

  const getImageUrl = useCallback((key: string, bucket: string) => {
    return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(bucket)}`;
  }, []);

  if (images.length === 0) {
    return (
      <div className="w-full h-[300px] bg-gray-100 animate-pulse" />
    );
  }

  const current = images[currentIndex];
  const next = nextIndex !== null ? images[nextIndex] : null;
  const preloadIndex = (nextIndex ?? currentIndex + 1) % images.length;
  const preload = images[preloadIndex];

  return (
    <div
      className="relative w-full h-[300px] overflow-hidden bg-gray-100 cursor-pointer"
      onClick={() => {
        if (!expanded) {
          setExpandedIndex(currentIndex);
          setScrolledAway(false);
          setExpanded(true);
        }
      }}
    >
      <Image
        key={current.key}
        src={getImageUrl(current.key, current.bucket)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {next && (
        <Image
          key={next.key}
          src={getImageUrl(next.key, next.bucket)}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            nextLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setNextLoaded(true)}
        />
      )}
      {/* Preload upcoming image */}
      <div className="absolute -left-[9999px] w-0 h-0 overflow-hidden" aria-hidden="true">
        <Image
          src={getImageUrl(preload.key, preload.bucket)}
          alt=""
          width={1}
          height={1}
        />
      </div>
      {expanded && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-12 md:p-20 touch-none select-none"
          onClick={(e) => {
            e.stopPropagation();
            if (!dragging.current) setExpanded(false);
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="relative inline-flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getImageUrl(images[expandedIndex].key, images[expandedIndex].bucket)}
              alt=""
              className={`object-contain pointer-events-none max-w-[60vw] max-h-[60vh] md:max-w-[65vw] md:max-h-[65vh] transition-opacity duration-300 ${scrolledAway ? "opacity-40" : "opacity-100"}`}
              draggable={false}
            />
            <div className="absolute bottom-3 right-3 flex gap-1 z-10">
              <button
                className="text-white/50 hover:text-white transition-colors text-2xl leading-none px-1"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                className="text-white/50 hover:text-white transition-colors text-2xl leading-none px-1"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtCarousel;
