import type { NextConfig } from "next"

const isDev = process.env.NODE_ENV === "development"
const isBuild = process.env.NODE_ENV === "production"
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1"
  import("velite").then((m) => m.build({ watch: isDev, clean: !isDev }))
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css"
      }
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "picsum.photos"
      },
      {
        protocol: "https",
        hostname: "github.com"
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/r/:slug",
        destination: "/r/:slug.json"
      },
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started/installation",
        permanent: false
      },
      {
        source: "/charts",
        destination: "/charts/area",
        permanent: false
      }
    ]
  }
}

export default nextConfig
