// Remove this on Production, the Layout should be Server Component
"use client"
import { type PropsWithChildren, useState } from "react"
import { AppNavbar } from "@/components/blocks/landing-page-01/components/app-navbar"
import { NavbarControl, type Values } from "@/components/blocks/landing-page-01/components/navbar-control"
import { NavbarInset, NavbarProvider } from "@/components/ui/navbar"

export default function Layout({ children }: PropsWithChildren) {
  // Remove this on Production, the Layout should be Server Component
  const [options, setOptions] = useState<Values>({
    variant: "navbar",
    sticky: false,
    fluid: false,
    container: false
  })
  return (
    <NavbarProvider>
      {/*Remove this on Production, the Layout should be Server Component*/}
      <NavbarControl onChange={setOptions} value={options} />
      <AppNavbar {...options} />
      <NavbarInset className={options.sticky ? "*:last:min-h-[200vh]" : ""}>{children}</NavbarInset>
    </NavbarProvider>
  )
}
