"use client"

import { type PropsWithChildren, useEffect, useState } from "react"

export function HideInIframe({ children }: PropsWithChildren) {
  const [isInIframe, setIsInIframe] = useState(false)

  useEffect(() => {
    setIsInIframe(window.self !== window.top)
  }, [])

  if (isInIframe) return null

  return <>{children}</>
}
