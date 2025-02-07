"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import Footer from "./Footer";

const navItems = [
  { 
    name: "Art", 
    subItems: [
      { name: "Photography", href: "/art/photography" },
      { name: "Pastels", href: "/art/pastels" },
      { name: "Jewelry", href: "/art/jewelry" },
    ]
  },
  { 
    name: "Code", 
    subItems: [
      { name: "Antonia Bara", href: "/code/antoniabara" },
      { name: "Blackjack", href: "/code/blackjack" },
    ]
  },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'main' | 'art' | 'code'>('main');
  const [isClosing, setIsClosing] = useState(false);

  // Manage body overflow for no scroll when nav is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

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
      case 'art':
        return (
          <div className="flex flex-col items-center gap-3 text-xl">
            <button 
              onClick={handleBackToMain}
              className="mb-4 flex items-center gap-2 pr-5"
            >
              <ChevronLeft /> Back
            </button>
            {navItems[0].subItems?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer"
                onClick={(e) => handleMobileNavigation(item.href, e)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        );
      case 'code':
        return (
          <div className="flex flex-col items-center gap-3 text-xl">
            <button 
              onClick={handleBackToMain}
              className="mb-4 flex items-center gap-2 pr-5"
            >
              <ChevronLeft /> Back
            </button>
            {navItems[1].subItems?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer"
                onClick={(e) => handleMobileNavigation(item.href, e)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        );
      default:
        return (
          <nav className="flex flex-col items-center gap-3 text-xl z-10">
            <button 
              className="cursor-pointer flex items-center gap-2 pl-8"
              onClick={() => setMobileView('art')}
            >
              Art <ChevronRight />
            </button>
            <button 
              className="cursor-pointer flex items-center gap-2 pl-8"
              onClick={() => setMobileView('code')}
            >
              Code <ChevronRight />
            </button>
            <Link 
              href="/contact" 
              className="cursor-pointer"
              onClick={(e) => handleMobileNavigation('/contact', e)}
            >
              Contact
            </Link>
          </nav>
        );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center max-h-65 m-7">
        <Link href="/home" className="font-bold text-xl">
          TNMA
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <div key={item.name}>
              <NavDropdown 
                trigger={item.name}
                items={item.subItems?.map((subItem) => ({
                  href: subItem.href,
                  label: subItem.name,
                }))}
                href={item.href}
              />
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Button (only visible if menu not open) */}
        {!isMobileMenuOpen && (
          <button 
            className="md:hidden leading-none relative w-6 h-6 z-[51]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="absolute inset-0 transition-all duration-300 opacity-100 rotate-0 scale-100" />
          </button>
        )}
      </div>
      <hr className="border-gray-500 border-1" />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-black text-white z-50 flex flex-col">
          {/* New header for mobile overlay to match where the hamburger was */}
          <header className="flex justify-between items-center m-7">
            <Link href="/home" className="font-bold text-xl">
              TNMA
            </Link>
            <button
              className="md:hidden leading-none relative w-6 h-6 z-[51]"
              onClick={() => {
                setIsClosing(true);
                setMobileView('main');
              }}
              aria-label="Close navigation menu"
            >
              <X />
            </button>
          </header>

          {/* Navigation content */}
          <div
            className={`flex-1 flex items-center justify-center ${
              isClosing ? "animate-slideDown" : "animate-slideUp"
            }`}
            onAnimationEnd={() => {
              if (isClosing) {
                setIsClosing(false);
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {renderMobileContent()}
          </div>

          {/* Footer at the bottom of the mobile nav overlay */}
          <div className="mt-auto p-4">
            <Footer mobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
