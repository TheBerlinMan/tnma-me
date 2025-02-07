"use client";

import React from "react";
import Link from "next/link";
import NavDropdown from "./NavDropdown";

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
  return (
    <div>
      <div className="flex justify-between items-center max-h-65 m-7">
        <Link href="/home" className="font-bold text-xl">
          TNMA
        </Link>
        
        <div className="flex gap-6">
          {navItems.map((item) => (
            <div key={item.name}>
              <NavDropdown 
                trigger={item.name}
                items={item.subItems?.map(subItem => ({
                  href: subItem.href,
                  label: subItem.name
                }))}
                href={item.href}
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-500 border-1" />
    </div>
  );
};

export default Header;
