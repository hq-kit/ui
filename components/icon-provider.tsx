"use client"

import { createContext, type ReactNode, useContext, useEffect, useState } from "react"
import { type IconLibraryName, iconLibraries } from "shadcn/icons"

type IconContextValue = {
  iconLibrary: IconLibraryName
  setIconLibrary: (library: IconLibraryName) => void
}

const STORAGE_KEY = "icon-library"
export const DEFAULT_LIBRARY: IconLibraryName = "tabler"

const IconContext = createContext<IconContextValue | null>(null)

function isValidLibrary(value: any): value is IconLibraryName {
  return Object.values(iconLibraries)
    .map((l) => l.name)
    .includes(value)
}

export function IconProvider({ children }: { children: ReactNode }) {
  const [iconLibrary, setIconLibraryState] = useState<IconLibraryName>(DEFAULT_LIBRARY)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (isValidLibrary(saved)) {
      setIconLibraryState(saved)
    }
  }, [])

  const setIconLibrary = (library: IconLibraryName) => {
    localStorage.setItem(STORAGE_KEY, library)
    setIconLibraryState(library)
  }

  return (
    <IconContext.Provider
      value={{
        iconLibrary,
        setIconLibrary
      }}
    >
      {children}
    </IconContext.Provider>
  )
}

export function useIcon() {
  const context = useContext(IconContext)

  if (!context) {
    throw new Error("useIcon must be used within IconProvider")
  }

  return context
}
