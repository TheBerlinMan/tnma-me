'use client'
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Client component to handle the interactive carousel
function DrawingsCarousel({ drawingFiles }: { drawingFiles: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    api?.scrollTo(index);
  };

  // Handle carousel change
  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Carousel className="max-w-xs" setApi={setApi}>
        <CarouselContent>
          {drawingFiles.map((file, index) => (
            <CarouselItem key={index} className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center">
                <Image
                  src={file}
                  alt={`Drawing - ${index}`}
                  width={300}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <hr className="w-full border-gray-500" />

      {drawingFiles.map((filename, index) => (
        <div 
          key={index}
          onClick={() => handleThumbnailClick(index)}
          className={`cursor-pointer transition-opacity ${
            selectedIndex === index ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <Image 
            src={`${filename}`} 
            alt={`Drawing - ${filename}`} 
            width={75} 
            height={75}
          />
        </div>
      ))}
    </div>
  );
}

export default DrawingsCarousel;
