import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  experimental:{
    useTypeScriptCli:true
  },
  devIndicators: false,
  outputFileTracingIncludes: {
    '/**': ['./content/**']
  },
  typescript: {
    // ignoreBuildErrors:true,
    tsconfigPath: './tsconfig.json'
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
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    disableStaticImages: false
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
    config.optimization = {
      ...config.optimization,
      concatenateModules: true,
      // Code splitting strategy
      splitChunks: {
        ...config.optimization?.splitChunks,
        chunks: 'all',
        cacheGroups: {
          // Separate MDX content into own chunks
          mdx: {
            test: /[\\/]content[\\/]/,
            name: 'mdx-content',
            priority: 20,
            enforce: true
          },
          // Vendor dependencies
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10
          }
        }
      }
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/r/styles/new-york/:path*',
        destination: '/r/styles/nova/:path*',
      },
      {
        source: '/r/styles/radix-:styleName/:path*',
        destination: '/r/styles/:styleName/:path*',
      },
      {
        source: '/r/styles/aria-:styleName/:path*',
        destination: '/r/styles/:styleName/:path*',
      },
      {
        source: '/r/styles/base-:styleName/:path*',
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
