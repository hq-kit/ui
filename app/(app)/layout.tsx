import type { ReactNode } from 'react'
import { AppNavbar } from '@/components/layouts/app-navbar'
import { Footer } from '@/components/layouts/footer'
import { ThemeCustomizerClient } from '@/components/theme-customizer/client'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeCustomizerClient />
      <AppNavbar />
      {children}
      <Footer />
    </>
  )
}
