/** @type {import('next').NextConfig} */
const config = {
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
