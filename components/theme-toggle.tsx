'use client'

import React from 'react'

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

    React.useEffect(() => {
        syncGrayColor(currentGrayColor, resolvedTheme)
    }, [currentGrayColor, resolvedTheme])

    React.useEffect(() => {
        syncThemeColor(currentPresetColor, resolvedTheme)
    }, [currentPresetColor, resolvedTheme])

    React.useEffect(() => {
        syncFontSansFamily(currentFontSansFamily)
    }, [currentFontSansFamily])

    React.useEffect(() => {
        syncFontMonoFamily(currentFontMonoFamily)
    }, [currentFontMonoFamily])

    React.useEffect(() => {
        syncBorderRadius(currentBorderRadius)
    }, [currentBorderRadius])

    return (
        <Button
            variant={variant}
            size='icon'
            aria-label={'Switch to ' + resolvedTheme === 'light' ? 'dark' : 'light' + 'mode'}
            onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        >
            <IconSun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
            <IconMoon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
        </Button>
    )
}
