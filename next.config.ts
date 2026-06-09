import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "mydrawings.tnma.me" },
      { protocol: "https", hostname: "pub-2486da8c69614a9abef329a81476ad16.r2.dev" },
      {
        protocol: "https",
        hostname: `${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        port: "",
        pathname: "/folder/**",
      },
    ],
  },
};

export default nextConfig;
