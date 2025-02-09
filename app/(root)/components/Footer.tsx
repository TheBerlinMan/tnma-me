"use client";

import { useState, useEffect } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getRandomColor } from "@/lib/functions";

interface FooterProps {
  mobile?: boolean;
}

const Footer = ({ mobile }: FooterProps) => {
  // Start with an empty object so that SSR always renders a stable value.
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});

  // On mount, set random colors. This only happens on the client.
  useEffect(() => {
    setHoverColors({
      instagram: getRandomColor(),
      github: getRandomColor(),
      linkedin: getRandomColor(),
    });
  }, []);

  const handleMouseEnter = (iconName: string) => {
    setHoverColors((prev) => ({
      ...prev,
      [iconName]: getRandomColor(prev[iconName]),
    }));
  };

  return (
    <footer className="text-sm text-gray-500 text-center">
      {!mobile && <hr className="border-gray-500 border-1 mb-4" />}
      <div
        className={
          mobile
            ? "flex flex-col p-4 justify-center items-center space-y-2"
            : "flex justify-between items-center gap-3 flex-col sm:flex-row m-7"
        }
      >
        {mobile ? (
          <>
            <div className="flex gap-3">
              <Link href="https://www.instagram.com/im.tnma" target="_blank">
                <Instagram
                  size={20}
                  strokeWidth={1}
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
                  strokeWidth={1}
                  className="transition-colors hover-text-custom"
                  onMouseEnter={() => handleMouseEnter("github")}
                  style={{
                    "--hover-color": `var(--${hoverColors["github"] || "blue-200"})`,
                  } as React.CSSProperties}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/thomas-onik/" target="_blank">
                <Linkedin
                  size={20}
                  strokeWidth={1}
                  className="transition-colors hover-text-custom"
                  onMouseEnter={() => handleMouseEnter("linkedin")}
                  style={{
                    "--hover-color": `var(--${hoverColors["linkedin"] || "blue-200"})`,
                  } as React.CSSProperties}
                />
              </Link>
            </div>
            <p>Tommy Onik © All Rights Reserved</p>
          </>
        ) : (
          <>
            <p>Tommy Onik © All Rights Reserved</p>
            <div className="flex gap-3">
              <Link href="https://www.instagram.com/im.tnma" target="_blank" className="text-sm">
                <Instagram
                  size={20}
                  className="transition-colors hover-text-custom"
                  onMouseEnter={() => handleMouseEnter("instagram")}
                  style={{
                    "--hover-color": `var(--${hoverColors["instagram"] || "blue-200"})`,
                  } as React.CSSProperties}
                />
              </Link>
              <Link href="https://github.com/TheBerlinMan" target="_blank" className="text-sm">
                <Github
                  size={20}
                  className="transition-colors hover-text-custom"
                  onMouseEnter={() => handleMouseEnter("github")}
                  style={{
                    "--hover-color": `var(--${hoverColors["github"] || "blue-200"})`,
                  } as React.CSSProperties}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/thomas-onik/" target="_blank" className="text-sm">
                <Linkedin
                  size={20}
                  className="transition-colors hover-text-custom"
                  onMouseEnter={() => handleMouseEnter("linkedin")}
                  style={{
                    "--hover-color": `var(--${hoverColors["linkedin"] || "blue-200"})`,
                  } as React.CSSProperties}
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
