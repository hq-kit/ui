"use client"

import type { Key } from "react-aria-components"
import { useCallback, useMemo } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { defaultThemeState } from "@/config/theme"
import { type Preset, presets, type ThemeStyleProps, type ThemeStyles } from "@/lib/themes/presets"

type SelectThemePresetProps = {
  presets: Record<string, ThemeStyles>
  currentPreset: string | null
  onPresetChange: (value: Key | null) => void
}

const getThemeColor = (themeName: Preset, color: keyof ThemeStyleProps) => {
  const theme = themeName === "default" ? defaultThemeState : presets[themeName]
  return theme?.light?.[color] || theme?.dark?.[color] || "#000000"
}

const getThemeFont = (themeName: Preset) => {
  const theme = themeName === "default" ? defaultThemeState : presets[themeName]
  return theme.light["font-sans"]
}

const SelectThemePreset = ({ presets, currentPreset, onPresetChange }: SelectThemePresetProps) => {
  const presetNames = useMemo(() => {
    const allPresets = Object.keys(presets)

    return ["default", ...allPresets]
  }, [presets])

  const value = presetNames?.find((name) => name === currentPreset)

  const randomize = useCallback(() => {
    const random = Math.floor(Math.random() * presetNames.length)

    onPresetChange(presetNames[random])
  }, [onPresetChange, presetNames])

  return (
    <div className="flex flex-col gap-4">
      <Button className="cursor-pointer" onPress={randomize} variant="default">
        <IconPlaceholder
          className="size-4"
          hugeicons="ShuffleIcon"
          lucide="ShuffleIcon"
          phosphor="ShuffleIcon"
          remixicon="RiShuffleLine"
          tabler="IconArrowsShuffle"
        />
        Random
      </Button>
      <Select aria-label="preset" onChange={onPresetChange} value={value}>
        <Select.Trigger>
          <Select.Value className="rounded-[inherit]" />
        </Select.Trigger>
        <Select.Content
          isSearchable
          items={presetNames.map((preset) => ({
            title: preset
          }))}
        >
          {(item) => (
            <Select.Item className="flex items-center gap-3" id={item.title} textValue={item.title}>
              <div className="relative grid aspect-square size-6 grid-cols-2 grid-rows-2 gap-0 overflow-hidden rounded-[inherit] border p-0">
                <div style={{ backgroundColor: getThemeColor(item.title, "primary") }} />
                <div style={{ backgroundColor: getThemeColor(item.title, "destructive") }} />
                <div style={{ backgroundColor: getThemeColor(item.title, "secondary") }} />
                <div style={{ backgroundColor: getThemeColor(item.title, "accent") }} />
              </div>
              <span style={{ fontFamily: getThemeFont(item.title) }}>
                {item.title.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
              </span>
            </Select.Item>
          )}
        </Select.Content>
      </Select>
    </div>
  )
}

export default SelectThemePreset
