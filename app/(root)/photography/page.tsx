import React from "react";
import Link from "next/link";
import BackRedirect from "../components/BackRedirect";

const Photography = async () => {
  return (
    <div className="fade-in font-light">
      <BackRedirect />

      <div className="mt-6 text-lg font-medium">Photography</div>
      <div className="mt-2 ml-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </div>

      <div className="flex gap-16">
        <div>
          <div className="mt-6 font-normal">Categories</div>
          <div className="flex flex-col gap-1 mt-2 ml-4 items-start">
            <Link href="/photography/index">Index</Link>
            <Link href="/photography/portraits">Portraits</Link>
            <Link href="/photography/landscape">Landscape</Link>
            <Link href="/photography/street">Street</Link>
            <Link href="/photography/abstract">Abstract</Link>
          </div>
        </div>

        <div>
          <div className="mt-6 font-normal">Series In Progress</div>
          <div className="ml-4 mt-2 flex flex-col gap-1 items-start">
            <Link href="/photography/series/publicintimacy">
              ... Public Intimacy
            </Link>
            <Link href="/photography/series/nape">... The Nape</Link>
            <Link href="/photography/series/portals">... Portals</Link>
            <Link href="/photography/series/nyc">... NYC</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
