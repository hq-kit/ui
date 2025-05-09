'use client'

import { useEffect } from 'react'

import { IconMoon, IconSun } from 'hq-icons'

import { useTheme } from '@/components/providers'
import { Button } from '@/components/ui'
import {
    syncBorderRadius,
    syncFontMonoFamily,
    syncFontSansFamily,
    syncGrayColor,
    syncThemeColor,
    useThemeStore
} from '@/lib/hooks/use-theme'

export function ThemeToggle({ variant = 'outline' }: { variant?: 'outline' | 'ghost' }) {
    const { resolvedTheme, setTheme } = useTheme()

    const currentGrayColor = useThemeStore((state) => state.grayColor)
    const currentPresetColor = useThemeStore((state) => state.presetColor)
    const currentFontSansFamily = useThemeStore((state) => state.fontSansFamily)
    const currentFontMonoFamily = useThemeStore((state) => state.fontMonoFamily)
    const currentBorderRadius = useThemeStore((state) => state.borderRadius)

    useEffect(() => {
        syncGrayColor(currentGrayColor, resolvedTheme)
    }, [currentGrayColor, resolvedTheme])

    useEffect(() => {
        syncThemeColor(currentPresetColor, resolvedTheme)
    }, [currentPresetColor, resolvedTheme])

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
            icon
            variant={variant}
            aria-label={`Switch to ${resolvedTheme}` === 'light' ? 'dark' : 'light' + 'mode'}
            onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
            <IconSun className='dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0' />
            <IconMoon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    )
}
