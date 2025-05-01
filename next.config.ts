import type { NextConfig } from 'next'
import { build } from 'velite'

const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1

async function runVelite() {
    if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
        process.env.VELITE_STARTED = '1'
        try {
            await build({ watch: isDev, clean: !isDev })
            console.info('[VELITE] Build completed successfully')
        } catch (error) {
            console.error('[VELITE] Build failed:', error)
            process.exit(1)
        }
    }
}

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        config.resolve.extensionAlias = {
            '.js': ['.js', '.json']
        }

        config.resolve.alias = {
            ...config.resolve.alias
        }

        return config
    },
    serverExternalPackages: ['velite'],
    onDemandEntries: {
        maxInactiveAge: 60 * 1000
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos'
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/docs',
                destination: '/docs/getting-started/introduction',
                permanent: false
            },
            {
                source: '/blocks',
                destination: '/blocks/examples/dashboard',
                permanent: false
            }
        ]
    }
}

export default async () => {
    await runVelite()
    return nextConfig
}
