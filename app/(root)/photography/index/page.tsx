"use client";

import React from "react";
import Image from "next/image";
import BackRedirect from "@/app/(root)/components/BackRedirect";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFiles() {
      try {
        // Use "Index" (capital I) to match your R2 folder structure
        const res = await fetch(`/api/r2storage?folder=Index`);
        const files: string[] = await res.json();
        setImages(files);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    }
    loadFiles();
  }, []);

  // Function to get the image URL via our proxy endpoint
  const getImageUrl = (key: string) => {
    return `/api/image?key=${encodeURIComponent(key)}`;
  };

  if (loading) {
    return (
      <div>
        <BackRedirect />
        <div className="text-sm max-w-lg">
          Loading photos...
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackRedirect />
      <div className="text-sm max-w-lg mb-6">
        A collection of my favorite photos. From 2016 until today. 
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imageKey, index) => (
          <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
            <Image
              src={getImageUrl(imageKey)}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onError={() => console.error('Failed to load image:', imageKey)}
            />
          </div>
        ))}
      </div>
      
      {images.length === 0 && (
        <div className="text-gray-500 text-sm">
          No images found in the Index folder.
        </div>
      )}
    </div>
  );
};

export default IndexPage;
