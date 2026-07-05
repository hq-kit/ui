import type { PropsWithChildren } from "react"
import { HideInIframe } from "@/components/hide-in-iframe"
import { ThemeCustomizer } from "@/components/theme-customizer"

export default function BlockLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HideInIframe>
        <ThemeCustomizer />
      </HideInIframe>
      {children}
    </>
  )
}
