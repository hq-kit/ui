import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { defaultThemeState } from '@/config/theme'
import { getPresetThemeStyles, type Preset, type ThemeState, type ThemeStyleProps } from '@/lib/themes/presets'

type State = {
  theme: ThemeState
}

export const initialState: State = {
  theme: { preset: 'default', styles: defaultThemeState }
}

type Actions = {
  setPresetTheme: (preset: Preset, mode: 'light' | 'dark') => void
  setFontSansFamily: (font: string) => void
  setFontMonoFamily: (font: string) => void
  setBorderRadius: (radius: string) => void
  setColor: (variable: keyof ThemeStyleProps, mode: 'light' | 'dark', value: string) => void
  reset: () => void
}

const isBrowser = typeof window !== 'undefined'

let cachedRoot: HTMLElement | null = null
const getRoot = (): HTMLElement | null => {
  if (!isBrowser) return null
  if (!cachedRoot) {
    cachedRoot = document.documentElement
  }
  return cachedRoot
}

export const applyThemeToDOM = (vars: Partial<ThemeStyleProps>) => {
  const root = document.documentElement

  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(`--${key}`, value)
  }
}

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setPresetTheme: (preset: Preset, mode: 'light' | 'dark') => {
          set({ theme: { preset, styles: getPresetThemeStyles(preset) } })
          if (isBrowser) {
            const root = getRoot()
            if (!root) return
            const presetTheme = getPresetThemeStyles(preset)
            if (!presetTheme) return

            const vars = presetTheme[mode] as {
              [key: string]: string
            }

            applyThemeToDOM(vars)
          }
        },
        setFontSansFamily: (font) => {
          set((state) => ({
            theme: {
              preset: 'custom',
              styles: {
                ...state.theme.styles,
                light: { ...state.theme.styles.light, 'font-sans': font }
              }
            }
          }))
          if (isBrowser) {
            const root = getRoot()
            if (root) {
              root.style.setProperty('--font-sans', font)
            }
          }
        },
        setFontMonoFamily: (font) => {
          set((state) => ({
            theme: {
              preset: 'custom',
              styles: {
                ...state.theme.styles,
                light: { ...state.theme.styles.light, 'font-mono': font }
              }
            }
          }))
          if (isBrowser) {
            const root = getRoot()
            if (root) {
              root.style.setProperty('--font-mono', font)
            }
          }
        },
        setBorderRadius: (radius) => {
          set((state) => ({
            theme: {
              preset: 'custom',
              styles: {
                ...state.theme.styles,
                light: { ...state.theme.styles.light, radius: radius }
              }
            }
          }))
          if (isBrowser) {
            const root = getRoot()
            if (root) {
              root.style.setProperty('--radius', radius)
            }
          }
        },
        setColor: (variable, mode, value) => {
          set((state) => ({
            theme: {
              preset: 'custom',
              styles: {
                ...state.theme.styles,
                [mode]: { ...state.theme.styles[mode], [variable]: value }
              }
            }
          }))
          if (isBrowser) {
            const root = getRoot()
            if (root) {
              root.style.setProperty(`--${variable}`, value)
            }
          }
        },
        reset: () => {
          set(initialState)
        }
      }),
      {
        name: 'hq-theme',
        onRehydrateStorage: () => (state) => {
          if (state?.theme) {
            applyThemeToDOM(state.theme.styles)
          }
        }
      }
    )
  )
)

export const useThemeGenerator = () => {
  return {
    currentTheme: useThemeStore((state) => state.theme),
    updatePresetTheme: useThemeStore((state) => state.setPresetTheme),
    updateFontSansFamily: useThemeStore((state) => state.setFontSansFamily),
    updateFontMonoFamily: useThemeStore((state) => state.setFontMonoFamily),
    updateBorderRadius: useThemeStore((state) => state.setBorderRadius),
    updateColor: useThemeStore((state) => state.setColor),
    reset: useThemeStore((state) => state.reset)
  }
}
