import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vpog-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
