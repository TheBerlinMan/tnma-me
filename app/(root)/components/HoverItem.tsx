"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export type HoverItemData = {
  label: string;
  info: string;
  href?: string;
  hrefLabel?: string;
  suffix?: string;
};

const HoverItem = ({ item }: { item: HoverItemData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-1">
        {item.href && item.hrefLabel ? (
          <>
            {item.label} @
            <Link href={item.href} className="underline">
              {item.hrefLabel}
            </Link>
            <ArrowUpRight strokeWidth="1px" size={"16px"} />
          </>
        ) : item.href ? (
          <Link href={item.href} className="hover:underline">
            {item.label}
          </Link>
        ) : (
          <span>
            {item.label}
            {item.suffix && (
              <span className="text-xs text-gray-500 italic ml-1">{item.suffix}</span>
            )}
          </span>
        )}
      </div>
      {hovered && (
        <div className="text-xs text-gray-500 mt-0.5 mb-1 flex items-center gap-1 whitespace-nowrap">
          {item.info}
        </div>
      )}
    </div>
  );
};

export default HoverItem;
