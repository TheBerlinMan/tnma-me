"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import {
  getRandomColor,
} from "@/lib/functions";

const ICON_SIZE = 18;

type SocialIconProps = {
  size: number;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  children: React.ReactNode;
};

const SocialIcon = ({ size, className, style, onMouseEnter, children }: SocialIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="currentColor"
    className={className}
    style={style}
    onMouseEnter={onMouseEnter}
  >
    {children}
  </svg>
);

const InstagramIcon = (props: Omit<SocialIconProps, "children">) => (
  <SocialIcon {...props}>
    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" />
    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" />
    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" />
  </SocialIcon>
);

const GithubIcon = (props: Omit<SocialIconProps, "children">) => (
  <SocialIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
    />
  </SocialIcon>
);

const TwitterIcon = (props: Omit<SocialIconProps, "children">) => (
  <SocialIcon {...props}>
    <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" />
  </SocialIcon>
);

const ChessIcon = ({ size, className, style, onMouseEnter }: Omit<SocialIconProps, "children">) => (
  <svg
    width={size * 0.725}
    height={size}
    viewBox="0 0 290 400"
    className={className}
    style={style}
    onMouseEnter={onMouseEnter}
  >
    <path
      fill="currentColor"
      d="M145 400c151.9 0 145-46.5 145-55.9 0-35.8-13.4-74.5-44.4-98.1-16.1-12.3-25.1-23-30.2-32.6 10.6 0 12.9-1.8 16.8-7.3 13.1-18.8 18.9-38.2 16-61.2-.8-6.2-3.6-10.1-8.7-13.4l-13.9-9.1c4.6-10.7 7.1-22.3 7.1-34.5C232.6 39.2 193.3 0 145 0S57.4 39.2 57.4 87.8c0 12.1 2.5 23.8 7.1 34.5l-13.9 9.1c-5.1 3.4-8 7.3-8.7 13.4-3 23 2.9 42.4 16 61.2 3.8 5.5 6.1 7.3 16.8 7.3-5.1 9.5-14 20.2-30.2 32.6C13.5 269.5 0 308.1 0 344c0 9.5-6.9 56 145 56z"
    />
    <path
      fill="#fff"
      d="M145 366c108.1 0 111-20.2 111-21.5 0-27.4-9.9-54.9-31-70.9-43.8-33.5-49.3-63.4-50.1-82.2 0-5 0-9.2-.1-12.5h34c4-7.4 6-14.2 6-22.7l-38.5-25.4c13.4-9.7 22.1-25.5 22.1-43.3 0-29.6-23.9-53.5-53.3-53.5S91.7 57.9 91.7 87.5c0 17.8 8.7 33.6 22.1 43.3l-38.5 25.4c0 8.5 2 15.3 6 22.7h34c-.1 3.3-.1 7.5-.1 12.5-.8 18.8-6.3 48.7-50.1 82.2-21 15.9-31 43.5-31 70.9C34 345.8 36.9 366 145 366z"
    />
  </svg>
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
      chess: getRandomColor(),
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
    <div className="flex flex-col items-end gap-2.5 pt-3 text-black">
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
      <Link href="https://www.chess.com/member/pigeonmania" target="_blank" className={iconLinkClass}>
        <ChessIcon
          size={ICON_SIZE}
          className={iconClass}
          onMouseEnter={() => handleMouseEnter("chess")}
          style={
            {
              "--hover-color": `var(--${
                hoverColors["chess"] || "blue-200"
              })`,
            } as React.CSSProperties
          }
        />
      </Link>
    </div>
  );
};

export default Icons;
