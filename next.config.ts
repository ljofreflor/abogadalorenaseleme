import type { NextConfig } from "next";

/**
 * GitHub Pages (project site): set basePath to /<repo>
 * User/org site (ljofreflor.github.io) or custom domain: leave empty.
 * In Actions we pass BASE_PATH=/<repo> automatically.
 */
const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
