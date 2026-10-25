import type { CSSProperties, PropsWithChildren } from "react"
import { AppHeader } from "@/components/blocks/dashboard-01/components/app-header"
import { AppSidebar } from "@/components/blocks/dashboard-01/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)"
        } as CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
