"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { fontMonoUrl } from "@/lib/fonts/mono"
import { fontSansUrl } from "@/lib/fonts/sans"

// Lazy load with minimal overhead
const ThemeCustomizer = dynamic(() => import("@/components/theme-customizer").then((mod) => mod.ThemeCustomizer), {
  ssr: false,
  loading: () => null // No loading UI, silent load
})

export function ThemeCustomizerClient() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Use requestIdleCallback if available, fallback to 2000ms (reduced from 1200ms)
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setIsReady(true), { timeout: 3000 })
      return () => window.cancelIdleCallback(id)
    }

    const id = setTimeout(() => setIsReady(true), 2000)
    return () => clearTimeout(id)
  }, [])

  // Preload custom fonts separately without blocking
  useEffect(() => {
    if (!isReady || typeof document === "undefined") return

    const existing = document.querySelector('link[data-fonts="hq-ui-custom"]')
    if (existing) return

    const link = document.createElement("link")
    link.setAttribute("rel", "stylesheet")
    link.setAttribute("data-fonts", "hq-ui-custom")
    link.setAttribute("href", `https://fonts.googleapis.com/css2?${fontSansUrl}&${fontMonoUrl}&display=swap`)
    link.setAttribute("media", "print") // Load asynchronously
    link.onload = () => {
      link.removeAttribute("media") // Apply to all media
    }
    document.head.appendChild(link)
  }, [isReady])

  if (!isReady) return null
  return <ThemeCustomizer />
}
