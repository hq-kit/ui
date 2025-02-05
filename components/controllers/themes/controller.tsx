'use client'

import { Presets } from '@/components/controllers/themes/theme-presets'

export const applyTheme = (
    themeContainer: HTMLHtmlElement[],
    theme: string,
    resolvedTheme: 'dark' | 'light'
) => {
    const themeVariables = resolvedTheme === 'dark' ? Presets[theme].dark : Presets[theme].light
    Object.keys(themeVariables).forEach((key) => {
        themeContainer.forEach((container) => {
            container.style.setProperty(
                `--color-${key.replace('--', '')}`,
                themeVariables[key as keyof typeof themeVariables]
            )
        })
    })
    themeContainer.forEach((container) => {
        container.style.setProperty('--radius-lg', `${Presets[theme].radius ?? Presets.hq.radius}rem`)
    })
}
