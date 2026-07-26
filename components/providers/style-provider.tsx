"use client"
import { type PropsWithChildren, useEffect } from "react"
import { applyStyle, useStyleStore } from "@/hooks/use-style"

export function StyleProvider({ children }: PropsWithChildren) {
  const style = useStyleStore((state) => state.style)
  useEffect(() => {
    applyStyle(style)
  }, [style])
  return children
}
