"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import ThemeControlPanel from "@/components/theme-customizer/theme-control-panel"
import { Button } from "@/components/ui/button"
import { Sheet, SheetBody, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

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
      <SheetContent overlayClassName="bg-transparent backdrop-blur-none!">
        <SheetHeader>
          <SheetTitle>Theme Customizer</SheetTitle>
          <SheetDescription>Pick a style and color for your components.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <ThemeControlPanel />
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}
