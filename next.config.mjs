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
      },
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh'
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
      {
        source: '/r/styles/radix-:styleName/:path*',
        destination: '/r/styles/:styleName/:path*',
      },
      {
        source: '/r/styles/:theme/:component([^\\.]+)',
        destination: '/r/styles/:theme/:component.json',
      },
      {
        source: '/r/:slug',
        destination: '/r/styles/nova/:slug.json',
      },
      {
        source: '/docs/:path*.md',
        destination: '/llm/:path*'
      },
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
        source: '/charts',
        destination: '/charts/area',
        permanent: false
      }
    ]
  }
}

export default withMDX(config)
