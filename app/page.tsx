"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";

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

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <GroupDiv>
        <div className="text-xl font-bold" style={{ flex: isMobile ? "0 0 30px" : "0 0 150px", marginBottom: isMobile ? "10px" : "0" }}>
          <h1>TNMA</h1>
        </div>
        <DescDiv>
          <p>First-generation American-Soviet-Jew</p>
          <p>Detail-obsessed problem-solver</p>
          <p>Surviving on intuition</p>
        </DescDiv>
      </GroupDiv>
      {/* <hr className="border-gray-500 border-1 mb-4"/> */}
      <GroupDiv>
        <TitleDiv>
          <h1>Today</h1>
        </TitleDiv>
        <DescDiv>
          <p className="flex flex-row gap-1">
            Software developer at{" "}
            <Link
              className="font-bold ml-1"
              href="https://evernorth.com"
              target="_blank"
            >
              Evernorth
            </Link>{" "}
            <MoveUpRight size={16} />
          </p>
          <p className="flex flex-row gap-1">
            {/* Building{" "}
            <Link className="font-bold ml-1" href="/" target="_blank">
              Artgrp
            </Link>{" "}
            <MoveUpRight size={16} /> */}
            Building Artgrp
          </p>
          <p className="flex flex-row gap-1">
            Designing{" "}
            <Link className="font-bold ml-1" href="https://domaproject.vercel.app/" target="_blank">
              Doma Project
            </Link>{" "}
            <MoveUpRight size={16} />
            Designing Doma Project
          </p>
        </DescDiv>
      </GroupDiv>
      <GroupDiv>
        <TitleDiv>
          <h1>Past</h1>
        </TitleDiv>
        <DescDiv>
          <p>G.A. software engineering bootcamp graduate</p>
          <p>Financial analyst in advertising and banking </p>
          <p>B.A. in mathematics from Pace University</p>
        </DescDiv>
      </GroupDiv>
      <GroupDiv>
        <TitleDiv>
          <h1>Hobbies</h1>
        </TitleDiv>
        <DescDiv>
          <p className="flex flex-row gap-1">
            Playing chess{" "}
            <Link
              className="font-bold"
              href="https://chess.com/member/pigeonmania"
              target="_blank"
            >
              @pigeonmania
            </Link>{" "}
            <MoveUpRight size={16} />
          </p>
          <p className="flex flex-row gap-1">
            Replacing therapy with{" "}
            <Link className="font-bold ml-1" href="/art/drawings">
              oil pastels
            </Link>{" "}
            <MoveUpRight size={16} />
          </p>
          <p className="flex flex-row gap-1"  >
            Exploring life with{" "}
            <Link className="font-bold ml-1" href="/art/photography">
              photography
            </Link>{" "}
            <MoveUpRight size={16} />
          </p>
          <p className="flex flex-row gap-1">
            {/* Musing, and occasionally{" "}
            <Link
              className="font-bold ml-1"
              href="/"
              // href="https://berlins-blog.vercel.app/"
              target="_blank"
            >
              writing
            </Link>{" "}
            <MoveUpRight size={16} /> */}
            Musing and occasionally writing
          </p>
        </DescDiv>
      </GroupDiv>
    </>
  );
}

// Styled Divs
const GroupDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <div className="flex mb-6 sm:flex-row flex-col">{children}</div>;
};

const TitleDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  const isMobile = useIsMobile();

  return (
    <div style={{ flex: isMobile ? "0 0 30px" : "0 0 150px" }} className="text-sm text-gray-500 font-bold">
      {children}
    </div>
  );
};

const DescDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <div className="text-sm flex flex-col gap-2">{children}</div>;
};
