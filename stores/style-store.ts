"use client"

import type { Key } from "react-aria-components"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Style } from "@/types/themes"
import { STYLE_STORAGE_KEY } from "./keys"

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
      setStyle: (style) => set({ style }),
      reset: () => set({ style: DEFAULT_STYLE })
    }),
    {
      name: STYLE_STORAGE_KEY
    }
  )
)

export const useStyle = () => {
  const style = useStyleStore((s) => s.style)
  const updateStyle = useStyleStore((s) => s.setStyle)

  const setStyle = (key: Key | null) => {
    if (typeof document === "undefined") return
    document.documentElement.setAttribute("data-style", key as Style)
    updateStyle(key as Style)
  }

  const reset = useStyleStore((s) => s.reset)

  return { style, setStyle, reset }
}
