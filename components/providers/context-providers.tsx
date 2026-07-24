"use client"

import type { ReactNode } from "react"
import { IconProvider } from "@/components/icon-provider"
import { LocaleProvider } from "@/components/locale-provider"
import { StyleProvider } from "@/components/style-provider"

/**
 * ContextProviders - Application context providers
 * Handles icons, localization, and styling
 */
export function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <IconProvider>
      <LocaleProvider>
        <StyleProvider>{children}</StyleProvider>
      </LocaleProvider>
    </IconProvider>
  )
}
