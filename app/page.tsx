"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "@/app/(root)/components/Header";
import Footer from "@/app/(root)/components/Footer";
import CoursesDropdown from "@/app/(root)/components/CoursesDropdown";
import ArtCarousel from "@/app/(root)/components/ArtCarousel";

const workItems = [
  { label: "Software Engineer", info: "Evernorth · 2023 – Present · New York, NY" },
  { label: "Founder of Doma", info: "2022 – Present · New York, NY" },
];

const pastWorkItems = [
  { label: "Financial Analyst", info: "MediaMath · 2019 – 2021 · New York, NY" },
  { label: "PPNR Modeler", info: "UBS · 2017 – 2019 · Weehawken, NJ" },
];

const websiteItems = [
  { label: "tnma.me", href: "https://tnma.me" },
  { label: "tnma.studio", href: "https://tnma.studio" },
  { label: "doma.studio", href: "https://doma.studio" },
];

const degreeItems = [
  { label: "M.Arch", info: "The Pratt Institute · 2020 · Brooklyn, NY", suffix: "(inc)" },
  { label: "B.A. in Mathematics", info: "Pace University · 2017 · New York, NY" },
];

type HoverItemData = { label: string; info: string; href?: string; hrefLabel?: string; suffix?: string };

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

const PastWorkDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-light mb-2 text-gray-500 flex items-center gap-1 cursor-pointer text-left"
      >
        Past Work
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
        {pastWorkItems.map((item) => (
          <HoverItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

const Home = () => (
  <div className="min-h-screen flex flex-col p-24">
    <Header />
    <div className="flex-1">
      <div className="flex flex-col gap-8 fade-in">
        <div className="font-light">
          <ArtCarousel />
          <div className="flex flex-row justify-between mt-12">
            <div className="flex flex-col gap-6 md:flex-row md:gap-20">
            <div className="flex flex-col">
              <div className="text-[0.95rem] font-medium mb-2">Art</div>
              <Link href="/photography" className="hover:underline">
                Photography
              </Link>
              <Link href="/drawings" className="hover:underline">
                Drawings
              </Link>
              <Link href="/projects" className="hover:underline">
                Sewing
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="text-[0.95rem] font-medium mb-2">Websites</div>
              {websiteItems.map((item) => (
                <Link key={item.label} href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="text-[0.95rem] font-medium mb-2">Work</div>
              {workItems.map((item) => (
                <HoverItem key={item.label} item={item} />
              ))}
              <PastWorkDropdown />
            </div>
            <div className="flex flex-col">
              <div className="text-[0.95rem] font-medium mb-2">
                Degrees
              </div>
              {degreeItems.map((item) => (
                <HoverItem key={item.label} item={item} />
              ))}
              <CoursesDropdown />
            </div>
            </div>
            <div className="flex flex-col text-sm text-right">
              <Link href="https://tnma.studio" className="hover:underline">View my store</Link>
              <Link href="/contact" className="hover:underline">Contact me</Link>
            </div>
          </div>
        </div>
          {/* <div className="font-light mt-4 flex items-center gap-1">
            Visit my <Link href="/projects" className="underline">store</Link>
            <ArrowUpRight strokeWidth="1px" size={"16px"} />
          </div> */}
      </div>
    </div>
    {/* <div>
      <Footer />
    </div> */}
  </div>
);

export default Home;
