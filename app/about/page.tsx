"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [clicked, setClicked] = useState(false);
  const [mobileRevealed, setMobileRevealed] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const timer = setTimeout(() => setMobileRevealed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const visible = clicked || mobileRevealed;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div
          onClick={() => setClicked((c) => !c)}
          className="grid place-items-center w-[min(85vw,26rem)] cursor-pointer"
        >
          <p
            className={`col-start-1 row-start-1 text-sm text-center transition-opacity duration-500 ${
              visible ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            permanently under construction
          </p>
          <div
            className={`col-start-1 row-start-1 flex flex-col gap-3 text-sm text-gray-500 text-center transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <p>
              Really though, I&apos;m just some dude who enjoys a lot of
              different things and wants to garner support in the form of
              attention, so that I can feel like I&apos;m toiling away in the
              direction of something meaningful.
            </p>
            <p>
              I was born in New Jersey, which is where I grew up. Then I
              moved to NYC when I was 18, and that&apos;s where I stayed for
              12 years. I live in Brazil now. Also, my family is from the
              former Soviet Union, and I&apos;m Jewish.
            </p>
            <p>
              I admire great design and those who always knew what they
              wanted to do. Dance, movies, and muay thai are ways I&apos;ve
              learned to step outside of my head. All I ever want to be
              doing is creating something, helping somebody, or laughing.
            </p>
            <p>
              All these things are individually meaningless, but they are
              the sum total of who I am and I think about that every day.
            </p>
          </div>
        </div>
      </div>
      <footer className="flex justify-center pb-8">
        <Link href="/" className="text-sm hover:underline">
          back
        </Link>
      </footer>
    </div>
  );
};

export default AboutPage;
