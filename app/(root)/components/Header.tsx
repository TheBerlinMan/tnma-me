"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BackRedirect from "./BackRedirect";

const randomHue = () => Math.floor(Math.random() * 360);

const pageDescriptions: Record<string, string> = {
  "/photography": "Archive of my favorite photos. Unedited, in chronological order.",
  "/projects": "Chronological archive of my pieces.",
  "/drawings": "Oil pastels on cotton used to depict emotion through color and form.",
};

const Header = () => {
  const pathname = usePathname();
  const [hoverHue, setHoverHue] = useState<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    setHoverHue(randomHue());
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverHue(null);
  }, []);

  return (
    <header className="mb-8">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <Link href="/">
          <Image
            src="/tnma.svg"
            alt="TNMA"
            width={80}
            height={26}
            className="-ml-1 transition-[filter] duration-200"
            style={hoverHue !== null ? {
              filter: `invert(50%) sepia(100%) saturate(500%) hue-rotate(${hoverHue}deg)`,
            } : undefined}
            priority
          />
        </Link>
        {pathname !== "/" ? (
          <div className="text-sm text-gray-500">
            <BackRedirect />
          </div>
        ) : (
          <div className="text-sm text-gray-500">
            <p>b. 03131996</p>
          </div>
        )}
      </div>
      {pathname !== "/" ? (
        pageDescriptions[pathname] && (
          <p className="font-light text-black text-base mt-4">{pageDescriptions[pathname]}</p>
        )
      ) : (
        <p className="font-light text-black text-base mt-4">American-Soviet-Jew. Artist, designer, & programmer. Maker of things.</p>
      )}
    </header>
  );
};

export default Header;
