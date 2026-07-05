"use client"

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { PRESET_STYLES } from "shadcn/preset"

export type STYLE = (typeof PRESET_STYLES)[number]

export const DEFAULT_STYLE: STYLE = "nova"

export const STYLE_STORAGE_KEY = "style"

export function isValidStyle(value: unknown): value is STYLE {
  return typeof value === "string" && PRESET_STYLES.includes(value as STYLE)
}

type StyleContextValue = {
  style: STYLE
  setStyle: (style: STYLE) => void
}

const StyleContext = createContext<StyleContextValue | null>(null)

function applyStyle(style: STYLE) {
  const root = document.documentElement

  root.classList.remove(...PRESET_STYLES.map((s) => `style-${s}`))

  root.classList.add(`style-${style}`)
}

export function StyleProvider({ children }: { children: ReactNode }) {
  const [style, setStyleState] = useState<STYLE>(DEFAULT_STYLE)

  useEffect(() => {
    const stored = localStorage.getItem(STYLE_STORAGE_KEY)

    if (stored && isValidStyle(stored)) {
      setStyleState(stored)
      applyStyle(stored)
      return
    }

    applyStyle(DEFAULT_STYLE)
  }, [])

  const setStyle = useCallback((newStyle: STYLE) => {
    setStyleState(newStyle)

    localStorage.setItem(STYLE_STORAGE_KEY, newStyle)

    applyStyle(newStyle)
  }, [])

  const value = useMemo(
    () => ({
      style,
      setStyle
    }),
    [style, setStyle]
  )

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
}

export function useStyle() {
  const context = useContext(StyleContext)

  if (!context) {
    throw new Error("useStyle must be used within StyleProvider")
  }

  return context
}
