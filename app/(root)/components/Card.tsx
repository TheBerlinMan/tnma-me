/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { getRandomColor } from "@/lib/functions";
import Image from "next/image";

export default function Card({
    title,
    imagePath,
    dateStarted,
    description,
  }: {
    title: string;
    imagePath?: string;
    dateStarted: string;
    description?: string;
  }) {
    // Initialize with an empty string so that the initial render is deterministic.
    const [hoverColor, setHoverColor] = useState("");
  
    // Set a random color only on the client after mount.
    useEffect(() => {
      setHoverColor(getRandomColor());
    }, []);
  
    const handleMouseEnter = () => {
      setHoverColor(getRandomColor(hoverColor));
    };
  
    return (
      <div className="fade-in">
        <div
          onMouseEnter={handleMouseEnter}
          style={
            {
              "--hover-color": `var(--${hoverColor})`,
            } as React.CSSProperties
          }
          className="border rounded-lg border-white py-3 px-4 flex flex-col transition-all cursor-pointer hover-border-custom"
        >
          <div className="flex flex-row space-around justify-between items-end gap-3">
            <h1 className="text-md">{title}</h1>
            <p className="text-sm text-gray-400">Since {dateStarted}</p>
          </div>
          <hr className="border-gray-400 mt-2 mb-4" />
          <div className="flex items-start gap-3 mb-1">
            <div className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] overflow-hidden flex items-center justify-center">
              <Image
                src={imagePath || `https://picsum.photos/100/100`}
                width={150}
                height={150}
                className="object-cover scale-125 translate-y-0.5"
                alt="Photography"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
  );
}
