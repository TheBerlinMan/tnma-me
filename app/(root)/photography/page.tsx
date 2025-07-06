import React from "react";
import Link from "next/link";

const Photography = async () => {
  return (
    <div className="fade-in ml-4">
      <div className="flex flex-col gap-1">
        <Link href="/photography/index">Index</Link>
        <Link href="/photography/portraits">Portraits</Link>
        <Link href="/photography/landscape">Landscape</Link>
        <Link href="/photography/street">Street</Link>
        <Link href="/photography/abstract">Abstract</Link>
      </div>

      <div className="mt-6">Series In Progress</div>
      <div className="ml-4 mt-2 italic text-sm flex flex-col gap-1">
        <Link href="/photography/series/publicintimacy">
          ... Public Intimacy
        </Link>
        <Link href="/photography/series/nape">... The Nape</Link>
        <Link href="/photography/series/portals">... Portals</Link>
        <Link href="/photography/series/nyc">... NYC</Link>
      </div>
    </div>
  );
};

export default Photography;
