"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div>
        <nav className="flex justify-end gap-4">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </nav>
        <hr className="border-gray-500 border-1 mt-4 mb-6" />
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex justify-between items-center max-h-65">
          <Link href="/" className="font-bold text-xl">
            TNMA
          </Link>
          <nav className="flex justify-end gap-4">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <hr className="border-gray-500 border-1 mt-4 mb-6" />
      </div>
    );
  }
};

export default Header;
