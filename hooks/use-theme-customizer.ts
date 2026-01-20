import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getPresetThemeStyles, type Preset, type ThemeState, type ThemeStyleProps } from '@/lib/themes/presets'

export type ThemeStore = ThemeState & {
  setPreset: (preset: Preset, mode: 'light' | 'dark') => void
  setVar: (key: keyof ThemeStyleProps, value: string, mode: 'light' | 'dark') => void
  resetMode: (mode: 'light' | 'dark') => void
  apply: (mode: 'light' | 'dark') => void
}

const DEFAULT_PRESET: Preset = 'default'

export const applyThemeToDOM = (vars: Partial<ThemeStyleProps>) => {
  const root = document.documentElement

  for (const [key, value] of Object.entries(vars)) {
    if (value != null) {
      root.style.setProperty(`--${key}`, value)
    }
  }
}

const getBasePreset = (preset: Preset, mode: 'light' | 'dark') => {
  const base = getPresetThemeStyles(preset)[mode]
  if (mode === 'dark') {
    base['font-sans'] = getPresetThemeStyles(preset).light['font-sans']
    base['font-mono'] = getPresetThemeStyles(preset).light['font-mono']
    base.radius = getPresetThemeStyles(preset).light.radius
  }
  return base
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      preset: DEFAULT_PRESET,
      styles: {
        light: {},
        dark: {}
      },

      apply: (mode) => {
        const { preset, styles } = get()
        const base = getBasePreset(preset, mode)
        const override = styles[mode]

        const finalVars = {
          ...base,
          ...override
        }

        applyThemeToDOM(finalVars)
      },

      setPreset: (preset, mode) => {
        set({ preset })

        const base = getBasePreset(preset, mode)
        const override = get().styles[mode]

        applyThemeToDOM({
          ...base,
          ...override
        })
      },

      setVar: (key, value, mode) => {
        const newStyles = {
          ...get().styles,
          [mode]: {
            ...get().styles[mode],
            [key]: value
          }
        }
        const base = getBasePreset(get().preset, mode)

        set({ preset: 'custom', styles: newStyles })

        applyThemeToDOM({
          ...base,
          ...newStyles[mode]
        })
      },

      resetMode: (mode) => {
        const newStyles = {
          ...get().styles,
          [mode]: {}
        }

        set({ styles: newStyles })

        const base = getPresetThemeStyles('default')
        applyThemeToDOM(base[mode])
      }
    }),
    {
      name: 'hq-ui-theme',

      // persist hanya preset + overrides
      partialize: (state) => ({
        preset: state.preset,
        styles: state.styles
      }),

      // jangan apply di sini — tunggu ThemeSync biar tau mode
      onRehydrateStorage: () => () => {}
    }
  )
)
