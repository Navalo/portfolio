import type { NextConfig } from "next";

// On GitHub Pages a project site lives at https://<user>.github.io/<repo>/,
// so every asset path needs the "/<repo>" prefix. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH automatically (empty for a <user>.github.io repo).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in ./out
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true }, // no image server on Pages
};

export default nextConfig;
