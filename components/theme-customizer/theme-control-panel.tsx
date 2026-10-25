"use client"

import { IconCopy, IconMoon, IconRotateClockwise, IconSun } from "@tabler/icons-react"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { SelectFontMono, SelectFontSans } from "@/components/theme-customizer/select-font"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { useTheme } from "@/stores/theme-store"
import { SheetBody, SheetFooter } from "../ui/sheet"
import { Skeleton } from "../ui/skeleton"
import { SelectRadius } from "./select-radius"
import SelectThemePreset from "./select-theme"
import { ThemeImport } from "./theme-import"

const Customizer = dynamic(() => import("@/components/theme-customizer/customizer"), {
  loading: () => (
    <div className="space-y-2">
      <Skeleton className="h-8 w-full bg-border" />
      <Skeleton className="h-8 w-full bg-border" />
      <Skeleton className="h-8 w-full bg-border" />
      <Skeleton className="h-8 w-full bg-border" />
      <Skeleton className="h-8 w-full bg-border" />
    </div>
  ),
  ssr: false
})

const ThemeSnippet = dynamic(() => import("@/components/theme-customizer/theme-snippet"), {
  loading: () => <Skeleton className="h-8 w-full bg-border" />,
  ssr: false
})

const ThemeControlPanel = () => {
  const { theme, setTheme, preset, name, reset } = useTheme()
  return (
    <>
      <SheetBody className="space-y-4">
        <ButtonGroup className="w-full">
          <Button
            className="w-1/2"
            onPress={() => setTheme("light")}
            variant={theme === "light" ? "primary" : "outline"}
          >
            <IconSun />
            Light
          </Button>
          <Button className="w-1/2" onPress={() => setTheme("dark")} variant={theme === "dark" ? "primary" : "outline"}>
            <IconMoon />
            Dark
          </Button>
        </ButtonGroup>

        <div className="grid grid-cols-2 gap-2">
          <SelectFontSans />
          <SelectFontMono />
        </div>

        <SelectThemePreset />

        <SelectRadius />

        <Suspense>
          <Customizer />
        </Suspense>

        {/* <ThemeImport /> */}
      </SheetBody>
      <SheetFooter>
        <ButtonGroup className="w-full *:[button]:w-1/3">
          <ThemeSnippet {...preset} name={name}>
            <Button variant="outline">
              <IconCopy />
              Copy
            </Button>
          </ThemeSnippet>
          <ThemeImport />
          <Button onPress={reset} variant="outline">
            <IconRotateClockwise />
            Reset
          </Button>
        </ButtonGroup>
      </SheetFooter>
    </>
  )
}

export default ThemeControlPanel
