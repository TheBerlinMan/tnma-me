"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { MobileFooter } from "./Footer";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'main' | 'work' | 'exhibitions'>('main');
  const [isClosing, setIsClosing] = useState(false);
  
  const workItems = [
    { href: "/work/drawings2024", label: "Drawings 2024" },
    { href: "/work/gesturediary2023", label: "Gesture Diary 2023" },
    { href: "/work/watercolors", label: "Watercolors" },
  ];

  const exhibitionItems = [
    { href: "/exhibitions/feverdreams2024", label: "The Now: Fever Dreams 2024" },
    { href: "/exhibitions/surrealistas2024", label: "Reverberações Surrealistas no MAB 2024" },
  ];

  const handleBackToMain = () => {
    setMobileView('main');
  };

  const handleMobileNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 100);
  };

  const renderMobileContent = () => {
    switch (mobileView) {
      case 'work':
        return (
          <div className="flex flex-col items-center gap-3 text-xl">
            <button 
              onClick={handleBackToMain}
              className="mb-4 flex items-center gap-2 pr-5"
            >
              <ChevronLeft /> Back
            </button>
            {workItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer"
                onClick={(e) => handleMobileNavigation(item.href, e)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        );
      case 'exhibitions':
        return (
          <div className="flex flex-col items-center gap-3 text-xl">
            <button 
              onClick={handleBackToMain}
              className="mb-4 flex items-center gap-2 pr-5"
            >
              <ChevronLeft /> Back
            </button>
            {exhibitionItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer"
                onClick={(e) => handleMobileNavigation(item.href, e)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        );
      default:
        return (
          <nav className="flex flex-col items-center gap-3 text-xl z-10">
            <button 
              className="cursor-pointer flex items-center gap-2 pl-8"
              onClick={() => setMobileView('work')}
            >
              Work <ChevronRight />
            </button>
            <button 
              className="cursor-pointer flex items-center gap-2 pl-8"
              onClick={() => setMobileView('exhibitions')}
            >
              Exhibitions <ChevronRight />
            </button>
            <Link 
              href="/cv" 
              className="cursor-pointer"
              onClick={(e) => handleMobileNavigation('/cv', e)}
            >
              CV
            </Link>
            <Link 
              href="/about" 
              className="cursor-pointer"
              onClick={(e) => handleMobileNavigation('/about', e)}
            >
              About
            </Link>
          </nav>
        );
    }
  };

  return (
    <header className="flex justify-between items-end m-7">
      <Link href="/">
        <h1 className="text-xl sm:text-2xl cursor-pointer leading-none">ANTÔNIA BARA</h1>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="flex gap-6">
          <NavDropdown trigger="Work" items={workItems} />
          <NavDropdown trigger="Exhibitions" items={exhibitionItems} />
          <Link href="/cv" className="cursor-pointer">CV</Link>
          <Link href="/about" className="cursor-pointer">About</Link>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden leading-none relative w-6 h-6 z-[51]"
        onClick={() => {
          if (isMobileMenuOpen) {
            setIsClosing(true);
            setMobileView('main');
          } else {
            setIsMobileMenuOpen(true);
          }
        }}
      >
        <Menu className={`absolute inset-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`} />
        <X className={`absolute inset-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className={`flex-1 flex items-center justify-center ${isClosing ? "animate-slideDown" : "animate-slideUp"}`}
               onAnimationEnd={() => {
                 if (isClosing) {
                   setIsClosing(false);
                   setIsMobileMenuOpen(false);
                 }
               }}>
            {renderMobileContent()}
          </div>
          <div className="pb-7 flex justify-center items-center">
            <MobileFooter onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
