"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const BUCKET = "myphotos"

  useEffect(() => {
    async function loadFiles() {
      try {
        const allImages: string[] = [];
        
        // Fetch from ilike1 through ilike4 folders
        for (let i = 1; i <= 4; i++) {
          const folderName = `ilike${i}`;
          const res = await fetch(`/api/r2storage?bucket=${BUCKET}&folder=${folderName}`);
          const files: string[] = await res.json();
          allImages.push(...files);
        }
        
        setImages(allImages);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    }
    loadFiles();
  }, []);

  // Function to get the image URL via our proxy endpoint
  const getImageUrl = (key: string) => {
    return `/api/image?key=${encodeURIComponent(key)}&bucket=${encodeURIComponent(BUCKET)}`;
  };

  if (loading) {
    return (
      <div>
        <div className="text-sm max-w-lg">Loading photos from multiple collections...</div>
      </div>
    );
  }

  return (
    <div>

      <div className="max-w-lg mb-4">
        <div className="font-medium">Index</div>
        <div className="font-light">
          Archive of my favorite photos - unedited.
        </div>
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
              // width={167}
              // height={235}
              className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onError={() => console.error("Failed to load image:", imageKey)}
            />
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-gray-500 text-sm">
          No images found in the ilike collections.
        </div>
      )}
    </div>
  );
};

export default IndexPage;
