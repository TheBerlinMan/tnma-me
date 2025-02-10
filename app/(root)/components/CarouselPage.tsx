"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "./Carousel";

function CarouselPage({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when images change (tab switch)
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <Carousel 
          images={images} 
          currentIndex={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      </div>

      <hr className="w-full border-gray-500" />

      <div className="flex flex-wrap justify-center gap-4">
        {images.map((filename, index) => (
          <div 
            key={index} 
            className={`cursor-pointer transition-opacity duration-200 h-[75px] ${
              currentIndex === index ? 'opacity-100' : 'opacity-50'
            } hover:opacity-100`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={filename}
              alt={filename}
              width={75}
              height={75}
              className="object-cover h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselPage;
