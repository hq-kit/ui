'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const ThemeCustomizer = dynamic(() => import('@/components/theme-customizer').then((mod) => mod.ThemeCustomizer), {
  ssr: false
})

export function ThemeCustomizerClient() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setIsReady(true))
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(() => setIsReady(true), 1200)
    return () => window.clearTimeout(id)
  }, [])

  if (!isReady) return null
  return <ThemeCustomizer />
}
