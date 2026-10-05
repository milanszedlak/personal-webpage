import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/my-repo") when hosting on a GitHub Pages project site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
