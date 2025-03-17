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
      <div className="space-y-2">
        <div className="text-gray-600 font-light">
          &quot;TNMA&quot; is my Russian name rendered in English letters.
          I&apos;m a first-generation American-Soviet-Jew, and my experiences in
          this world have been primarily shaped by the hybrid nature of my
          identity—making the moniker a nice summary of who I am. But, you can
          just call me Tommy.
        </div>
        <div className="text-gray-600 font-light">
          Professionally, I&apos;m a software developer with a background in mathematics. 
          Casually, I&apos;m an artist and designer with a chess addiction. 
          Above all, though, I just consider myself a generalist with a
          passion for design, logical systems, and the human experience.
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="relative group">
          <div className="flex items-center">
            <span
              className="transition-colors relative"
            >
             Art
             <span className="absolute inset-0 w-8 h-full right-auto left-full" />
            </span>
            <span className="hidden group-hover:inline-block mx-2 transition-opacity duration-300">::</span>
            <div className="flex gap-3 overflow-hidden">
              <div className="opacity-0 invisible group-hover:visible group-hover:animate-fadeInSlideRight [animation-delay:0s] [animation-fill-mode:forwards]">
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
              </div>
              <div className="opacity-0 invisible group-hover:[visibility:hidden] group-hover:[animation-delay:100ms] group-hover:animate-sequentialFadeIn">
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
              </div>
              <div className="opacity-0 invisible group-hover:[visibility:hidden] group-hover:[animation-delay:200ms] group-hover:animate-sequentialFadeIn">
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
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/projects"
          onMouseEnter={() => handleMouseEnter('Code')}
          style={mounted ? { 
            '--hover-color': `var(--${hoverColors['Code'] || 'default-color'})` 
          } as React.CSSProperties : {}}
          className="cursor-pointer transition-colors hover-text-custom"
        >
          Code
        </Link>
        <Link
          href="/resume"
          onMouseEnter={() => handleMouseEnter('Resume')}
          style={mounted ? { 
            '--hover-color': `var(--${hoverColors['Resume'] || 'default-color'})` 
          } as React.CSSProperties : {}}
          className="cursor-pointer transition-colors hover-text-custom"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Home;
