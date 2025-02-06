"use client";
import React, { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    // Set initial value
    handleResize();
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
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
        <p>&apos;TNMA&apos; is my russian name written in
        english letters. You can just call me Tommy, though.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          My undergraduate thesis advisor once called me a polymath and I liked that
          - maybe too much. I code, I play chess, I design jewelry, I take photos, I draw, I cook,
          I dance, I fight. Life is more fun as a generalist, I think.
        </p>
      </div>
    </div>
  );
};

const AboutDesktop = () => {
  return (
    <div className="flex flex-col gap-6 text-sm">
      <div className="flex flex-col gap-2">
        <p>
          &apos;TNMA&apos; is my russian name written in
          english letters.
        </p>
        <p>
          You can just call me Tommy, though.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          My undergraduate thesis advisor once called me a polymath and I liked that
          - maybe too much.
        </p>
        <p>
          I code, I play chess, I design jewelry, I take photos, I draw, I cook,
          I dance, I fight.
        </p>
        <p>
          Life is more fun as a generalist, I think.
        </p>
      </div>
    </div>
  );
};