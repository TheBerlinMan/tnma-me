"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Footer from "./Footer";
import { getRandomColor } from "@/lib/functions";
import { useMounted } from "@/lib/hooks/useMounted";

const navItems = [
  { name: "Art", href: "/art" },
  { name: "Code", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  // Initialize with an empty object to avoid non-deterministic SSR values.
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});

  const mounted = useMounted();

  // Calculate the hover colors on the client only.
  useEffect(() => {
    const colors = ["TNMA", ...navItems.map((item) => item.name)].reduce(
      (acc, name) => ({
        ...acc,
        [name]: getRandomColor(),
      }),
      {} as Record<string, string>
    );
    setHoverColors(colors);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    setHoverColors((prev) => ({
      ...prev,
      [itemName]: getRandomColor(prev[itemName]),
    }));
  };

  // Manage body overflow for no scroll when nav is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const handleMobileNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 100);
  };

  return (
    <div>
      <div className="flex justify-between items-center max-h-65 m-7">
        <Link 
          href="/home" 
          className="font-bold text-xl transition-colors hover-text-custom"
          onMouseEnter={() => handleMouseEnter('TNMA')}
          style={mounted ? { 
            '--hover-color': `var(--${hoverColors['TNMA'] || 'default-color'})` 
          } as React.CSSProperties : {}}
        >
          TNMA
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => handleMouseEnter(item.name)}
              style={mounted ? { 
                '--hover-color': `var(--${hoverColors[item.name] || 'default-color'})` 
              } as React.CSSProperties : {}}
              className="transition-colors hover-text-custom"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
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
          {/* Mobile overlay header */}
          <header className="flex justify-between items-center m-7">
            <Link 
              href="/home" 
              className="font-bold text-xl transition-colors hover-text-custom"
              onMouseEnter={() => handleMouseEnter('TNMA')}
              style={mounted ? { 
                '--hover-color': `var(--${hoverColors['TNMA'] || 'default-color'})` 
              } as React.CSSProperties : {}}
            >
              TNMA
            </Link>
            <button
              className="md:hidden leading-none relative w-6 h-6 z-[51]"
              onClick={() => {
                setIsClosing(true);
              }}
              aria-label="Close navigation menu"
            >
              <X />
            </button>
          </header>
          
          <hr className="border-gray-500 border-1" />
          
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
            <nav className="flex flex-col items-center gap-3 text-xl z-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  style={mounted ? { 
                    '--hover-color': `var(--${hoverColors[item.name] || 'default-color'})` 
                  } as React.CSSProperties : {}}
                  className="cursor-pointer transition-colors hover-text-custom"
                  onClick={(e) => handleMobileNavigation(item.href, e)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-auto p-4">
            <Footer mobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
