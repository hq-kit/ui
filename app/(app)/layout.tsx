import { type PropsWithChildren, Suspense } from "react"
import AppNavbar from "@/components/layouts/app-navbar"
import ThemeCustomizer from "@/components/theme-customizer"
import { Skeleton } from "@/components/ui/skeleton"

export default ({ children }: PropsWithChildren) => {
  return (
    <>
      <AppNavbar />
      <Suspense fallback={<Skeleton className="fixed top-16 right-0 z-50 size-9 rounded-r-none rtl:left-0" />}>
        <ThemeCustomizer />
      </Suspense>
      {children}
    </>
  )
}
