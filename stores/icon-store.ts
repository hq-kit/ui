"use client"

import type { Key } from "react-aria-components"
import { PRESET_ICON_LIBRARIES } from "shadcn/preset"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Icon } from "@/types/themes"
import { ICON_STORAGE_KEY } from "./keys"

export const DEFAULT_ICON: Icon = "tabler"

type IconStore = {
  icon: Icon
  setIcon: (icon: Icon) => void
  reset: () => void
}

export const useIconStore = create<IconStore>()(
  persist(
    (set) => ({
      icon: DEFAULT_ICON,
      setIcon: (icon) => set({ icon }),
      reset: () => set({ icon: DEFAULT_ICON })
    }),
    {
      name: ICON_STORAGE_KEY
    }
  )
)

export const useIcon = () => {
  const icon = useIconStore((s) => s.icon)
  const updateIcon = useIconStore((s) => s.setIcon)

  const setIcon = (key: Key | null) => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    root.classList.remove(...PRESET_ICON_LIBRARIES.map((s) => `icon-${s}`))
    root.classList.add(`icon-${icon}`)
    updateIcon(key as Icon)
  }

  const reset = useIconStore((s) => s.reset)

  return { icon, setIcon, reset }
}
