"use client"

import type { ColorSpace, ThemeStyleProps } from "@/types/themes"
import dynamic from "next/dynamic"
import { Suspense, useCallback, useRef, useState } from "react"
import { type Color, getColorChannels } from "react-aria-components"
import { Accordion } from "@/components/ui/accordion"
import { formatColor, getTextColor, parseColor } from "@/lib/themes/color-formatter"
import { useTheme } from "@/stores/theme-store"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ColorField, ColorPicker, ColorSlider, ColorSliderOutput, ColorSwatch as Swatch } from "../ui/colors"
import { Label } from "../ui/field"
import { Input } from "../ui/input"
import { Popover } from "../ui/popover"
import { Skeleton } from "../ui/skeleton"
import { SliderGroup } from "../ui/slider"
import { Tabs } from "../ui/tabs"
import { OklchColorPicker } from "./oklch-picker"

type ColorSwatchProps = {
  label: string
  value: string
  setValue: (value: string) => void
}

const TailwindColorSwatch = dynamic(() => import("@/components/theme-customizer/tailwind-colors"), {
  ssr: false,
  loading: () => <Skeleton className="min-h-88 w-full rounded-none bg-border" />
})

export const ColorSwatch = ({ label, value, setValue }: ColorSwatchProps) => {
  const [color, setColor] = useState<Color>(parseColor(value))
  const [space, setSpace] = useState<ColorSpace>("rgb")

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const updateColor = (v: Color) => {
    setColor(v.toFormat("rgba"))
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      setValue(formatColor(v.toString("css"), "oklch"))
    }, 1000)
  }

  const updateColorOklch = (v: string, delay: number = 1000) => {
    setColor(parseColor(v))
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      setValue(v)
    }, delay)
  }

  return (
    <ColorPicker onChange={updateColor} value={color}>
      <Popover>
        <Button className="flex w-full items-center justify-start gap-2 p-2" variant="ghost">
          <Swatch />
          {label.replace("Foreground", "FG")}
        </Button>
        <Popover.Content className="scrollbar-fade overflow-y-auto overflow-x-hidden">
          <Tabs>
            <Tabs.List className="w-full">
              <Tabs.Trigger id="custom">Custom</Tabs.Trigger>
              <Tabs.Trigger id="tailwind">Tailwind</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="min-h-88 space-y-4" id="custom">
              <Tabs aria-label="Color format" onSelectionChange={(v) => setSpace(v as ColorSpace)} selectedKey={space}>
                <Tabs.List
                  className="w-full justify-evenly"
                  items={["hex", "hsl", "rgb", "oklch"].map((c) => ({
                    id: c,
                    label: c.toUpperCase()
                  }))}
                  variant={"line"}
                >
                  {(space) => <Tabs.Trigger>{space.label}</Tabs.Trigger>}
                </Tabs.List>
              </Tabs>
              {space === "oklch" ? (
                <OklchColorPicker defaultValue={value} onChange={updateColorOklch} />
              ) : (
                <>
                  <ColorSlider channel={space === "hsl" ? "hue" : "red"} colorSpace={space as "hsl" | "rgb"}>
                    <SliderGroup>
                      <Label>{space === "hsl" ? "Hue" : "Red"}</Label>
                      <ColorSliderOutput />
                    </SliderGroup>
                  </ColorSlider>
                  <ColorSlider channel={space === "hsl" ? "saturation" : "green"} colorSpace={space as "hsl" | "rgb"}>
                    <SliderGroup>
                      <Label>{space === "hsl" ? "Saturation" : "Green"}</Label>
                      <ColorSliderOutput />
                    </SliderGroup>
                  </ColorSlider>
                  <ColorSlider channel={space === "hsl" ? "lightness" : "blue"} colorSpace={space as "hsl" | "rgb"}>
                    <SliderGroup>
                      <Label>{space === "hsl" ? "Lightness" : "Blue"}</Label>
                      <ColorSliderOutput />
                    </SliderGroup>
                  </ColorSlider>
                  <ColorSlider channel={"alpha"}>
                    <SliderGroup>
                      <Label>Alpha</Label>
                      <ColorSliderOutput />
                    </SliderGroup>
                  </ColorSlider>
                  <div className="flex gap-2">
                    {space === "hex" ? (
                      <ColorField aria-label={"Hex"}>
                        <Label>HEX</Label>
                        <Input />
                      </ColorField>
                    ) : getColorChannels(space).length > 0 ? (
                      getColorChannels(space).map((channel) => (
                        <ColorField aria-label={channel} channel={channel} colorSpace={space} key={channel}>
                          <Label>{channel.charAt(0).toUpperCase()}</Label>
                          <Input />
                        </ColorField>
                      ))
                    ) : null}
                    <ColorField channel="alpha">
                      <Label>ALPHA</Label>
                      <Input />
                    </ColorField>
                  </div>

                  <Badge
                    className="w-full justify-center font-mono text-xs ring-1 ring-ring"
                    style={{
                      backgroundColor: color.toString("css"),
                      color: getTextColor(color.toString("css"))
                    }}
                  >
                    {color.toString(color.getChannelValue("alpha") < 1 ? `${space}a` : space)}
                  </Badge>
                </>
              )}
            </Tabs.Content>
            <Tabs.Content className="min-h-88 space-y-3.5" id="tailwind">
              <Suspense>
                <TailwindColorSwatch onChange={(v) => updateColorOklch(v.replaceAll(",", " "), 100)} value={value} />
              </Suspense>
              <Badge
                className="w-full justify-center font-mono text-xs ring-1 ring-ring"
                style={{
                  backgroundColor: value ?? color.toString("css"),
                  color: getTextColor(value ?? color.toString("css"))
                }}
              >
                {value}
              </Badge>
            </Tabs.Content>
          </Tabs>
        </Popover.Content>
      </Popover>
    </ColorPicker>
  )
}

