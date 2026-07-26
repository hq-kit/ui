"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import ThemeControlPanel from "@/components/theme-customizer/theme-control-panel"
import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"

export function ThemeCustomizer() {
  return (
    <Sheet>
      <Button
        className="fixed top-16 right-0 z-50 rounded-r-none rtl:left-0"
        name="Theme Customizer Toggle"
        size="icon"
      >
        <IconPlaceholder
          hugeicons="SwatchIcon"
          lucide="SwatchBookIcon"
          phosphor="SwatchesIcon"
          remixicon="RiPantoneLine"
          tabler="IconColorSwatch"
        />
      </Button>
      <Sheet.Content overlayClassName="bg-transparent backdrop-blur-none!">
        <Sheet.Header>
          <Sheet.Title>Theme Customizer</Sheet.Title>
          <Sheet.Description>Pick a style and color for your components.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <ThemeControlPanel />
        </Sheet.Body>
      </Sheet.Content>
    </Sheet>
  )
}
