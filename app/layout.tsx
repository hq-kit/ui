import React from 'react'

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import { Providers } from '@/components/providers'
import '@/lib/styles/app.css'
import { OpenPanelComponent } from '@openpanel/nextjs'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://hq-ui.vercel.app'),
    title: {
        default: 'HQ UI',
        template: `%s | HQ UI`
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

const fontSans = localFont({
    src: [{ path: './fonts/SFProMed.woff2' }],
    variable: '--font-sans'
})

const fontMono = localFont({
    src: [{ path: './fonts/SFMono.woff2' }],
    variable: '--font-mono'
})

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang='en'
            suppressHydrationWarning={true}
            className={`${fontSans.variable} ${fontMono.variable}`}
        >
            <body className='min-h-screen font-sans antialiased'>
                <Providers>
                    {children}
                    {process.env.NODE_ENV === 'production' && (
                        <OpenPanelComponent
                            clientSecret={process.env.ANALYTICS_CLIENT_SECRET as string}
                            clientId={process.env.ANALYTICS_CLIENT_ID as string}
                            trackScreenViews={true}
                            trackAttributes={true}
                        />
                    )}
                </Providers>
            </body>
        </html>
    )
}
