"use client"

import type { ReactNode } from "react"
import { ThemeProvider, useTheme } from "next-themes"
import { ContextProviders } from "@/components/providers/context-providers"
import { ThemeProviders } from "@/components/providers/theme-providers"
import { UIProviders } from "@/components/providers/ui-providers"

/**
 * Providers - Main provider composition
 * Combines theme, UI, and context providers in optimized order
 */
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ContextProviders>
      <UIProviders>
        <ThemeProviders>{children}</ThemeProviders>
      </UIProviders>
    </ContextProviders>
  )
}

export { Providers, ThemeProvider, useTheme }
