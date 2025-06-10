"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTransitioning(true);
    // Wait for animation to complete before navigating
    setTimeout(() => {
      router.push("/home");
    }, 500); // Match this with CSS transition duration
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center"
    style={{ 
      backgroundImage: "url('/drawings/BluePurple.jpg')",
      backgroundSize: "200%"
    }}>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Background circle that expands */}
          <div 
            className={`absolute w-32 h-32 rounded-full
              ${isTransitioning ? 'animate-circle-expand' : ''}`}
            style={{
              backgroundImage: "url('/drawings/BlueRedPurple.jpg')",
              backgroundSize: "400%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.8"
            }}
          />
          
          {/* Static text container */}
          <Link 
            href="/home" 
            onClick={handleClick}
            className="flex items-center justify-center w-32 h-32 rounded-full z-10"
          >
            <span className={`text-xl font-bold text-gray-300
              ${isTransitioning ? 'animate-fade-out' : ''}`}>
              TNMA
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
