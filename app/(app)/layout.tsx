import type React from 'react'

import { Footer } from '@/components/layouts/footer'
import { Navbar } from '@/components/layouts/navbar'
import { ThemeCustomizer } from '@/components/theme-customizer'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeCustomizer />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
