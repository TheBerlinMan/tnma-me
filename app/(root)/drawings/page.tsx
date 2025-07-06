import React from "react";
import Link from "next/link";


export default function Drawings() {
 

  return (
    <div className="fade-in ml-4">
      <div className="flex flex-col gap-1">
        <Link href="/drawings/index">Index</Link>

        <div className="mt-6">Series</div>
        <div className="ml-4 italic text-sm flex flex-col gap-1">
          <Link href="/drawings/series/initialcolorexploration">... Inital Color Exploration <span className="text-xs text-gray-500 italic ml-2">(Summer 2022)</span></Link>
          <Link href="/drawings/series/cangalha">... Cangalha Series <span className="text-xs text-gray-500 italic ml-2">(Summer 2023)</span></Link>
          <Link href="/drawings/series/selfportraits">... Self Portraits <span className="text-xs text-gray-500 italic ml-2">(Ongoing)</span></Link>
        </div>
    
      </div>
    </div>
  );
}
