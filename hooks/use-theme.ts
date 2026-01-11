import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { getPreset, type Preset } from '@/lib/themes'

type State = {
  presetTheme: Preset
  borderRadius: string
}

type Actions = {
  setPresetTheme: (preset: Preset) => void
  reset: () => void
}

const initialState: State = {
  presetTheme: 'default',
  borderRadius: '0.5rem'
}

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setPresetTheme: (presetTheme) => set(() => ({ presetTheme })),
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
  const updatePresetTheme = useThemeStore((state) => state.setPresetTheme)

  const reset = useThemeStore((state) => state.reset)

  return {
    currentPresetTheme,
    updatePresetTheme,
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
