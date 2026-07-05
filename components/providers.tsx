"use client"

import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { ThemeProvider, useTheme } from "next-themes"
import { RouterProvider } from "react-aria-components"
import { IconProvider } from "@/components/icon-provider"
import { LocaleProvider } from "@/components/locale-provider"
import { StyleProvider } from "@/components/style-provider"
import { Toaster } from "@/components/ui/sonner"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>
  }
}

const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  return (
    <IconProvider>
      <LocaleProvider>
        <RouterProvider navigate={router.push}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
            storageKey="mode"
          >
            <StyleProvider>
              <Toaster />
              {children}
            </StyleProvider>
          </ThemeProvider>
        </RouterProvider>
      </LocaleProvider>
    </IconProvider>
  )
}

export { Providers, ThemeProvider, useTheme }
