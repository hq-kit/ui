export const siteConfig = {
  name: 'HQ UI',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://hq-ui.vercel.app',
  description: 'HQ UI is a collection of open source components for building modern web applications.',
  author: {
    username: 'dq-alhq',
    name: 'Diqi Al-Haqqi',
    url: 'https://x.com/dqalhq'
  },
  links: {
    github: 'https://github.com/hq-kit'
  },
  repo: {
    url: 'https://github.com/hq-kit/ui'
  },
  cli: {
    version: 'latest',
    command: 'shadcn@latest'
  },
  shadcn: 'npx shadcn@latest'
}
