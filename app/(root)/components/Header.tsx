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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMenuIconAnimating, setIsMenuIconAnimating] = useState(false);
  
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});
  const mounted = useMounted();

  useEffect(() => {
    const colors = ["TNMA", "Menu", "Close", ...navItems.map((item) => item.name)].reduce(
      (acc, name) => ({ ...acc, [name]: getRandomColor() }),
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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 100);
  };

  const handleMenuToggle = () => {
    setIsMenuIconAnimating(true);
    if (isMenuOpen) {
      setIsClosing(true);
    } else {
      setTimeout(() => {
        setIsMenuOpen(true);
      }, 300); // Match animation duration
    }
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
        
        {/* Menu/Close Button - Always visible */}
        <button 
          className="leading-none relative w-6 h-6 z-[51] hover-text-custom"
          onClick={handleMenuToggle}
          onMouseEnter={() => handleMouseEnter(isMenuOpen ? 'Close' : 'Menu')}
          style={mounted ? { 
            '--hover-color': `var(--${hoverColors[isMenuOpen ? 'Close' : 'Menu'] || 'default-color'})` 
          } as React.CSSProperties : {}}
          onAnimationEnd={() => {
            setIsMenuIconAnimating(false);
          }}
        >
          <Menu 
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            } ${isMenuIconAnimating && !isMenuOpen ? 'animate-xToMenu' : ''}`} 
          />
          <X 
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            } ${isMenuIconAnimating && isMenuOpen ? 'animate-menuToX' : ''}`} 
          />
        </button>
      </div>
      <hr className="border-gray-500 border-1" />

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-white text-black z-50 flex flex-col">
          {/* Overlay header */}
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
            {/* We don't need a separate close button here anymore */}
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
                setIsMenuOpen(false);
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
                  onClick={(e) => handleNavigation(item.href, e)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="mt-auto p-4 md:hidden">
            <Footer mobile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
