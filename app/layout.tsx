import type { Metadata, Viewport } from 'next'
import '@/lib/styles/app.css'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ClientProvider } from '@/components/providers/client-provider'
import NextProvider from '@/components/providers/next-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { fontMono, fontSans } from '@/config/fonts'
import { SettingsProvider } from '@/contexts/setting-context'
import { getSettingsFromCookie } from '@/lib/themes/helpers'
import { cn } from '@/lib/utils'

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
  const settingsCookie = await getSettingsFromCookie()

  return (
    <html
      className={cn(fontSans.variable, fontMono.variable)}
      data-scroll-behavior='smooth'
      lang='en'
      suppressHydrationWarning
    >
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Noto+Serif+Georgian:wght@100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Delius+Swash+Caps&family=Gabriela&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='min-h-dvh bg-background font-sans text-foreground antialiased'>
        <ClientProvider>
          <NextProvider attribute='class' defaultTheme='system' disableTransitionOnChange enableSystem>
            <SettingsProvider settingsCookie={settingsCookie}>
              <ThemeProvider>
                {children}
                {process.env.NODE_ENV === 'production' && (
                  <>
                    <Analytics />
                    <SpeedInsights />
                  </>
                )}
              </ThemeProvider>
            </SettingsProvider>
          </NextProvider>
        </ClientProvider>
      </body>
    </html>
  )
}
