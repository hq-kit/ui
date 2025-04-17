import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { fontMonoFamilies, fontSansFamilies } from '@/lib/fonts'
import { type GrayColor, type PresetColor, grayColors, presetColors } from '@/lib/themes'

// import {Presets} from '@/lib/themes/presets'

type State = {
    grayColor: GrayColor
    presetColor: PresetColor
    fontSansFamily: FontSansFamily
    fontMonoFamily: FontMonoFamily
    borderRadius: number
}

type Actions = {
    setGrayColor: (color: GrayColor) => void
    setPresetColor: (preset: PresetColor) => void
    setFontSansFamily: (font: FontMonoFamily) => void
    setFontMonoFamily: (font: FontSansFamily) => void
    setBorderRadius: (radius: number) => void
    reset: () => void
}

const initialState: State = {
    grayColor: 'zinc',
    presetColor: 'brand-default',
    fontSansFamily: {
        label: 'Geist',
        value: '--font-geist',
        link: 'https://vercel.com/font'
    },
    fontMonoFamily: {
        label: 'Geist Mono',
        value: '--font-geist-mono',
        link: 'https://vercel.com/font'
    },
    borderRadius: 0.5
}

export const useThemeStore = create<State & Actions>()(
    devtools(
        persist(
            (set) => ({
                ...initialState,
                setGrayColor: (grayColor) => set(() => ({ grayColor })),
                setPresetColor: (presetColor) => set(() => ({ presetColor })),
                setFontSansFamily: (fontSansFamily) => set(() => ({ fontSansFamily })),
                setFontMonoFamily: (fontMonoFamily) => set(() => ({ fontMonoFamily })),
                setBorderRadius: (borderRadius) => set(() => ({ borderRadius })),
                reset: () => set(initialState)
            }),
            {
                name: 'hq-ui-theme'
            }
        )
    )
)

export const useThemeGenerator = () => {
    const currentPresetColor = useThemeStore((state) => state.presetColor)
    const currentGrayColor = useThemeStore((state) => state.grayColor)
    const currentFontSansFamily = useThemeStore((state) => state.fontSansFamily)
    const currentFontMonoFamily = useThemeStore((state) => state.fontMonoFamily)
    const currentBorderRadius = useThemeStore((state) => state.borderRadius)

    const updatePresetColor = useThemeStore((state) => state.setPresetColor)
    const updateGrayColor = useThemeStore((state) => state.setGrayColor)
    const updateFontSansFamily = useThemeStore((state) => state.setFontSansFamily)
    const updateFontMonoFamily = useThemeStore((state) => state.setFontMonoFamily)
    const updateBorderRadius = useThemeStore((state) => state.setBorderRadius)

    const reset = useThemeStore((state) => state.reset)

    return {
        grayColors,
        presetColors,
        fontSansFamilies,
        fontMonoFamilies,
        currentGrayColor,
        currentPresetColor,
        currentFontSansFamily,
        currentFontMonoFamily,
        currentBorderRadius,
        updateGrayColor,
        updatePresetColor,
        updateFontSansFamily,
        updateFontMonoFamily,
        updateBorderRadius,
        reset
    }
}

export type ThemeConfig = {
    code: string
    config: string
}

export const syncGrayColor = (color: GrayColor, resolvedTheme: string | undefined) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const grayColor = grayColors.find((c) => c.name === color)

    const vars = (resolvedTheme === 'light' ? { ...grayColor?.cssVars.light } : { ...grayColor?.cssVars.dark }) as {
        [key: string]: string
    }

    for (const variable of Object.keys(vars)) {
        root.style.setProperty(`--${variable}`, `${vars[variable]}`)
    }

    root.style.setProperty(
        '--bg',
        resolvedTheme === 'light' ? `${grayColor?.cssVars.light.bg}` : `${grayColor?.cssVars.dark.bg}`
    )
}

export const syncThemeColor = (color: PresetColor, resolvedTheme: string | undefined) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const primaryColor = presetColors.find((c) => c.name === color)

    const vars = (
        resolvedTheme === 'light' ? { ...primaryColor?.cssVars.light } : { ...primaryColor?.cssVars.dark }
    ) as { [key: string]: string }

    for (const variable of Object.keys(vars)) {
        root.style.setProperty(`--${variable}`, `${vars[variable]}`)
    }
}

export const syncBorderRadius = (borderRadius: number) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return
    root.style.setProperty('--radius', `${borderRadius}rem`)
}

export const syncFontSansFamily = (fontFamily: FontSansFamily) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (root) {
        root.style.setProperty('--font-sans', `var(${fontFamily.value})`)
    }
}

export const syncFontMonoFamily = (fontFamily: FontMonoFamily) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (root) {
        root.style.setProperty('--font-mono', `var(${fontFamily.value})`)
    }
}

export type FontSansFamily = (typeof fontSansFamilies)[number]
export type FontMonoFamily = (typeof fontMonoFamilies)[number]
