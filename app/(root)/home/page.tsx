"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getRandomColor } from "@/lib/functions";
import { useMounted } from "@/lib/hooks/useMounted";
import { getChessStats, ChessStats } from "@/lib/chess-api";

const Home = () => {
  const [hoverColors, setHoverColors] = useState<Record<string, string>>({
    Art: getRandomColor(),
    Drawings: getRandomColor(),
    Photography: getRandomColor(),
    Jewelry: getRandomColor(),
    Code: getRandomColor(),
    Resume: getRandomColor(),
  });
  const [chessStats, setChessStats] = useState<ChessStats | null>(null);
  const [loading, setLoading] = useState(true);
  const mounted = useMounted();

  useEffect(() => {
    const fetchChessStats = async () => {
      try {
        const stats = await getChessStats();
        setChessStats(stats);
      } catch (error) {
        console.error("Failed to fetch chess stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChessStats();
  }, []);

  const handleMouseEnter = (itemName: string) => {
    setHoverColors((prev) => ({
      ...prev,
      [itemName]: getRandomColor(prev[itemName]),
    }));
  };

  return (
    <div className="flex flex-col gap-6 fade-in">
      <div className="text-gray-600 mt-2 font-light">
        <p>First-generation American-Soviet-Jew</p>
        <p>Detail-obsessed artist, designer, and problem-solver</p>
        <p>Generalist in love with theory crafting</p>
      </div>

      <div className="text-gray-600 mt-4 font-light">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <div className="text-sm font-light mb-4">Work</div>
            <div>Software developer at Evernorth</div>
            <div>Building Doma</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-light mb-4">Hobbies</div>
            <div>Photography</div>
            <div>Drawing</div>
            <div>Making things</div>
            <div>Playing chess</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-light mb-4">Past</div>
            <div>Software engineering bootcamp @ G.A.</div>
            <div>M.arch @ The Pratt Institute <span className="inline">(inc)</span></div>
            <div>Financial analyst in advertising and banking
            </div>
            <div>B.A. in Mathematics @ Pace University</div>
          </div>
        </div>
      </div>

      {/* Chess Ratings Section */}
      {/* <div className="space-y-2">
        <div className="text-gray-600 font-light">
          Chess Ratings (Chess.com):
        </div>
        {loading ? (
          <div className="text-gray-500 text-xs">Loading chess stats...</div>
        ) : chessStats ? (
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <div className="font-medium text-gray-700">Rapid</div>
              <div className="text-gray-600">
                Current: {chessStats.chess_rapid?.last.rating || "N/A"}
              </div>
              <div className="text-gray-600">
                Best: {chessStats.chess_rapid?.best.rating || "N/A"}
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-gray-700">Blitz</div>
              <div className="text-gray-600">
                Current: {chessStats.chess_blitz?.last.rating || "N/A"}
              </div>
              <div className="text-gray-600">
                Best: {chessStats.chess_blitz?.best.rating || "N/A"}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-xs">
            Failed to load chess stats
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="relative group">
          <div className="flex items-center">
            <span className="transition-colors relative">
              Art
              <span className="absolute inset-0 w-8 h-full right-auto left-full" />
            </span>
            <span className="hidden group-hover:inline-block mx-2 transition-opacity duration-300">
              ::
            </span>
            <div className="flex gap-3 overflow-hidden">
              <div className="opacity-0 invisible group-hover:visible group-hover:animate-fadeInSlideRight [animation-delay:0s] [animation-fill-mode:forwards]">
                <Link
                  href="/art/drawings"
                  onMouseEnter={() => handleMouseEnter("Drawings")}
                  style={
                    mounted
                      ? ({
                          "--hover-color": `var(--${
                            hoverColors["Drawings"] || "default-color"
                          })`,
                        } as React.CSSProperties)
                      : {}
                  }
                  className="cursor-pointer transition-colors hover-text-custom"
                >
                  Drawings
                </Link>
              </div>
              <div className="opacity-0 invisible group-hover:[visibility:hidden] group-hover:[animation-delay:100ms] group-hover:animate-sequentialFadeIn">
                <Link
                  href="/art/photography"
                  onMouseEnter={() => handleMouseEnter("Photography")}
                  style={
                    mounted
                      ? ({
                          "--hover-color": `var(--${
                            hoverColors["Photography"] || "default-color"
                          })`,
                        } as React.CSSProperties)
                      : {}
                  }
                  className="cursor-pointer transition-colors hover-text-custom"
                >
                  Photography
                </Link>
              </div>
              <div className="opacity-0 invisible group-hover:[visibility:hidden] group-hover:[animation-delay:200ms] group-hover:animate-sequentialFadeIn">
                <Link
                  href="/art/jewelry"
                  onMouseEnter={() => handleMouseEnter("Jewelry")}
                  style={
                    mounted
                      ? ({
                          "--hover-color": `var(--${
                            hoverColors["Jewelry"] || "default-color"
                          })`,
                        } as React.CSSProperties)
                      : {}
                  }
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
          onMouseEnter={() => handleMouseEnter("Code")}
          style={
            mounted
              ? ({
                  "--hover-color": `var(--${
                    hoverColors["Code"] || "default-color"
                  })`,
                } as React.CSSProperties)
              : {}
          }
          className="cursor-pointer transition-colors hover-text-custom"
        >
          Code
        </Link>
        <Link
          href="/resume"
          onMouseEnter={() => handleMouseEnter("Resume")}
          style={
            mounted
              ? ({
                  "--hover-color": `var(--${
                    hoverColors["Resume"] || "default-color"
                  })`,
                } as React.CSSProperties)
              : {}
          }
          className="cursor-pointer transition-colors hover-text-custom"
        >
          Resume
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
