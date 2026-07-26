"use client"

import type { ReactNode } from "react"
import { IconProvider } from "@/components/icon-provider"

export function ContextProviders({ children }: { children: ReactNode }) {
  return <IconProvider>{children}</IconProvider>
}
