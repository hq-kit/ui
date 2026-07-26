import { type PropsWithChildren, Suspense } from "react"
import { AppNavbar } from "@/components/layouts/app-navbar"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { NavbarProvider } from "@/components/ui/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function DocsLayout({ children }: PropsWithChildren) {
  return (
    <NavbarProvider>
      <Suspense fallback={<Skeleton className="fixed top-16 right-0 z-50 size-9 rounded-r-none rtl:left-0" />}>
        <ThemeCustomizer />
      </Suspense>
      <AppNavbar />
      {children}
    </NavbarProvider>
  )
}
