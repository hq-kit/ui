"use client"

import type { Key } from "react-aria-components"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { applyStyle } from "@/lib/dom"
import { FONT_MONO, FONT_SANS } from "@/lib/fonts"
import type { FontMono, FontSans } from "@/types/themes"
import { FONT_STORAGE_KEY } from "./keys"

type FontStore = {
  fontSans: FontSans
  fontMono: FontMono
  setFontSans: (fontSans: FontSans) => void
  setFontMono: (fontMono: FontMono) => void
  reset: () => void
}

export const DEFAULT_FONT_SANS: FontSans = FONT_SANS[0]
export const DEFAULT_FONT_MONO: FontSans = FONT_MONO[0]

export const useFontStore = create<FontStore>()(
  persist(
    (set) => ({
      fontSans: DEFAULT_FONT_SANS,
      fontMono: DEFAULT_FONT_MONO,
      setFontSans: (fontSans) => set({ fontSans }),
      setFontMono: (fontMono) => set({ fontMono }),
      reset: () => set({ fontMono: DEFAULT_FONT_MONO, fontSans: DEFAULT_FONT_SANS })
    }),
    {
      name: FONT_STORAGE_KEY
    }
  )
)

export const useFont = () => {
  const fontSans = useFontStore((s) => s.fontSans)
  const updateFontSans = useFontStore((s) => s.setFontSans)

  const setFontSans = (key: Key | null) => {
    applyStyle("font-sans", key as FontSans)
    updateFontSans(key as FontSans)
  }

  const fontMono = useFontStore((s) => s.fontMono)
  const updateFontMono = useFontStore((s) => s.setFontMono)

  const setFontMono = (key: Key | null) => {
    applyStyle("font-mono", key as FontMono)
    updateFontMono(key as FontMono)
  }

  const reset = useFontStore((s) => s.reset)
  return { fontSans, setFontSans, fontMono, setFontMono, reset }
}
