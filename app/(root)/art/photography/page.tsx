import React from "react";
import fs from "fs";
import path from "path";
import { Tab } from "@/app/(root)/components/Tabs";
import { Tabs } from "@/app/(root)/components/Tabs";
import CarouselPage from "@/app/(root)/components/CarouselPage";

async function getPhotos() {
  const portraitsDir = path.join(process.cwd(), "public", "photos", "portraits");
  const landscapesDir = path.join(process.cwd(), "public", "photos", "landscapes");
  const portraitPhotos = fs.readdirSync(portraitsDir).map((file) => `/photos/portraits/${file}`);
  const landscapePhotos = fs.readdirSync(landscapesDir).map((file) => `/photos/landscapes/${file}`);
  return { portraitPhotos, landscapePhotos };
}

const Photography = async () => {
  const { portraitPhotos, landscapePhotos } = await getPhotos();

  return (
    <div className="fade-in">
      <Tabs>
        <Tab label="Portraits">
          <div className="flex flex-wrap justify-center gap-4 mt-6 ">
            <CarouselPage images={portraitPhotos} />
          </div>
        </Tab>
        <Tab label="Landscapes">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <CarouselPage images={landscapePhotos} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Photography;
