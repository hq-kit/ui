import type { Metadata, Viewport } from 'next'
import '@/lib/styles/app.css'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Providers } from '@/components/providers'
import { ThemeSync } from '@/components/theme-sync'
import { Toaster } from '@/components/ui/sonner'
import { fontMonoUrl } from '@/lib/fonts/mono'
import { fontSansUrl } from '@/lib/fonts/sans'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://hq-ui.vercel.app'),
  title: {
    default: 'HQ UI',
    template: '%s | HQ UI'
  },
  description: 'Customizable React UI Components Library',
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
  return (
    <html data-scroll-behavior='smooth' lang='en' suppressHydrationWarning>
      <head>
        <link href={`https://fonts.googleapis.com/css2?${fontSansUrl}&${fontMonoUrl}&display=swap`} rel='stylesheet' />
        {/*<ThemeScript />*/}
      </head>
      <body className='min-h-dvh bg-background font-sans text-foreground antialiased'>
        <Providers>
          <ThemeSync />
          <Toaster />
          {children}
          {process.env.NODE_ENV === 'production' && (
            <>
              <Analytics />
              <SpeedInsights />
            </>
          )}
        </Providers>
      </body>
    </html>
  )
}
