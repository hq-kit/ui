'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect } from 'react'
import { useTheme } from '@/components/providers'
import { Button } from '@/components/ui'
import {
    syncBorderRadius,
    syncFontMonoFamily,
    syncFontSansFamily,
    syncThemeColor,
    useThemeStore
} from '@/lib/hooks/use-theme'

export function ThemeToggle({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) {
    const { resolvedTheme, setTheme } = useTheme()

    const currentPresetTheme = useThemeStore((state) => state.presetTheme)
    const currentFontSansFamily = useThemeStore((state) => state.fontSansFamily)
    const currentFontMonoFamily = useThemeStore((state) => state.fontMonoFamily)
    const currentBorderRadius = useThemeStore((state) => state.borderRadius)

    useEffect(() => {
        syncThemeColor(currentPresetTheme, resolvedTheme)
    }, [currentPresetTheme, resolvedTheme])

    useEffect(() => {
        syncFontSansFamily(currentFontSansFamily)
    }, [currentFontSansFamily])

    useEffect(() => {
        syncFontMonoFamily(currentFontMonoFamily)
    }, [currentFontMonoFamily])

    useEffect(() => {
        syncBorderRadius(currentBorderRadius)
    }, [currentBorderRadius])

    return (
        <Button
            aria-label={`Switch to ${resolvedTheme}` === 'light' ? 'dark' : 'light' + 'mode'}
            icon
            onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
            variant={variant}
        >
            <IconSun aria-hidden className='dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0' />
            <IconMoon aria-hidden className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    )
}
