"use client";

import React from "react";
import Link from "next/link";

const navItems = [
  { name: "Art", href: "/art" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center max-h-65 m-7">
        <Link href="/main" className="font-bold text-xl">
          TNMA
        </Link>
        <nav className="flex justify-end gap-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="border-gray-500 border-1" />
    </div>
  );
};

export default Header;
