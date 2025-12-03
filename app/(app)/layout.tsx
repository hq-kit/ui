import type { ReactNode } from 'react'
import { AppNavbar } from '@/components/layouts/app-navbar'
import { Footer } from '@/components/layouts/footer'

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {/* <ThemeCustomizer /> */}
            <AppNavbar />
            {children}
            <Footer />
        </>
    )
}
