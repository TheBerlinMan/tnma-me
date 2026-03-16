"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import Lightbox from "../components/Lightbox";
import ScrollToTop from "../components/ScrollToTop";

const BUCKET = "mydrawings";

const series = [
  { title: "On Anxiety", date: "October 2024", folder: "AnxietySeries" },
  { title: "On Cangalha", date: "June 2023", folder: "CangalhaSeries" },
];

const DrawingsPage = () => {
  const [seriesImages, setSeriesImages] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadFiles() {
      try {
        const results = await Promise.all(
          series.map(async (s) => {
            const res = await fetch(`/api/r2storage?bucket=${BUCKET}&folder=${s.folder}`);
            const files: string[] = await res.json();
            return { folder: s.folder, files };
          })
        );
        const imageMap: Record<string, string[]> = {};
        results.forEach((r) => {
          imageMap[r.folder] = r.files;
        });
        setSeriesImages(imageMap);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    }
    loadFiles();
  }, []);

  const getImageUrl = useCallback((key: string) => {
    return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(BUCKET)}`;
  }, []);

  const handleImageLoad = useCallback((key: string) => {
    setLoadedImages((prev) => new Set([...prev, key]));
  }, []);

  const openLightbox = useCallback((images: string[], index: number) => {
    setLightboxImages(images);
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  if (loading) {
    return (
      <div className="space-y-12">
        {series.map((s) => (
          <div key={s.folder}>
            <div className="mb-6"><span className="text-md font-medium">{s.title}</span><span className="font-light"> — {s.date}</span></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[200px] w-[142px] bg-gray-200 animate-pulse rounded-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {series.map((s) => {
        const images = seriesImages[s.folder] || [];
        return (
          <div key={s.folder}>
            <div className="mb-6"><span className="text-md font-medium">{s.title}</span><span className="font-light"> — {s.date}</span></div>
            <div className="flex flex-wrap gap-2">
              {images.map((imageKey, index) => (
                <div
                  key={imageKey}
                  onClick={() => openLightbox(images, index)}
                  className="bg-gray-100 rounded-sm overflow-hidden relative h-[200px] w-[142px] cursor-pointer group"
                >
                  <Image
                    src={getImageUrl(imageKey)}
                    alt={`${s.title} ${index + 1}`}
                    fill
                    sizes="142px"
                    priority={index < 6}
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                      loadedImages.has(imageKey) ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(imageKey)}
                  />
                  {!loadedImages.has(imageKey) && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <Lightbox
        images={lightboxImages}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onNavigate={setSelectedIndex}
        getImageUrl={getImageUrl}
      />

      <ScrollToTop />
    </div>
  );
};

export default DrawingsPage;
