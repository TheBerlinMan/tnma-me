"use client"
import Link from "next/link";
import { getRandomColor } from "@/lib/functions";
import { useState, useEffect } from "react";
import { useMounted } from "@/lib/hooks/useMounted";

// New HoverLink component that applies a random hover text color to its content
const HoverLink = ({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Link>) => {
  const mounted = useMounted();
  const [hoverColor, setHoverColor] = useState("");

  useEffect(() => {
    setHoverColor(getRandomColor());
  }, []);

  const handleMouseEnter = () => {
    setHoverColor(prev => getRandomColor(prev));
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      style={mounted && hoverColor ? { 
        '--hover-color': `var(--${hoverColor})` 
      } as React.CSSProperties : {}}
      className={`underline transition-colors hover-text-custom ${rest.className || ""}`}
    >
      {children}
    </Link>
  );
};

const Main = () => {
  return (
    <div className="flex flex-col gap-6 text-sm sm:max-w-xl fade-in">
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
          Professionally, I&apos;m a{" "}
          <HoverLink href="/projects">
            software developer
          </HoverLink>{" "}
          with a background in mathematics. Casually, I&apos;m an{" "}
          <HoverLink href="/art">
            artist and designer
          </HoverLink>{" "}
          with a{" "}
          <HoverLink
            href="https://chess.com/member/pigeonmania"
            target="_blank"
          >
            chess addiction
          </HoverLink>
          . Above all, though, I just consider myself a generalist with a
          passion for design, logical systems, and the human experience.
        </div>
      </div>
      <hr className="w-4" />
      <div className="flex flex-col gap-2">
        <p>
          In case you&apos;re curious about my professional history, here&apos;s my{" "}
          <HoverLink href="/resume">
            resume
          </HoverLink>
          .
        </p>
        <p>
          For anything else, just{" "}
          <HoverLink href="/contact">
            get in touch.
          </HoverLink>
        </p>
      </div>
      <hr className="w-4" />
      <div className="flex flex-col gap-2">
        <p>
          Truly, thanks for stopping by.
        </p>
        <p>
          {"<insert photo of stamp style signature>"}
        </p>
      </div>
    </div>
  );
};

export default Main;
