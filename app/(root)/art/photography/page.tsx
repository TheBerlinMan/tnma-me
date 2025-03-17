import React from "react";
import fs from "fs";
import path from "path";
import { Tab } from "@/app/(root)/components/Tabs";
import { Tabs } from "@/app/(root)/components/Tabs";
import CarouselPage from "@/app/(root)/components/CarouselPage";

async function getPhotos() {
  const portraitsDir = path.join(process.cwd(), "public", "photos", "portraits");
  const landscapesDir = path.join(process.cwd(), "public", "photos", "landscapes");
  const streetPhotosDir = path.join(process.cwd(), "public", "photos", "street");
  const portraitPhotos = fs.readdirSync(portraitsDir).map((file) => `/photos/portraits/${file}`);
  const landscapePhotos = fs.readdirSync(landscapesDir).map((file) => `/photos/landscapes/${file}`);
  const streetPhotos = fs.readdirSync(streetPhotosDir).map((file) => `/photos/street/${file}`);
  return { portraitPhotos, landscapePhotos, streetPhotos };
}

const Photography = async () => {

  const { portraitPhotos, landscapePhotos, streetPhotos } = await getPhotos();

  return (
    <div className="fade-in max-w-xl mx-auto">
      <Tabs>
      <Tab label="Street">
          <div className="flex flex-wrap justify-center gap-4 mt-6 fade-in">
            <CarouselPage images={streetPhotos} />
          </div>
        </Tab>
        <Tab label="Portrait">
          <div className="flex flex-wrap justify-center gap-4 mt-6 fade-in">
            <CarouselPage images={portraitPhotos} />
          </div>
        </Tab>
        <Tab label="Landscape">
          <div className="flex flex-wrap justify-center gap-4 mt-6 fade-in">
            <CarouselPage images={landscapePhotos} />
          </div>
        </Tab>
        
      </Tabs>
    </div>
  );
};

export default Photography;
