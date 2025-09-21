"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const BUCKET = "mydrawings";
  const FOLDER = "AnxietySeries";

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

  if (loading) {
    return (
      <div>
        <div className="text-sm max-w-lg">Loading drawings...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex gap-2">
        <div className="text-md font-medium">Anxiety Series</div>

        {/* <div className="font-light max-w-prose text-gray-500">
            favorites since 2022
          </div> */}
      </div>

      <div className="flex flex-wrap gap-2">
        {images.map((imageKey, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-sm overflow-hidden relative h-[235px] w-[167px]"
          >
            <Image
              src={getImageUrl(imageKey)}
              alt={`Photo ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 cursor-pointer"
              onError={() => console.error("Failed to load image:", imageKey)}
            />
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-gray-500 text-sm">
          No images found in the CangalhaSeries folder.
        </div>
      )}
    </div>
  );
};

export default IndexPage;
