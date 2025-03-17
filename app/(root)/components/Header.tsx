"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getRandomColor } from "@/lib/functions";
import { useMounted } from "@/lib/hooks/useMounted";

const Header = () => {
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});
  const mounted = useMounted();

  useEffect(() => {
    setHoverColors({ 'TNMA': getRandomColor() });
  }, []);

  const handleMouseEnter = () => {
    setHoverColors((prev) => ({
      ...prev,
      'TNMA': getRandomColor(prev['TNMA']),
    }));
  };

  return (
    <header className="m-7">
      <Link 
        href="/home" 
        className="font-bold text-xl transition-colors hover-text-custom"
        onMouseEnter={handleMouseEnter}
        style={mounted ? { 
          '--hover-color': `var(--${hoverColors['TNMA'] || 'default-color'})` 
        } as React.CSSProperties : {}}
      >
        TNMA
      </Link>
    </header>
  );
};

export default Header;
