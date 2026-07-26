"use client"

import type { PropsWithChildren } from "react"
import { ThemeProvider, useTheme } from "next-themes"
import { ContextProviders } from "@/components/providers/context-providers"
import { ThemeProviders } from "@/components/providers/theme-providers"
import { UIProviders } from "@/components/providers/ui-providers"

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ContextProviders>
      <UIProviders>
        <ThemeProviders>{children}</ThemeProviders>
      </UIProviders>
    </ContextProviders>
  )
}

export { Providers, ThemeProvider, useTheme }
