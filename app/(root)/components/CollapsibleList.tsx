"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import HoverItem, { type HoverItemData } from "@/app/(root)/components/HoverItem";

type CollapsibleListProps = {
  title: string;
  items: HoverItemData[];
  maxHeight?: string;
};

const CollapsibleList = ({ title, items, maxHeight = "max-h-48" }: CollapsibleListProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) setIsOpen(false);
  }, []);

  return (
    <div className="flex flex-col mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-light mb-2 text-gray-500 flex items-center gap-1 cursor-pointer text-left"
      >
        {title}
        <ChevronDown
          strokeWidth="1px"
          size="14px"
          className={`transition-transform duration-200 ${isOpen ? "" : "rotate-180"}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? `${maxHeight} opacity-100` : "max-h-0 opacity-0"
        }`}
      >
        {items.map((item) => (
          <HoverItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollapsibleList;
