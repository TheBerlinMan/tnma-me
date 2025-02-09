"use client";

import Link from "next/link";
import { getRandomColor } from "@/lib/functions";

interface ColoredLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const ColoredLink = ({ href, children, target }: ColoredLinkProps) => {
  return (
    <Link 
      className="underline hover:transition-colors duration-300"
      href={href}
      target={target}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = getRandomColor();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '';
      }}
    >
      {children}
    </Link>
  );
};

export default ColoredLink; 