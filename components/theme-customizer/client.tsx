'use client'

import dynamic from 'next/dynamic'

const ThemeCustomizer = dynamic(() => import('@/components/theme-customizer').then((mod) => mod.ThemeCustomizer), {
  ssr: false
})

export function ThemeCustomizerClient() {
  return <ThemeCustomizer />
}
