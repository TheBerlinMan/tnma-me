"use client";

import Link from "next/link";
import { useState } from "react";
import { getRandomColor } from "@/lib/functions";
import { useMounted } from "@/lib/hooks/useMounted";

const Home = () => {
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({
    Art: getRandomColor(),
    Drawings: getRandomColor(),
    Photography: getRandomColor(),
    Jewelry: getRandomColor(),
    Code: getRandomColor(),
    Resume: getRandomColor(),
  });
  const mounted = useMounted();

  const handleMouseEnter = (itemName: string) => {
    setHoverColors((prev) => ({
      ...prev,
      [itemName]: getRandomColor(prev[itemName]),
    }));
  };

  return (
    <div className="flex flex-col gap-6 text-sm max-w-xl fade-in">
      <div className="flex flex-col gap-2">
        <p>
          &quot;TNMA&quot; is my Russian name rendered in English letters.
          I&apos;m a first-generation American-Soviet-Jew, and my experiences in
          this world have been primarily shaped by the hybrid nature of my
          identity—making the moniker a nice summary of who I am. But, you can
          just call me Tommy.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          Professionally, I&apos;m a software developer with a background in mathematics. 
          Casually, I&apos;m an artist and designer with a chess addiction. 
          Above all, though, I just consider myself a generalist with a
          passion for design, logical systems, and the human experience.
        </div>
      </div>
      <div className="flex flex-col gap-1">
        
          <div className="relative group">
            <div className="flex items-center">
              <Link
                href="/art"
                onMouseEnter={() => handleMouseEnter('Art')}
                style={mounted ? { 
                  '--hover-color': `var(--${hoverColors['Art'] || 'default-color'})` 
                } as React.CSSProperties : {}}
                className="cursor-pointer transition-colors hover-text-custom"
              >
                -- Art
              </Link>
              <span className="hidden group-hover:inline-block mx-2">:</span>
              <ul className="hidden group-hover:flex gap-3">
                <li>
                  <Link
                    href="/art/drawings"
                    onMouseEnter={() => handleMouseEnter('Drawings')}
                    style={mounted ? { 
                      '--hover-color': `var(--${hoverColors['Drawings'] || 'default-color'})` 
                    } as React.CSSProperties : {}}
                    className="cursor-pointer transition-colors hover-text-custom"
                  >
                    Drawings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/art/photography"
                    onMouseEnter={() => handleMouseEnter('Photography')}
                    style={mounted ? { 
                      '--hover-color': `var(--${hoverColors['Photography'] || 'default-color'})` 
                    } as React.CSSProperties : {}}
                    className="cursor-pointer transition-colors hover-text-custom"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/art/jewelry"
                    onMouseEnter={() => handleMouseEnter('Jewelry')}
                    style={mounted ? { 
                      '--hover-color': `var(--${hoverColors['Jewelry'] || 'default-color'})` 
                    } as React.CSSProperties : {}}
                    className="cursor-pointer transition-colors hover-text-custom"
                  >
                    Jewelry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link
              href="/projects"
              onMouseEnter={() => handleMouseEnter('Code')}
              style={mounted ? { 
                '--hover-color': `var(--${hoverColors['Code'] || 'default-color'})` 
              } as React.CSSProperties : {}}
              className="cursor-pointer transition-colors hover-text-custom"
            >
              -- Code
            </Link>
          </div>
          <div>
            <Link
              href="/resume"
              onMouseEnter={() => handleMouseEnter('Resume')}
              style={mounted ? { 
                '--hover-color': `var(--${hoverColors['Resume'] || 'default-color'})` 
              } as React.CSSProperties : {}}
              className="cursor-pointer transition-colors hover-text-custom"
            >
              -- Resume
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Home;
