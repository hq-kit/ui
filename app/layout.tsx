import { Providers } from '@/components/providers'
import { fontMono, fontSans } from '@/lib/fonts'
import '@/lib/styles/app.css'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import type { CSSProperties, ReactNode } from 'react'

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

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html
            lang='en'
            suppressHydrationWarning
            className={cn(fontSans, fontMono)}
            style={
                {
                    '--font-sans': 'var(--font-geist)',
                    '--font-mono': 'var(--font-geist-mono)'
                } as CSSProperties
            }
        >
            <body className='min-h-dvh font-sans antialiased'>
                <Providers>
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
