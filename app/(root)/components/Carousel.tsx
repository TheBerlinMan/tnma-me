"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, currentIndex, onIndexChange }) => {
  const goToNext = () => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="w-full">
      <div className="w-full aspect-square relative bg-black flex flex-col px-6 pb-6">
        <div id="carousel-container" className="flex-1 relative">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between px-6">
        <div className="w-full flex justify-between">
          <button
            onClick={goToPrevious}
            className="flex items-center justify-center p-2 hover:bg-gray-100 hover:text-black rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white hover:text-black" strokeWidth={2} />
          </button>

          <button
            onClick={goToNext}
            className="flex items-center justify-center p-2 hover:bg-gray-100 hover:text-black rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white hover:text-black" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
