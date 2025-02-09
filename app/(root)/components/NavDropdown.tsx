"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavDropdownProps {
  trigger: string;
  items?: { href: string; label: string; }[];
  href?: string;
  className?: string;
}

const NavDropdown = ({ trigger, items, href, className }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div 
      ref={dropdownRef}
      className="relative z-10"
      onMouseEnter={() => items && !isOpen && setIsOpen(true)}
      onMouseLeave={(e) => {
        if (!items) return;
        const relatedTarget = e.relatedTarget as Node;
        if (!dropdownRef.current?.contains(relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      {items ? (
        <button 
          className={`${className} cursor-pointer p-2 hover:bg-neutral-800 hover:rounded-sm`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
        </button>
      ) : (
        <Link href={href!}>
          <button className={`${className} cursor-pointer p-2 hover:bg-neutral-800 hover:rounded-sm`}>
            {trigger}
          </button>
        </Link>
      )}
      
      {isOpen && items && (
        <div className="absolute bg-black rounded-md">
          <div className="h-2" /> {/* Invisible bridge to maintain hover */}
          <div className=" space-y-1">
            {items.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="block whitespace-nowrap cursor-pointer p-2 hover:bg-neutral-800 hover:rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
