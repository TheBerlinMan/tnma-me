"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import {
  getRandomColor,
} from "@/lib/functions";

const TARGET_STROKE_PX = 1.1;
const ICON_SIZE = 24;

const getStrokeWidth = (viewBox: string, size: number) => {
  const viewBoxSize = Number(viewBox.split(" ").pop());
  return (TARGET_STROKE_PX * viewBoxSize) / size;
};

type SocialIconProps = {
  size: number;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  viewBox: string;
  children: React.ReactNode;
};

const SocialIcon = ({
  size,
  className,
  style,
  onMouseEnter,
  viewBox,
  children,
}: SocialIconProps) => {
  const strokeWidth = getStrokeWidth(viewBox, size);

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </svg>
  );
};

const InstagramIcon = (props: Omit<SocialIconProps, "viewBox" | "children">) => (
  <SocialIcon viewBox="0 0 64 64" {...props}>
    <path d="M20,7H44A13,13,0,0,1,57,20V44A13,13,0,0,1,44,57H20A13,13,0,0,1,7,44V20A13,13,0,0,1,20,7Z" />
    <circle cx="32" cy="32" r="10.67" />
    <circle cx="44.5" cy="17.5" r="1.5" fill="currentColor" stroke="none" />
  </SocialIcon>
);

const GithubIcon = (props: Omit<SocialIconProps, "viewBox" | "children">) => (
  <SocialIcon viewBox="0 0 48 48" {...props}>
    <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
  </SocialIcon>
);

const TwitterIcon = (props: Omit<SocialIconProps, "viewBox" | "children">) => (
  <SocialIcon viewBox="0 0 48 48" {...props}>
    <path d="M38.74,16.55v1c0,10.07-7.64,21.61-21.62,21.61A21.14,21.14,0,0,1,5.5,35.71a12.22,12.22,0,0,0,1.81.11,15.25,15.25,0,0,0,9.44-3.24,7.56,7.56,0,0,1-7.1-5.29,6.9,6.9,0,0,0,1.44.15,7.53,7.53,0,0,0,2-.27A7.57,7.57,0,0,1,7,19.72v-.1a7.42,7.42,0,0,0,3.44.94A7.54,7.54,0,0,1,8.05,10.5a21.58,21.58,0,0,0,15.68,7.94a6.38,6.38,0,0,1-.21-1.74,7.55,7.55,0,0,1,13.17-5.31,15.59,15.59,0,0,0,4.83-1.85,7.65,7.65,0,0,1-3.39,4.27,15.87,15.87,0,0,0,4.37-1.26,15.56,15.56,0,0,1-3.76,4Z" />
  </SocialIcon>
);

const Icons = () => {
  // Start with an empty object so that SSR always renders a stable value.
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});

  // On mount, set random colors. This only happens on the client.
  useEffect(() => {
    setHoverColors({
      instagram: getRandomColor(),
      github: getRandomColor(),
      x: getRandomColor(),
    });
  }, []);

  const handleMouseEnter = (iconName: string) => {
    setHoverColors((prev) => ({
      ...prev,
      [iconName]: getRandomColor(prev[iconName]),
    }));
  };

  const iconLinkClass = "inline-flex h-6 w-6 items-center justify-center";
  const iconClass = "block transition-colors hover-text-custom";

  return (
    <div className="mt-auto flex w-full items-center justify-between pt-6 text-black">
      <Link href="https://github.com/TheBerlinMan" target="_blank" className={iconLinkClass}>
        <GithubIcon
          size={ICON_SIZE}
          className={iconClass}
          onMouseEnter={() => handleMouseEnter("github")}
          style={
            {
              "--hover-color": `var(--${
                hoverColors["github"] || "blue-200"
              })`,
            } as React.CSSProperties
          }
        />
      </Link>
      <Link href="https://x.com/imtnma" target="_blank" className={iconLinkClass}>
        <TwitterIcon
          size={ICON_SIZE}
          className={iconClass}
          onMouseEnter={() => handleMouseEnter("x")}
          style={
            {
              "--hover-color": `var(--${
                hoverColors["x"] || "blue-200"
              })`,
            } as React.CSSProperties
          }
        />
      </Link>
      <Link href="https://www.instagram.com/im.tnma" target="_blank" className={iconLinkClass}>
        <InstagramIcon
          size={ICON_SIZE}
          className={iconClass}
          onMouseEnter={() => handleMouseEnter("instagram")}
          style={
            {
              "--hover-color": `var(--${
                hoverColors["instagram"] || "blue-200"
              })`,
            } as React.CSSProperties
          }
        />
      </Link>
    </div>
  );
};

export default Icons;
