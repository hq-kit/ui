"use client"

import type { PropsWithChildren } from "react"
import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"
import { Toaster } from "@/components/ui/sonner"

export function UIProviders({ children }: PropsWithChildren) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <Toaster />
      {children}
    </RouterProvider>
  )
}
