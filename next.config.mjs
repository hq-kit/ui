const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    const { build } = await import('velite')
    await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
const config = {
    experimental: {
        optimizePackageImports: ['shiki']
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

export default config
