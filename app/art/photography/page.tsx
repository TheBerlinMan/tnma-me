/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { Tab } from "@/app/components/Tabs";
import { Tabs } from "@/app/components/Tabs";

async function getPhotos() {
  const portraitsDir = path.join(
    process.cwd(),
    "public",
    "photos",
    "portraits"
  );
  const landscapesDir = path.join(
    process.cwd(),
    "public",
    "photos",
    "landscapes"
  );
  const portraitPhotos = fs.readdirSync(portraitsDir);
  const landscapePhotos = fs.readdirSync(landscapesDir);
  return { portraitPhotos, landscapePhotos };
}

const Photography = async () => {
  const { portraitPhotos, landscapePhotos } = await getPhotos();

  return (
    <div>
      <Tabs>
        <Tab label="Portraits">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {portraitPhotos.map((filename, index) => (
              <img
                key={index}
                src={`/photos/portraits/${filename}`}
                alt={`Portrait - ${filename}`}
                style={{ width: "auto", height: "300px" }}
              />
            ))}
          </div>
        </Tab>
        <Tab label="Landscapes">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {landscapePhotos.map((filename, index) => (
              <img
                key={index}
                src={`/photos/landscapes/${filename}`}
                alt={`Landscape - ${filename}`}
                style={{ width: "auto", height: "300px" }}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Photography;
