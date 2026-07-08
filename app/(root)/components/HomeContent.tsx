"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/app/(root)/components/Header";
import HoverItem from "@/app/(root)/components/HoverItem";
import CollapsibleList from "@/app/(root)/components/CollapsibleList";
import ArtCarousel, { type CarouselSource } from "@/app/(root)/components/ArtCarousel";
import ContactModal from "@/app/(root)/components/ContactModal";
import Icons from "@/app/(root)/components/Icons";

const workItems = [
  { label: "Doma", info: "Founder · 2025 – Present · Cangalha, MG, BR" },
  { label: "Candles by Studio Bara", info: "Production · 2025 – Present · New York, NY" },
];

const pastWorkItems = [
  { label: "Cigna / Evernorth", info: "Software Engineer · 2024 – 2026 · Morris Plains, NJ" },
  { label: "MediaMath", info: "Financial Analyst · 2019 – 2021 · New York, NY" },
  { label: "UBS", info: "PPNR Modeler · 2017 – 2019 · New York, NY" },
];

// const websiteItems = [
//   { label: "tnma.me", href: "https://tnma.me" },
//   { label: "tnma.studio", href: "https://tnma.studio" },
//   { label: "doma.studio", href: "https://doma.studio" },
// ];

const degreeItems = [
  { label: "M.Arch", info: "The Pratt Institute · 2022 · Brooklyn, NY", suffix: "(inc)" },
  { label: "B.A. in Mathematics", info: "Pace University · 2018 · New York, NY" },
];

const courseItems = [
  { label: "Intro to Tailoring & Alterations", info: "Fashion Institute of Technology · 2026 · New York, NY" },
  { label: "Software Engineering Bootcamp", info: "General Assembly · 2025 · Remote" },
  { label: "Graphic Design", info: "School of Visual Arts · 2020 · New York, NY" },
  { label: "Color Theory", info: "School of Visual Arts · 2020 · New York, NY" },
];

const HomeContent = ({ carouselImages }: { carouselImages: CarouselSource[] }) => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
  <div className="min-h-screen flex flex-col p-12 md:p-24">
    <Header />
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    <div className="flex-1">
      <div className="flex flex-col gap-8 fade-in">
        <div className="font-light">
          <ArtCarousel images={carouselImages} />
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
              <div className="text-[0.95rem] font-medium mb-2">Software</div>
              {/* {websiteItems.map((item) => (
                <Link key={item.label} href={item.href} className="hover:underline group">
                  <span className="hidden group-hover:inline text-gray-500 text-xs">https://www.</span>{item.label}
                </Link>
              ))} */}
              <Link href="https://software.tnma.me" className="hover:underline">
                View Portfolio
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="text-[0.95rem] font-medium mb-2">Work</div>
              {workItems.map((item) => (
                <HoverItem key={item.label} item={item} />
              ))}
              <CollapsibleList title="Past Work" items={pastWorkItems} maxHeight="max-h-40" />
            </div>
            <div className="flex flex-col">
              <div className="text-[0.95rem] font-medium mb-2">
                Education
              </div>
              {degreeItems.map((item) => (
                <HoverItem key={item.label} item={item} />
              ))}
              <CollapsibleList title="Courses" items={courseItems} />
            </div>
            </div>
            <div className="flex flex-col text-sm text-right">
              {/* <Link href="https://tnma.studio" className="hover:underline">View my store</Link> */}
              <Link href="/about" className="hover:underline">About me</Link>
              <button onClick={() => setContactOpen(true)} className="hover:underline text-right cursor-pointer">Contact me</button>
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeContent;
