import { type Preset, getPreset } from '@/lib/themes'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { fontMonoFamilies, fontSansFamilies } from '@/lib/fonts'

type State = {
    presetTheme: Preset
    fontSansFamily: FontSansFamily
    fontMonoFamily: FontMonoFamily
    borderRadius: string
}

type Actions = {
    setPresetTheme: (preset: Preset) => void
    setFontSansFamily: (font: FontMonoFamily) => void
    setFontMonoFamily: (font: FontSansFamily) => void
    setBorderRadius: (radius: string) => void
    reset: () => void
}

export type FontSansFamily = (typeof fontSansFamilies)[number]
export type FontMonoFamily = (typeof fontMonoFamilies)[number]

const initialState: State = {
    presetTheme: 'default',
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
    borderRadius: '0.5rem'
}

export const useThemeStore = create<State & Actions>()(
    devtools(
        persist(
            (set) => ({
                ...initialState,
                setPresetTheme: (presetTheme) => set(() => ({ presetTheme })),
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
    const currentPresetTheme = useThemeStore((state) => state.presetTheme)
    const currentFontSansFamily = useThemeStore((state) => state.fontSansFamily)
    const currentFontMonoFamily = useThemeStore((state) => state.fontMonoFamily)
    const currentBorderRadius = useThemeStore((state) => state.borderRadius)

    const updatePresetTheme = useThemeStore((state) => state.setPresetTheme)
    const updateFontSansFamily = useThemeStore((state) => state.setFontSansFamily)
    const updateFontMonoFamily = useThemeStore((state) => state.setFontMonoFamily)
    const updateBorderRadius = useThemeStore((state) => state.setBorderRadius)

    const reset = useThemeStore((state) => state.reset)

    return {
        fontSansFamilies,
        fontMonoFamilies,
        currentPresetTheme,
        currentFontSansFamily,
        currentFontMonoFamily,
        currentBorderRadius,
        updatePresetTheme,
        updateFontSansFamily,
        updateFontMonoFamily,
        updateBorderRadius,
        reset
    }
}

export const syncThemeColor = (preset: Preset, resolvedTheme: string | undefined) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const presetTheme = getPreset(preset)

    if (!presetTheme) return

    const vars = (resolvedTheme === 'light' ? { ...presetTheme?.light } : { ...presetTheme?.dark }) as {
        [key: string]: string
    }

    for (const [key, value] of Object.entries(vars)) {
        root.style.setProperty(`--${key}`, value)
    }
}

export const syncBorderRadius = (borderRadius: string) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return
    root.style.setProperty('--radius', borderRadius)
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
