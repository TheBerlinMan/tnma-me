/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { getRandomColor } from "@/lib/functions";

export default function Card({
    title,
    dateStarted,
  }: {
    title: string;
    dateStarted: string;
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
            <img
              src="https://picsum.photos/100/100"
              className="w-[100px]"
              alt="Photography"
            />
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </p>
          </div>
        </div>
      </div>
  );
}
