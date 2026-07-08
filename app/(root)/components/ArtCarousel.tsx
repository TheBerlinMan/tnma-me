"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const FRAME_HEIGHT = 300;
const SCROLL_SPEED = 90; // pixels per second
const FRAME_GAP = 18;
const THUMBNAIL_HEIGHT = 600;
const PLACEHOLDER_WIDTH = 280;
const EAGER_IMAGE_COUNT = 6;

export type CarouselSource = {
  key: string;
  bucket: string;
};

type CarouselImage = CarouselSource & {
  displayWidth: number;
};

const ArtCarousel = ({ images: sources }: { images: CarouselSource[] }) => {
  const [images, setImages] = useState<CarouselImage[]>(() =>
    sources.map((img) => ({ ...img, displayWidth: PLACEHOLDER_WIDTH }))
  );
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [scrolledAway, setScrolledAway] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const stripWidthRef = useRef(0);

  const getThumbnailUrl = useCallback((key: string, bucket: string) => {
    return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(bucket)}&h=${THUMBNAIL_HEIGHT}&q=75`;
  }, []);

  const getFullImageUrl = useCallback((key: string, bucket: string) => {
    return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(bucket)}`;
  }, []);

  const handleImageLoad = useCallback(
    (key: string, naturalWidth: number, naturalHeight: number) => {
      const displayWidth = Math.round(
        (naturalWidth / naturalHeight) * FRAME_HEIGHT
      );
      setImages((prev) =>
        prev.map((img) =>
          img.key === key && img.displayWidth !== displayWidth
            ? { ...img, displayWidth }
            : img
        )
      );
    },
    []
  );

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
      pausedRef.current = false;
    };
  }, [expanded, goNext, goPrev]);

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

  useEffect(() => {
    if (!stripRef.current) return;

    const measure = () => {
      if (stripRef.current) {
        stripWidthRef.current = stripRef.current.offsetWidth;
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stripRef.current);
    return () => observer.disconnect();
  }, [images]);

  useEffect(() => {
    if (expanded || images.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const stripWidth = stripWidthRef.current;
      if (!pausedRef.current && trackRef.current && stripWidth > 0) {
        offsetRef.current -= SCROLL_SPEED * dt;
        if (offsetRef.current <= -stripWidth) {
          offsetRef.current += stripWidth;
        }
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [expanded, images.length]);

  const renderStrip = (stripKey: string) =>
    images.map((img, i) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={`${stripKey}-${img.key}-${i}`}
        src={getThumbnailUrl(img.key, img.bucket)}
        alt=""
        width={img.displayWidth}
        height={FRAME_HEIGHT}
        className="h-[300px] w-auto shrink-0 cursor-pointer block"
        style={{ marginLeft: i === 0 ? 0 : FRAME_GAP }}
        draggable={false}
        loading={i < EAGER_IMAGE_COUNT ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={i < EAGER_IMAGE_COUNT ? "high" : "auto"}
        onLoad={(e) =>
          handleImageLoad(
            img.key,
            e.currentTarget.naturalWidth,
            e.currentTarget.naturalHeight
          )
        }
        onClick={() => {
          setExpandedIndex(i);
          setScrolledAway(false);
          setExpanded(true);
        }}
      />
    ));

  if (images.length === 0) {
    return (
      <div
        className="w-full animate-pulse"
        style={{ height: FRAME_HEIGHT }}
      />
    );
  }

  return (
    <div
      className="relative w-full overflow-x-hidden"
      style={{ height: FRAME_HEIGHT }}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex h-full items-center will-change-transform"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        <div ref={stripRef} className="flex h-full shrink-0 items-center">
          {renderStrip("a")}
        </div>
        <div className="flex h-full shrink-0 items-center" aria-hidden="true">
          {renderStrip("b")}
        </div>
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
          <div className="flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getFullImageUrl(images[expandedIndex].key, images[expandedIndex].bucket)}
              alt=""
              className={`object-contain pointer-events-none max-w-[60vw] max-h-[60vh] md:max-w-[65vw] md:max-h-[65vh] transition-opacity duration-300 ${scrolledAway ? "opacity-40" : "opacity-100"}`}
              draggable={false}
            />
            <div className="flex items-center justify-center gap-1">
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
