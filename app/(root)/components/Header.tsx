"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getRandomColor } from "@/lib/functions";
import { useMounted } from "@/lib/hooks/useMounted";

const navItems = [
  { 
    name: "Art", 
    href: "/art",
    sublinks: [
      { name: "Drawings", href: "/art/drawings" },
      { name: "Photography", href: "/art/photography" },
      { name: "Jewelry", href: "/art/jewelry" }
    ]
  },
  { name: "Code", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMenuIconAnimating, setIsMenuIconAnimating] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showArtSublinks, setShowArtSublinks] = useState(false);
  
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});
  const mounted = useMounted();

  useEffect(() => {
    const allItems = ["TNMA", "Menu", "Close", ...navItems.map(item => item.name)];
    // Add sublink names
    navItems.forEach(item => {
      if (item.sublinks) {
        item.sublinks.forEach(sublink => {
          allItems.push(sublink.name);
        });
      }
    });
    
    const colors = allItems.reduce(
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
        {/* <button 
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
        </button> */}
      </div>
      {/* <hr className="border-gray-500 border-1" /> */}

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
            className={`flex-1 flex items-start justify-start pl-7 pt-10 ${
              isClosing ? "animate-slideDown" : "animate-slideUp"
            }`}
            onAnimationEnd={() => {
              if (isClosing) {
                setIsClosing(false);
                setIsMenuOpen(false);
              }
            }}
          >
            <nav className="flex flex-col items-start gap-3 text-xl z-10 w-full pr-7">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <div 
                    className="w-full border-b border-dashed border-black pb-1"
                    onMouseEnter={() => {
                      setHoveredItem(item.name);
                      if (item.name === "Art") {
                        setShowArtSublinks(true);
                      }
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                    }}
                  >
                    {item.name === "Art" ? (
                      <span
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        style={mounted ? { 
                          '--hover-color': `var(--${hoverColors[item.name] || 'default-color'})` 
                        } as React.CSSProperties : {}}
                        className="cursor-default transition-colors hover-text-custom"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
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
                    )}
                  </div>
                  
                  {/* Sublinks for Art */}
                  {item.name === "Art" && showArtSublinks && item.sublinks && (
                    <div 
                      className="pl-4 w-full"
                      onMouseEnter={() => setShowArtSublinks(true)}
                      onMouseLeave={() => setShowArtSublinks(false)}
                    >
                      {item.sublinks.map((sublink) => (
                        <div key={sublink.name} className="w-full border-b border-dashed border-black pb-1 mt-2">
                          <Link
                            href={sublink.href}
                            onMouseEnter={() => handleMouseEnter(sublink.name)}
                            style={mounted ? { 
                              '--hover-color': `var(--${hoverColors[sublink.name] || 'default-color'})` 
                            } as React.CSSProperties : {}}
                            className="cursor-pointer transition-colors hover-text-custom text-base"
                            onClick={(e) => handleNavigation(sublink.href, e)}
                          >
                            {sublink.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>

  
        </div>
      )}
    </div>
  );
};

export default Header;
