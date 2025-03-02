"use client";

import { useState, useEffect } from "react";
import { Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getRandomColor } from "@/lib/functions";

const Footer = () => {
  // Start with an empty object so that SSR always renders a stable value.
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});

  // On mount, set random colors. This only happens on the client.
  useEffect(() => {
    setHoverColors({
      instagram: getRandomColor(),
      github: getRandomColor(),
      mail: getRandomColor(),   
    });
  }, []);

  const handleMouseEnter = (iconName: string) => {
    setHoverColors((prev) => ({
      ...prev,
      [iconName]: getRandomColor(prev[iconName]),
    }));
  };

  return (
    <footer className="text-sm text-gray-500">
      <div className="flex justify-start items-center gap-3 m-7">
        <div className="flex gap-3">
          <Link href="https://www.instagram.com/im.tnma" target="_blank">
            <Instagram
              size={20}
              strokeWidth={2}
              className="transition-colors hover-text-custom"
              onMouseEnter={() => handleMouseEnter("instagram")}
              style={{
                "--hover-color": `var(--${hoverColors["instagram"] || "blue-200"})`,
              } as React.CSSProperties}
            />
          </Link>
          <Link href="https://github.com/TheBerlinMan" target="_blank">
            <Github
              size={20}
              strokeWidth={2}
              className="transition-colors hover-text-custom"
              onMouseEnter={() => handleMouseEnter("github")}
              style={{
                "--hover-color": `var(--${hoverColors["github"] || "blue-200"})`,
              } as React.CSSProperties}
            />
          </Link>
          <Link href="mailto:tommyonik@gmail.com" target="_blank">
            <Mail
              size={20}
              strokeWidth={2}
              className="transition-colors hover-text-custom"
              onMouseEnter={() => handleMouseEnter("mail")}
              style={{
                "--hover-color": `var(--${hoverColors["mail"] || "blue-200"})`,
              } as React.CSSProperties}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
