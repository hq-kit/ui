import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { getPresetThemeStyles, type Preset, type ThemeState, type ThemeStyleProps } from '@/lib/themes/presets'

export type ThemeStore = ThemeState & {
  setPreset: (preset: Preset) => void
  setVar: (key: keyof ThemeStyleProps, value: string, mode: 'light' | 'dark') => void
  reset: () => void
}

const initialState: ThemeState = {
  preset: 'default',
  styles: getPresetThemeStyles('default')
}

export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setPreset: (preset) => {
          const styles = getPresetThemeStyles(preset)
          set({
            preset,
            styles
          })
        },
        setVar: (key, value, mode) => {
          set((state) => ({
            ...state,
            preset: 'custom',
            styles: {
              ...state.styles,
              [mode]: {
                ...state.styles[mode],
                [key]: value
              }
            }
          }))
        },
        reset: () => {
          set(initialState)
        }
      }),
      {
        name: 'hq-ui-theme',
        version: 1
      }
    )
  )
)

export const useThemeGenerator = () => {
  const currentPreset = useThemeStore((state) => state.preset)
  const currentStyles = useThemeStore((state) => state.styles)
  const updatePreset = useThemeStore((state) => state.setPreset)
  const updateVar = useThemeStore((state) => state.setVar)
  const reset = useThemeStore((state) => state.reset)
  return {
    currentPreset,
    currentStyles,
    updatePreset,
    updateVar,
    reset
  }
}

const getRoot = () => {
  if (typeof document === 'undefined') return null
  return document.documentElement
}

const getIframes = () => {
  if (typeof document === 'undefined') return []
  return Array.from(document.querySelectorAll('iframe')) as HTMLIFrameElement[]
}

export const applyStyleToDom = (styles: Partial<ThemeStyleProps>) => {
  const root = getRoot()
  const iframes = getIframes()

  Object.entries(styles).forEach(([key, value]) => {
    root!.style.setProperty(`--${key}`, value)
    iframes.forEach((iframe) => {
      !!iframe.contentWindow?.document.documentElement.style &&
        iframe.contentWindow?.document.documentElement.style.setProperty(`--${key}`, value)
    })
  })
}

export const syncVars = (vars: Partial<ThemeStyleProps>) => {
  applyStyleToDom(vars)
}
