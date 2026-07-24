"use client"

import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"
import { Toaster } from "@/components/ui/sonner"

/**
 * UIProviders - UI framework providers
 * Handles routing, notifications, and core UI behavior
 */
export function UIProviders({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <Toaster />
      {children}
    </RouterProvider>
  )
}
