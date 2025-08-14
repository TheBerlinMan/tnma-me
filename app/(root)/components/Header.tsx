"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRandomColor } from "@/lib/functions";
import { useMounted } from "@/lib/hooks/useMounted";
import BackRedirect from "./BackRedirect";

const Header = () => {
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({});
  const mounted = useMounted();
  const pathname = usePathname();

  useEffect(() => {
    setHoverColors({ TNMA: getRandomColor() });
  }, []);

  const handleMouseEnter = () => {
    setHoverColors((prev) => ({
      ...prev,
      TNMA: getRandomColor(prev["TNMA"]),
    }));
  };

  return (
    <header className="m-7">
      <Link
        href="/home"
        className="font-bold text-2xl transition-colors hover-text-custom"
        onMouseEnter={handleMouseEnter}
        style={
          mounted
            ? ({
                "--hover-color": `var(--${
                  hoverColors["TNMA"] || "default-color"
                })`,
              } as React.CSSProperties)
            : {}
        }
      >
        TNMA
      </Link>

      {pathname !== "/home" ? (
        <BackRedirect />
      ) : (
        <div className="text-sm text-gray-500">
          <p>b. 03131996</p>
        </div>
      )}
    </header>
  );
};

export default Header;
