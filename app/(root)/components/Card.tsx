"use client";

import { useState, useEffect } from "react";
import { getRandomColor } from "@/lib/functions";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

export default function Card({
    title,
    imagePath,
    dateStarted,
    description,
    githubLink,
    websiteLink
  }: {
    title: string;
    imagePath?: string;
    dateStarted?: string;
    description?: string;
    githubLink?: string;
    websiteLink?: string;
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
          className="border rounded-lg border-white py-3 px-4 flex flex-col transition-all hover-border-custom"
        >
          <div className="flex flex-row space-around justify-between items-end gap-3">
            <h1 className="text-md">{title}</h1>
            {dateStarted ? (
              <p className="text-sm text-gray-400">Since {dateStarted}</p>
            ) : (
              <div className="flex gap-2">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Globe size={20} />
                  </a>
                )}
              </div>
            )}
          </div>
          <hr className="border-gray-400 mt-2 mb-4" />
          <div className="flex items-start gap-3 mb-1">
            <div className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] overflow-hidden flex items-center justify-center rounded-md">
              <Image
                src={imagePath || `https://picsum.photos/100/100`}
                width={150}
                height={150}
                className="object-cover scale-125"
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
