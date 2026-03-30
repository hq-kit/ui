import { Providers } from '@/components/providers'
import { ThemeSyncClient } from '@/components/theme-sync-client'
import { siteConfig } from '@/config/site'
import { defaultFontMonoUrl } from '@/lib/fonts/mono'
import { defaultFontSansUrl } from '@/lib/fonts/sans'
import '@/lib/styles/app.css'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

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

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const lang = 'en-US'
  return (
    <html data-scroll-behavior='smooth' lang={lang} suppressHydrationWarning>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href={`https://fonts.googleapis.com/css2?${defaultFontSansUrl}&${defaultFontMonoUrl}&display=swap`}
          rel='stylesheet'
        />
      </head>
      <body className='min-h-dvh bg-background font-sans text-foreground antialiased'>
        <Providers lang={lang}>
          <ThemeSyncClient />
          {children}
        </Providers>
      </body>
    </html>
  )
}
