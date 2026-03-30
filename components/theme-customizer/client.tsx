'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { fontMonoUrl } from '@/lib/fonts/mono'
import { fontSansUrl } from '@/lib/fonts/sans'

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

  useEffect(() => {
    if (!isReady || typeof document === 'undefined') return
    const existing = document.querySelector('link[data-fonts="hq-ui-full"]')
    if (existing) return
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('data-fonts', 'hq-ui-full')
    link.setAttribute('href', `https://fonts.googleapis.com/css2?${fontSansUrl}&${fontMonoUrl}&display=swap`)
    document.head.appendChild(link)
  }, [isReady])

  if (!isReady) return null
  return <ThemeCustomizer />
}
