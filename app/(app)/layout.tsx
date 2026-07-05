import type { ReactNode } from "react"
import { AppNavbar } from "@/components/layouts/app-navbar"
import { Footer } from "@/components/layouts/footer"
import { ThemeCustomizerClient } from "@/components/theme-customizer/client"
import { NavbarProvider } from "@/components/ui/navbar"

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <NavbarProvider>
      <ThemeCustomizerClient />
      <AppNavbar />
      {children}
      <Footer />
    </NavbarProvider>
  )
}
