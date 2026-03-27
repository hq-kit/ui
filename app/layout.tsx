import { Providers } from '@/components/providers'
import { ThemeSync } from '@/components/theme-sync'
import { siteConfig } from '@/config/site'
import { fontMonoUrl } from '@/lib/fonts/mono'
import { fontSansUrl } from '@/lib/fonts/sans'
import '@/lib/styles/app.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: './'
  },
  keywords: [
    'React',
    'Next.js',
    'Inertia.js',
    'Tailwind CSS',
    'UI Components',
    'UI Kit',
    'UI Library',
    'UI Framework',
    'HQ UI',
    'React Aria',
    'React Aria Components',
    'Server Components',
    'React Components',
    'Next UI Components',
    'UI Design System',
    'UI for Laravel Inertia',
    'Laravel Inertia UI',
    'Laravel Inertia Components',
    'Laravel Inertia UI Components',
    'Laravel Inertia UI Kit',
    'Laravel Inertia UI Library',
    'Laravel Inertia UI Framework',
    'Laravel Inertia HQ UI',
    'Laravel HQ UI',
    'HQ UI Components',
    'HQ UI UI Components',
    'HQ UI UI Kit',
    'HQ UI UI Library',
    'HQ UI UI Framework',
    'HQ UI Laravel Inertia',
    'HQ UI Laravel',
    'HQ UI Inertia'
  ],
  authors: [
    {
      name: 'dq-alhq',
      url: 'https://x.com/dqalhq'
    }
  ],
  creator: 'dq-alhq'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  viewportFit: 'cover',
  width: 'device-width',
  initialScale: 1
}

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const acceptLanguage = (await headers()).get('accept-language')
  const lang = acceptLanguage?.split(/[,;]/)[0] || 'en-US'
  return (
    <html data-scroll-behavior='smooth' lang={lang} suppressHydrationWarning>
      <head>
        <link href={`https://fonts.googleapis.com/css2?${fontSansUrl}&${fontMonoUrl}&display=swap`} rel='stylesheet' />
      </head>
      <body className='min-h-dvh bg-background font-sans text-foreground antialiased'>
        <Providers lang={lang}>
          <ThemeSync />
          {children}
        </Providers>
      </body>
    </html>
  )
}
