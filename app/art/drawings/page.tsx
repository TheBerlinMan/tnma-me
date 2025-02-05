import React from "react";
import fs from "fs";
import path from "path";

import CarouselPage from "@/app/components/CarouselPage";

async function getDrawings() {
  const drawingsDir = path.join(process.cwd(), "public", "drawings");
  return fs.readdirSync(drawingsDir).map((file) => `/drawings/${file}`);
}

export default async function Drawings() {
  const drawingFiles = await getDrawings();
  console.log(drawingFiles);

  return (
    <div className="fade-in">
      <CarouselPage images={drawingFiles} />
    </div>
  );
}
