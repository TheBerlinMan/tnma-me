"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const courseItems = [
  { label: "Intro to Tailoring & Alterations", info: "FIT · 2022 · New York, NY" },
  { label: "Software Engineering Bootcamp", info: "General Assembly · 2021 · Remote" },
  { label: "Graphic Design + Color Theory", info: "SVA · 2018 · New York, NY" },
];

const CourseItem = ({ item }: { item: { label: string; info: string } }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>{item.label}</div>
      {hovered && (
        <div className="text-xs text-gray-500 mt-0.5 mb-1">
          {item.info}
        </div>
      )}
    </div>
  );
};

const CoursesDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-light mb-2 text-gray-500 flex items-center gap-1 cursor-pointer text-left"
      >
        Courses
        <ChevronDown
          strokeWidth="1px"
          size="14px"
          className={`transition-transform duration-200 ${isOpen ? "" : "rotate-180"}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {courseItems.map((item) => (
          <CourseItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesDropdown;
