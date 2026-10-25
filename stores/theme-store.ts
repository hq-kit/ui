import type { Key } from "react-aria-components"
import type { Preset, Theme, ThemeStyleProps, ThemeVar } from "@/types/themes"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { applyStyle } from "@/lib/dom"
import { type ThemeName, themes } from "@/lib/themes/generated"
import { THEME_STORAGE_KEY } from "./keys"

type ThemeStore = {
  name: string
  preset: Preset
  setName: (name: string) => void
  setPreset: (preset: Preset) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  setVar: (attr: ThemeVar) => void
  reset: () => void
}

const DEFAULT_THEME: {
  name: string
  preset: Preset
  theme: Theme
} = {
  name: "default",
  preset: themes.default,
  theme: "light"
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      ...DEFAULT_THEME,
      setName: (name: string) => set({ name }),
      setPreset: (preset: Preset) => set({ preset }),
      setTheme: (theme: Theme) => set({ theme }),
      setVar: (attr: ThemeVar) =>
        set((state) => ({
          name: "custom",
          preset: {
            ...state.preset,
            [attr.theme]: {
              ...state.preset[attr.theme],
              [attr.key]: attr.value
            }
          }
        })),
      reset: () => {
        set(DEFAULT_THEME)
      }
    }),
    {
      name: THEME_STORAGE_KEY
    }
  )
)

export const useTheme = () => {
  const name = useThemeStore((s) => s.name)
  const preset = useThemeStore((s) => s.preset)
  const theme = useThemeStore((s) => s.theme)
  const setName = useThemeStore((s) => s.setName)
  const updatePreset = useThemeStore((s) => s.setPreset)
  const updateTheme = useThemeStore((s) => s.setTheme)
  const updateVar = useThemeStore((s) => s.setVar)
  const setDefault = useThemeStore((s) => s.reset)

  const setPreset = (key: Key | null) => {
    const themePresets = themes[key as ThemeName]
    setName(key as string)
    updatePreset(themePresets)
    syncTheme(themePresets[theme])
  }

  const setTheme = (theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    updateTheme(theme)
    syncTheme(preset[theme])
  }

  const setVar = (attr: ThemeVar, apply: boolean = true) => {
    apply && applyStyle(attr.key, attr.value)
    updateVar(attr)
  }

  const reset = () => {
    syncTheme(themes.default[theme])
    setDefault()
  }

  return {
    name,
    preset,
    setPreset,
    setName,
    theme,
    setTheme,
    setVar,
    reset
  }
}

const syncTheme = (themes: Partial<ThemeStyleProps>) => {
  Object.entries(themes).forEach(([key, value]) => {
    applyStyle(key, value)
  })
}
