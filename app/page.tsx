import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { unstable_cache } from "next/cache";
import { s3 } from "@/lib/utils";
import HomeContent from "@/app/(root)/components/HomeContent";
import type { CarouselSource } from "@/app/(root)/components/ArtCarousel";

// Render per request so the carousel order reshuffles on every visit; the R2
// listing itself is cached below, so no R2 round trip happens per view.
export const dynamic = "force-dynamic";

const MAX_CAROUSEL_IMAGES = 40;

const artSources = [
  { bucket: "myphotos", folder: "ilike1" },
  { bucket: "myphotos", folder: "ilike2" },
  { bucket: "myphotos", folder: "ilike3" },
  { bucket: "myphotos", folder: "ilike4" },
];

const listCarouselImages = unstable_cache(
  async (): Promise<CarouselSource[]> => {
    const results = await Promise.all(
      artSources.map(async ({ bucket, folder }) => {
        const data = await s3.send(
          new ListObjectsV2Command({ Bucket: bucket, Prefix: `${folder}/` })
        );
        return (data.Contents ?? [])
          .map((obj) => obj.Key)
          .filter((key): key is string => Boolean(key) && !key!.endsWith("/"))
          .map((key) => ({ key, bucket }));
      })
    );
    return results.flat();
  },
  ["carousel-image-list"],
  { revalidate: 3600 }
);

function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Home = async () => {
  let carouselImages: CarouselSource[] = [];
  try {
    carouselImages = shuffle(await listCarouselImages()).slice(
      0,
      MAX_CAROUSEL_IMAGES
    );
  } catch (error) {
    console.error("Error loading carousel images:", error);
  }

  return <HomeContent carouselImages={carouselImages} />;
};

export default Home;
