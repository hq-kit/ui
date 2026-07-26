"use client"

import { PRESET_STYLES } from "shadcn/preset"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Style = (typeof PRESET_STYLES)[number]

export const DEFAULT_STYLE: Style = "nova"

type StyleStore = {
  style: Style
  setStyle: (style: Style) => void
  reset: () => void
}

export const useStyleStore = create<StyleStore>()(
  persist(
    (set) => ({
      style: DEFAULT_STYLE,

      setStyle: (style) => {
        set({ style })
      },

      reset: () => {
        set({ style: DEFAULT_STYLE })
      }
    }),
    {
      name: "style",
      version: 1
    }
  )
)

export const useStyle = () => {
  const style = useStyleStore((state) => state.style)
  const updateStyle = useStyleStore((state) => state.setStyle)
  const reset = useStyleStore((state) => state.reset)

  return { style, updateStyle, reset }
}

export function applyStyle(style: Style) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  root.classList.remove(...PRESET_STYLES.map((s) => `style-${s}`))
  root.classList.add(`style-${style}`)
}
