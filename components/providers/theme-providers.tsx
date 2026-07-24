"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

/**
 * ThemeProviders - Isolated theme management
 * Handles dark/light mode, system preference
 */
export function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem storageKey="mode">
      {children}
    </ThemeProvider>
  )
}
