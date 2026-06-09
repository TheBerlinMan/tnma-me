import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { s3 } from "@/lib/utils";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get("key");
    const bucket = searchParams.get("bucket");
    const height = searchParams.get("h");
    const width = searchParams.get("w");
    const quality = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get("q") || "80", 10))
    );

    if (!key) {
      return NextResponse.json({ error: "Image key is required" }, { status: 400 });
    }

    if (!bucket) {
      return NextResponse.json(
        { error: "Bucket parameter is required" },
        { status: 400 }
      );
    }

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    const response = await s3.send(command);

    if (!response.Body) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const chunks: Uint8Array[] = [];
    const reader = response.Body.transformToWebStream().getReader();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    let buffer = Buffer.concat(chunks);
    let contentType = getContentType(key);

    if (height || width) {
      const extension = key.toLowerCase().split(".").pop();
      const resizeOptions = { withoutEnlargement: true as const };
      let pipeline = sharp(buffer).rotate();

      if (height && width) {
        pipeline = pipeline.resize(
          parseInt(width, 10),
          parseInt(height, 10),
          { ...resizeOptions, fit: "inside" }
        );
      } else if (height) {
        pipeline = pipeline.resize({
          height: parseInt(height, 10),
          ...resizeOptions,
        });
      } else if (width) {
        pipeline = pipeline.resize({
          width: parseInt(width, 10),
          ...resizeOptions,
        });
      }

      if (extension === "png") {
        buffer = Buffer.from(await pipeline.png({ compressionLevel: 9 }).toBuffer());
        contentType = "image/png";
      } else if (extension === "webp") {
        buffer = Buffer.from(await pipeline.webp({ quality }).toBuffer());
        contentType = "image/webp";
      } else if (extension === "gif") {
        // Pass through without resize for animated GIFs
      } else {
        buffer = Buffer.from(await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer());
        contentType = "image/jpeg";
      }
    }

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error fetching image from R2:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch image",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

function getContentType(key: string): string {
  const extension = key.toLowerCase().split(".").pop();
  switch (extension) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "webp":
      return "image/webp";
    default:
      return "image/jpeg";
  }
}
