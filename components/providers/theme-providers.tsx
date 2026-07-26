"use client"

import type { PropsWithChildren } from "react"
import { ThemeProvider } from "next-themes"

export function ThemeProviders(props: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      storageKey="mode"
      {...props}
    />
  )
}
