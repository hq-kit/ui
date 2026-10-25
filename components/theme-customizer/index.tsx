"use client"

import { IconColorSwatch } from "@tabler/icons-react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"

const ThemeControlPanel = dynamic(() => import("@/components/theme-customizer/theme-control-panel"), {
  loading: () => (
    <div className="space-y-4">
      <Skeleton className="bg-border h-8 w-full" />
      <div className="cn-radio-group grid-cols-2 gap-2">
        <span className="cn-label">Icon Library</span>
        <span className="cn-label">Style</span>
        <Skeleton className="bg-border h-8 w-full" />
        <Skeleton className="bg-border h-8 w-full" />
      </div>
      <div className="bg-border h-px w-full" />
      <div className="cn-radio-group grid-cols-2 gap-2">
        <span className="cn-label">Font Sans</span>
        <span className="cn-label">Font Mono</span>
        <Skeleton className="bg-border h-8 w-full" />
        <Skeleton className="bg-border h-8 w-full" />
      </div>
      <Skeleton className="bg-border h-8 w-full" />
      <Skeleton className="bg-border h-8 w-full" />
      <Skeleton className="bg-border h-8 w-full" />
    </div>
  ),
  ssr: false
})

export default function ThemeCustomizer() {
  return (
    <Sheet>
      <Button
        className="fixed top-16 right-0 z-50 rounded-r-none rtl:left-0"
        name="Theme Customizer Toggle"
        size="icon"
      >
        <IconColorSwatch />
      </Button>
      <Sheet.Content overlayClassName="bg-transparent backdrop-blur-none!" position={"right"}>
        <Sheet.Header>
          <Sheet.Title>Theme Customizer</Sheet.Title>
          <Sheet.Description>Pick a style and color for your components.</Sheet.Description>
        </Sheet.Header>
        <ThemeControlPanel />
      </Sheet.Content>
    </Sheet>
  )
}
