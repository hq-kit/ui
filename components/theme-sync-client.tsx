'use client'

import dynamic from 'next/dynamic'

const ThemeSync = dynamic(() => import('@/components/theme-sync').then((mod) => mod.ThemeSync), {
  ssr: false
})

export function ThemeSyncClient() {
  return <ThemeSync />
}
