"use client"

import type { IconLibraryName } from "shadcn/icons"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { DEFAULT_LIBRARY, useIcon } from "@/components/icon-provider"
import { useTheme } from "@/components/providers"
import { DEFAULT_STYLE, type STYLE, useStyle } from "@/components/style-provider"
import SelectFont from "@/components/theme-customizer/select-font"
import SelectIcon from "@/components/theme-customizer/select-icon"
import SelectStyle from "@/components/theme-customizer/select-style"
import SelectThemePreset from "@/components/theme-customizer/select-theme-preset"
import ThemeColorPanel from "@/components/theme-customizer/theme-color-panel"
import { ThemeImport } from "@/components/theme-customizer/theme-import"
import ThemeVariablesDialog from "@/components/theme-customizer/theme-snippet"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Label } from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { Slider, SliderOutput } from "@/components/ui/slider"
import { defaultThemeState } from "@/config/theme"
import { useThemeGenerator } from "@/hooks/use-theme"
import { fontMonoFamilies } from "@/lib/fonts/mono"
import { fontSansFamilies } from "@/lib/fonts/sans"
import { presets } from "@/lib/themes/presets"

const ThemeControlPanel = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const { currentPreset, currentStyles, updatePreset, updateVar, reset } = useThemeGenerator()
  const { iconLibrary, setIconLibrary } = useIcon()
  const { style, setStyle } = useStyle()

  const resetTheme = () => {
    reset()
    setStyle(DEFAULT_STYLE)
    setIconLibrary(DEFAULT_LIBRARY)
  }
  return (
    <div className="space-y-4">
      <ButtonGroup className="w-full">
        <ThemeVariablesDialog
          activeTheme={currentPreset}
          darkTheme={currentStyles.dark}
          lightTheme={currentStyles.light}
          trigger={
            <Button className="w-1/2" variant="outline">
              <IconPlaceholder
                className="size-4"
                hugeicons="CopyIcon"
                lucide="CopyIcon"
                phosphor="CopyIcon"
                remixicon="RiFileCopyLine"
                tabler="IconCopy"
              />
              Copy
            </Button>
          }
        />
        <Button className="w-1/2" onPress={resetTheme} variant="outline">
          <IconPlaceholder
            className="size-4"
            hugeicons="RotateClockwiseIcon"
            lucide="RotateCcwIcon"
            phosphor="ArrowCounterClockwiseIcon"
            remixicon="RiArrowGoBackLine"
            tabler="IconRotateClockwise"
          />
          Reset
        </Button>
      </ButtonGroup>

      <ButtonGroup className="w-full">
        <Button
          className="w-1/2"
          onPress={() => setTheme("light")}
          variant={resolvedTheme === "light" ? "default" : "outline"}
        >
          <IconPlaceholder
            hugeicons="Sun02Icon"
            lucide="SunIcon"
            phosphor="SunIcon"
            remixicon="RiSunLine"
            tabler="IconSun"
          />
          Light
        </Button>
        <Button
          className="w-1/2"
          onPress={() => setTheme("dark")}
          variant={resolvedTheme === "dark" ? "default" : "outline"}
        >
          <IconPlaceholder
            hugeicons="Moon02Icon"
            lucide="MoonIcon"
            phosphor="MoonIcon"
            remixicon="RiMoonLine"
            tabler="IconMoon"
          />
          Dark
        </Button>
      </ButtonGroup>

      <div className="grid grid-cols-2 gap-2">
        <SelectIcon
          label={"Icon Library"}
          onChange={(key) => setIconLibrary(key as IconLibraryName)}
          value={iconLibrary}
        />
        <SelectStyle label={"Style"} onChange={(key) => setStyle(key as STYLE)} value={style} />
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-2">
        <SelectFont
          fonts={fontSansFamilies.sort((a, b) => a.label.localeCompare(b.label))}
          label="Font Sans"
          onChange={(key) => updateVar("font-sans", key as string, "light")}
          value={currentStyles.light["font-sans"]}
        />
        <SelectFont
          fonts={fontMonoFamilies.sort((a, b) => a.label.localeCompare(b.label))}
          label="Font Mono"
          onChange={(key) => updateVar("font-mono", key as string, "light")}
          value={currentStyles.light["font-mono"]}
        />
      </div>

      <ThemeImport />

      <SelectThemePreset
        currentPreset={currentPreset}
        onPresetChange={(v) => updatePreset(v as string)}
        presets={presets}
      />

      <Slider
        maxValue={2.5}
        minValue={0}
        onChange={(v) => updateVar("radius", `${v}rem`, "light")}
        step={0.025}
        value={parseFloat(
          (currentStyles.light.radius ? currentStyles.light.radius! : defaultThemeState.light.radius!).replace(
            "rem",
            ""
          )
        )}
      >
        <Label>Radius</Label>
        <SliderOutput children={({ state }) => <>{state.values} rem</>} />
      </Slider>
      <ThemeColorPanel />
    </div>
  )
}

export default ThemeControlPanel
