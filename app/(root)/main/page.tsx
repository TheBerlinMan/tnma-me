"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    // Set initial value
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const About = () => {
  const isMobile = useIsMobile();
  return (
    <div className="fade-in">
      {isMobile ? <AboutMobile /> : <AboutDesktop />}
    </div>
  );
};

export default About;

const AboutMobile = () => {
  return (
    <div className="flex flex-col gap-6 text-sm">
      <div className="flex flex-col gap-2">
        <p>
          &quot;TNMA&quot; is my Russian name rendered in English letters.
          I&apos;m a first-generation American-Soviet-Jew, and my experiences in
          this world have been primarily shaped by the hybrid nature of my
          identity- making the moniker a nice summary of who I am. But, you can
          just call me Tommy.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Professionally, I&apos;m a{" "}
          <Link className="underline" href="/projects">
            software developer
          </Link>{" "}
          with a background in mathematics. Casually, I&apos;m an{" "}
          <Link className="underline" href="/art">
            artist and designer
          </Link>{" "}
          with a{" "}
          <Link
            className="underline"
            href="https://chess.com/member/pigeonmania"
            target="_blank"
          >
            chess addiction
          </Link>
          . Above all, though, I just consider myself a generalist with a
          passion for design, logical systems, and the human experience.
        </p>
      </div>
      <hr className="border-gray-500 w-4" />
      <div className="flex flex-col gap-2">
        <p>
          I&apos;d love to meet more people, so if you&apos;d like your photo
          taken, a website built, or just want to grab a coffee, please feel
          free to get in{" "}
          <Link className="underline" href="/contact">
            contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

const AboutDesktop = () => {
  return (
    <div className="flex flex-col gap-6 text-sm">
      <div className="flex flex-col gap-2">
        <p>First-generation American-Soviet-Jew</p>
        <p>Detail-obsessed problem-solver</p>
        <p>Surviving on intuition</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>&apos;TNMA&apos; is my russian name written in english letters.</p>
        <p>You can just call me Tommy, though.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          My undergraduate thesis advisor once called me a polymath and I liked
          that - maybe too much.
        </p>
        <p>
          I code, I play chess, I design jewelry, I take photos, I draw, I cook,
          I dance, I fight.
        </p>
        <p>Life is more fun as a generalist, I think.</p>
      </div>
    </div>
  );
};
