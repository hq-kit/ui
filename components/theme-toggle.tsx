'use client'

import type { Mode } from '@/contexts/setting-context'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useSettings } from '@/hooks/use-settings'

const ThemeToggle = ({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) => {
  const { setTheme } = useTheme()
  const { settings, updateSettings } = useSettings()

  const handleThemeToggle = () => {
    const newMode: Mode = settings.mode === 'dark' ? 'light' : 'dark'

    const updatedSettings = {
      ...settings,
      mode: newMode,
      theme: {
        ...settings.theme,
        styles: {
          light: settings.theme.styles?.light || {},
          dark: settings.theme.styles?.dark || {}
        }
      }
    }

    updateSettings(updatedSettings)

    setTheme(newMode)
  }

  useEffect(() => {
    if (settings.mode) {
      setTheme(settings.mode)
    }
  }, [settings.mode, setTheme])

  return (
    <Button onPress={handleThemeToggle} size='icon' variant={variant}>
      <IconSun aria-hidden className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <IconMoon aria-hidden className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}

export { ThemeToggle }
