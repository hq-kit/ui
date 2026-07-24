import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()
/** @type {import("next").NextConfig} */
const config = {
  devIndicators: false,
  outputFileTracingIncludes: {
    '/**': ['./content/**']
  },
  // Enable TypeScript checking instead of ignoring errors
  typescript: {
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
    // Optimize image delivery
    formats: ['image/avif', 'image/webp'],
    // Responsive image sizes for mobile-first design
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // Disable static images optimization (already optimized)
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

    // MDX optimization: split large MDX files into chunks
    config.optimization = {
      ...config.optimization,
      // Enable module concatenation
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
