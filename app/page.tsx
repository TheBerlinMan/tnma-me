"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/app/(root)/components/Header";
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

const ContactModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    await fetch("https://formsubmit.co/ajax/tommyonik@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    setSending(false);
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setSent(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 w-full max-w-md mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        {sent ? (
          <p className="text-sm py-4">Thank you! Your message has been sent.</p>
        ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <h2 className="text-lg font-medium mb-1">Contact me</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500 resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-black text-white py-2 text-sm hover:bg-gray-800 cursor-pointer disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
        )}
      </div>
    </div>
  );
};

const PastWorkDropdown = () => {
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

const Home = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
  <div className="min-h-screen flex flex-col p-12 md:p-24">
    <Header />
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
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
                <Link key={item.label} href={item.href} className="hover:underline group">
                  <span className="hidden group-hover:inline text-gray-500 text-xs">https://www.</span>{item.label}
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
              <button onClick={() => setContactOpen(true)} className="hover:underline text-right cursor-pointer">Contact me</button>
              <Link href="/about" className="hover:underline">About me</Link>
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
};

export default Home;
