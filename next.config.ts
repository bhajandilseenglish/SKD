import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skdgroupofinstitutions.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/acca",
        destination: "/acca-coaching-chandigarh",
        permanent: true,
      },
      {
        source: "/acca-institute-in-chandigarh",
        destination: "/acca-coaching-chandigarh",
        permanent: true,
      },
      {
        source: "/acca-institute-in-india",
        destination: "/acca-coaching-chandigarh",
        permanent: true,
      },
      {
        source: "/ca-foundation",
        destination: "/ca-foundation-coaching-chandigarh",
        permanent: true,
      },
      {
        source: "/ca-intermediate",
        destination: "/ca-intermediate-coaching-chandigarh",
        permanent: true,
      },
      {
        source: "/ca-final",
        destination: "/ca-final-coaching-chandigarh",
        permanent: true,
      },
      {
        source: "/us-cma",
        destination: "/us-cma-coaching",
        permanent: true,
      },
      {
        source: "/us-cpa",
        destination: "/us-cpa-coaching",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
