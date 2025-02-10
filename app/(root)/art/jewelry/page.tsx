
import React from "react";
import fs from "fs";
import path from "path";

import CarouselPage from "@/app/(root)/components/CarouselPage";

async function getJewelry() {
  const jewelryDir = path.join(process.cwd(), "public", "jewelry");
  return fs.readdirSync(jewelryDir).map((file) => `/jewelry/${file}`);
}

const page = async () => {
  const jewelryFiles = await getJewelry();
  return (
    <div className="fade-in max-w-xl">
      <CarouselPage images={jewelryFiles} />
    </div>
  )
}

export default page