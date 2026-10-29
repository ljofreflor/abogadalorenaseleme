import type { NextConfig } from "next";

/**
 * Primary host is the custom domain https://abogadalorenaseleme.cl/
 * (no basePath). Project Pages under /abogadalorenaseleme/ may break.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
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
