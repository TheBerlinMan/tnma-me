import React from "react";
import Link from "next/link";

const Photography = async () => {
  return (
    <div className="fade-in ml-4">
        <div>Index</div>
        <div className="">
          <div>Portrait</div>
          <Link href="/photography/portraits">Portraits</Link>
          <div>Landscape</div>
          <div>Street</div>
          <div>Abstract</div>
        </div>
      

      <div className="mt-6">Series In Progress</div>
      <div className="ml-4 mt-2 italic text-sm">
        <div>... Public Intimacy</div>
        <div>... The Nape</div>
        <div>... Portals</div>
        <div>... NYC</div>
      </div>
    </div>
  );
};

export default Photography;
