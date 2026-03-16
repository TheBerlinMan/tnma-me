"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BackRedirect from "./BackRedirect";

const randomHue = () => Math.floor(Math.random() * 360);
const differentHue = (from: number) => {
  const offset = 90 + Math.floor(Math.random() * 180);
  return (from + offset) % 360;
};

const pageDescriptions: Record<string, string> = {
  "/photography": "Archive of my favorite photos. Unedited, in chronological order.",
  "/projects": "Chronological archive of my pieces.",
  "/drawings": "Oil pastels on cotton used to depict emotion through color and form.",
};

const Header = () => {
  const pathname = usePathname();
  const [logoHue, setLogoHue] = useState(0);
  const [titleHue, setTitleHue] = useState(180);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hue = randomHue();
    setLogoHue(hue);
    setTitleHue(differentHue(hue));
    setMounted(true);
  }, []);

  const handleBlockEnter = useCallback(() => {
    const hue = randomHue();
    setLogoHue(hue);
    setTitleHue(differentHue(hue));
  }, []);

  const handleLogoEnter = useCallback(() => {
    setLogoHue(differentHue(titleHue));
  }, [titleHue]);

  const handleTitleEnter = useCallback(() => {
    setTitleHue(differentHue(logoHue));
  }, [logoHue]);

  return (
    <header className="mb-8">
      <div
        onMouseEnter={handleBlockEnter}
        className="inline-block cursor-pointer"
      >
        <Link href="/" onMouseEnter={handleLogoEnter}>
          <Image
            src="/tnma.svg"
            alt="TNMA"
            width={80}
            height={26}
            className="-ml-1 transition-[filter] duration-200"
            style={mounted ? {
              filter: `invert(50%) sepia(100%) saturate(500%) hue-rotate(${logoHue}deg)`,
            } : undefined}
            priority
          />
        </Link>
        {pathname !== "/" ? (
          <div
            className="text-sm transition-colors duration-200"
            style={{ color: mounted ? `hsl(${titleHue}, 70%, 50%)` : undefined }}
            onMouseEnter={handleTitleEnter}
          >
            <BackRedirect />
          </div>
        ) : (
          <div
            className="text-sm transition-colors duration-200"
            style={{ color: mounted ? `hsl(${titleHue}, 70%, 50%)` : undefined }}
            onMouseEnter={handleTitleEnter}
          >
            <p>b. 03131996</p>
          </div>
        )}
      </div>
      {pathname !== "/" ? (
        pageDescriptions[pathname] && (
          <p className="font-light text-black text-base mt-4">{pageDescriptions[pathname]}</p>
        )
      ) : (
        <p className="font-light text-black text-base mt-4">American-Soviet-Jew. Artist, designer, & programmer. Based in NYC.</p>
      )}
    </header>
  );
};

export default Header;