const Customizer = () => {
  const { theme, setVar, preset } = useTheme()
  const currentPreset = preset[theme]

  const updateColor = useCallback(
    (key: keyof ThemeStyleProps, value: string) => {
      if (!preset) return
      setVar({ key, value, theme })
    },
    [preset, setVar, theme]
  )

  return (
    <div className="space-y-6">
      <Accordion allowsMultipleExpanded className="w-full">
        {/* Base Colors */}
        <Accordion.Item id="base">
          <Accordion.Trigger>Base Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Background"
              setValue={(value) => updateColor("background", value)}
              value={currentPreset?.background || ""}
            />
            <ColorSwatch
              label="Foreground"
              setValue={(value) => updateColor("foreground", value)}
              value={currentPreset?.foreground || ""}
            />
            <ColorSwatch
              label="Card"
              setValue={(value) => updateColor("card", value)}
              value={currentPreset?.card || ""}
            />
            <ColorSwatch
              label="Card Foreground"
              setValue={(value) => updateColor("card-foreground", value)}
              value={currentPreset?.["card-foreground"] || ""}
            />
            <ColorSwatch
              label="Popover"
              setValue={(value) => updateColor("popover", value)}
              value={currentPreset?.popover || ""}
            />
            <ColorSwatch
              label="Popover Foreground"
              setValue={(value) => updateColor("popover-foreground", value)}
              value={currentPreset?.["popover-foreground"] || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Brand Colors */}
        <Accordion.Item id="brand">
          <Accordion.Trigger>Brand Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Primary"
              setValue={(value) => updateColor("primary", value)}
              value={currentPreset?.primary || ""}
            />
            <ColorSwatch
              label="Primary Foreground"
              setValue={(value) => updateColor("primary-foreground", value)}
              value={currentPreset?.["primary-foreground"] || ""}
            />
            <ColorSwatch
              label="Secondary"
              setValue={(value) => updateColor("secondary", value)}
              value={currentPreset?.secondary || ""}
            />
            <ColorSwatch
              label="Secondary Foreground"
              setValue={(value) => updateColor("secondary-foreground", value)}
              value={currentPreset?.["secondary-foreground"] || ""}
            />
            <ColorSwatch
              label="Destructive"
              setValue={(value) => updateColor("destructive", value)}
              value={currentPreset?.destructive || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Other Colors */}
        <Accordion.Item id="other">
          <Accordion.Trigger>Other Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Muted"
              setValue={(value) => updateColor("muted", value)}
              value={currentPreset?.muted || ""}
            />
            <ColorSwatch
              label="Muted Foreground"
              setValue={(value) => updateColor("muted-foreground", value)}
              value={currentPreset?.["muted-foreground"] || ""}
            />
            <ColorSwatch
              label="Accent"
              setValue={(value) => updateColor("accent", value)}
              value={currentPreset?.accent || ""}
            />
            <ColorSwatch
              label="Accent Foreground"
              setValue={(value) => updateColor("accent-foreground", value)}
              value={currentPreset?.["accent-foreground"] || ""}
            />
            <ColorSwatch
              label="Border"
              setValue={(value) => updateColor("border", value)}
              value={currentPreset?.border || ""}
            />
            <ColorSwatch
              label="Input"
              setValue={(value) => updateColor("input", value)}
              value={currentPreset?.input || ""}
            />
            <ColorSwatch
              label="Ring"
              setValue={(value) => updateColor("ring", value)}
              value={currentPreset?.ring || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Sidebar Colors */}
        <Accordion.Item id="sidebar">
          <Accordion.Trigger>Sidebar Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Sidebar"
              setValue={(value) => updateColor("sidebar", value)}
              value={currentPreset?.sidebar || ""}
            />
            <ColorSwatch
              label="Sidebar Foreground"
              setValue={(value) => updateColor("sidebar-foreground", value)}
              value={currentPreset?.["sidebar-foreground"] || ""}
            />
            <ColorSwatch
              label="Sidebar Primary"
              setValue={(value) => updateColor("sidebar-primary", value)}
              value={currentPreset?.["sidebar-primary"] || ""}
            />
            <ColorSwatch
              label="Sidebar Primary Foreground"
              setValue={(value) => updateColor("sidebar-primary-foreground", value)}
              value={currentPreset?.["sidebar-primary-foreground"] || ""}
            />
            <ColorSwatch
              label="Sidebar Accent"
              setValue={(value) => updateColor("sidebar-accent", value)}
              value={currentPreset?.["sidebar-accent"] || ""}
            />
            <ColorSwatch
              label="Sidebar Accent Foreground"
              setValue={(value) => updateColor("sidebar-accent-foreground", value)}
              value={currentPreset?.["sidebar-accent-foreground"] || ""}
            />
            <ColorSwatch
              label="Sidebar Border"
              setValue={(value) => updateColor("sidebar-border", value)}
              value={currentPreset?.["sidebar-border"] || ""}
            />
            <ColorSwatch
              label="Sidebar Ring"
              setValue={(value) => updateColor("sidebar-ring", value)}
              value={currentPreset?.["sidebar-ring"] || ""}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* Chart Colors */}
        <Accordion.Item id="chart">
          <Accordion.Trigger>Chart Colors</Accordion.Trigger>
          <Accordion.Content className="grid grid-cols-2">
            <ColorSwatch
              label="Chart 1"
              setValue={(value) => updateColor("chart-1", value)}
              value={currentPreset?.["chart-1"] || ""}
            />
            <ColorSwatch
              label="Chart 2"
              setValue={(value) => updateColor("chart-2", value)}
              value={currentPreset?.["chart-2"] || ""}
            />
            <ColorSwatch
              label="Chart 3"
              setValue={(value) => updateColor("chart-3", value)}
              value={currentPreset?.["chart-3"] || ""}
            />
            <ColorSwatch
              label="Chart 4"
              setValue={(value) => updateColor("chart-4", value)}
              value={currentPreset?.["chart-4"] || ""}
            />
            <ColorSwatch
              label="Chart 5"
              setValue={(value) => updateColor("chart-5", value)}
              value={currentPreset?.["chart-5"] || ""}
            />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Customizer
