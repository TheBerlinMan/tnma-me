"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BackRedirect from "./BackRedirect";

const randomHue = () => Math.floor(Math.random() * 360);

const Header = () => {
  const pathname = usePathname();
  const [logoHue, setLogoHue] = useState(0);
  const [titleHue, setTitleHue] = useState(180);
  const [logoHovered, setLogoHovered] = useState(false);
  const [titleHovered, setTitleHovered] = useState(false);

  const handleLogoEnter = useCallback(() => {
    setLogoHue(randomHue());
    setLogoHovered(true);
  }, []);

  const handleLogoLeave = useCallback(() => {
    setLogoHovered(false);
  }, []);

  const handleTitleEnter = useCallback(() => {
    setTitleHue(randomHue());
    setTitleHovered(true);
  }, []);

  const handleTitleLeave = useCallback(() => {
    setTitleHovered(false);
  }, []);

  return (
    <header className="mb-8">
      <div className="inline-block cursor-pointer">
        <Link
          href="/"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        >
          <Image
            src="/tnma.svg"
            alt="TNMA"
            width={80}
            height={26}
            className="-ml-1 transition-[filter] duration-200"
            style={logoHovered ? {
              filter: `invert(50%) sepia(100%) saturate(500%) hue-rotate(${logoHue}deg)`,
            } : undefined}
            priority
          />
        </Link>
        {pathname !== "/" ? (
          <div
            className="text-sm transition-colors duration-200"
            style={{ color: titleHovered ? `hsl(${titleHue}, 70%, 50%)` : undefined }}
            onMouseEnter={handleTitleEnter}
            onMouseLeave={handleTitleLeave}
          >
            <BackRedirect />
          </div>
        ) : (
          <div
            className="text-sm transition-colors duration-200"
            style={{ color: titleHovered ? `hsl(${titleHue}, 70%, 50%)` : undefined }}
            onMouseEnter={handleTitleEnter}
            onMouseLeave={handleTitleLeave}
          >
            <p>b. 03131996</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
