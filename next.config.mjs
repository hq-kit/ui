import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  devIndicators: false,
  outputFileTracingIncludes: {
    '/**': ['./content/**']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
      {
        protocol: 'https',
        hostname: 'github.com'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        'node:fs': false,
        path: false
      }
    }
    return config
  },
  async rewrites() {
    return [
      { source: '/r/:slug', destination: '/r/:slug.json' },
      { source: '/r/hooks/:slug', destination: '/r/:slug.json' },
      { source: '/r/lib/:slug', destination: '/r/:slug.json' },
      {
        source: '/docs/:path*.md',
        destination: '/llm/:path*'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started/installation',
        permanent: false
      },
      {
        source: '/docs/components/layouts/aside',
        destination: '/docs/components/layouts/sidebar',
        permanent: true
      }
    ]
  }
}

export default withMDX(config)
