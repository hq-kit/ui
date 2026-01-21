'use client'

import { useEffect } from 'react'
import { useTheme } from '@/components/providers'
import { syncVars, useThemeGenerator } from '@/hooks/use-theme'

export function ThemeSync() {
  const { resolvedTheme } = useTheme()
  const { currentPreset, currentStyles } = useThemeGenerator()
  const mode = resolvedTheme === 'light' ? 'light' : 'dark'

  useEffect(() => {
    syncVars({
      ...currentStyles[mode],
      'font-sans': currentStyles.light['font-sans'],
      'font-mono': currentStyles.light['font-mono'],
      radius: currentStyles.light.radius
    })
  }, [resolvedTheme, currentPreset, currentStyles])

  return null
}
