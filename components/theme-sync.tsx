// ThemeSync.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { useThemeStore } from '@/hooks/use-theme-customizer'

export function ThemeSync() {
  const { resolvedTheme } = useTheme()
  const apply = useThemeStore((s) => s.apply)

  useEffect(() => {
    if (resolvedTheme === 'light' || resolvedTheme === 'dark') {
      apply(resolvedTheme)
    }
  }, [resolvedTheme, apply])

  return null
}
