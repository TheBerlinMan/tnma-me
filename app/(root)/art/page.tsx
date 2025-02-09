"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { getRandomColor } from "@/lib/functions";

const page = () => {
  return (
    <div className="max-w-lg space-y-6">
      <Card title="Photography" />
      <Card title="Drawings" />
      <Card title="Jewelry" />
    </div>
  );
};

export default page;

export const Card = ({ title }: { title: string }) => {
  const [hoverColor, setHoverColor] = useState(getRandomColor());

  const handleMouseEnter = () => {
    setHoverColor(getRandomColor(hoverColor));
  };

  return (
    <div className="fade-in">
      <div 
        onMouseEnter={handleMouseEnter}
        style={{ 
          '--hover-color': `var(--${hoverColor})` 
        } as React.CSSProperties}
        className="border-2 rounded-lg border-white py-3 px-4 flex flex-col transition-all cursor-pointer hover-border-custom"
      >
        <div className="flex items-end gap-3 mb-1">
          <img src="https://picsum.photos/100/100" className="w-[100px]" alt="Photography" />
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
        </div>
        <hr className="border-gray-400 my-2" />
        <div className="flex flex-col gap-2">
          <h1 className="text-md">{title}</h1>
        </div>
      </div>
    </div>
  );
};


