"use client"

import type { ThemeStyleProps } from "@/types/themes"
import { IconArrowsShuffle } from "@tabler/icons-react"
import { useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import { titleCase } from "@/lib/modifiers"
import { type ThemeName, themes } from "@/lib/themes/generated"
import { useTheme } from "@/stores/theme-store"

const getThemeColor = (themeName: string, color: keyof ThemeStyleProps) => {
  const theme = themeName === "default" ? themes.default : themes[themeName as ThemeName]
  return theme?.light?.[color] || theme?.dark?.[color] || "#000000"
}

const SelectThemePreset = () => {
  const { name, setPreset } = useTheme()

  const presetNames = useMemo(() => {
    return [
      "default",
      ...Object.keys(themes)
        .sort((a, b) => a.localeCompare(b))
        .filter((t) => t !== "default"),
      "custom"
    ]
  }, [])

  const randomize = useCallback(() => {
    const random = Math.floor(Math.random() * presetNames.length)
    setPreset(presetNames[random])
  }, [presetNames, setPreset])

  return (
    <div className="flex flex-col gap-4">
      <Button className="cursor-pointer" onPress={randomize}>
        <IconArrowsShuffle />
        Random
      </Button>
      <Select aria-label="preset" name="preset" onChange={setPreset} value={name}>
        <Select.Trigger>
          <Select.Value className="rounded-[inherit]" />
        </Select.Trigger>
        <Select.Content
          isSearchable
          items={presetNames.map((preset) => ({
            id: preset,
            title: titleCase(preset)
          }))}
        >
          {(item) => (
            <Select.Item className="flex items-center gap-3" textValue={item.title}>
              <div className="relative grid aspect-square size-5 grid-cols-2 grid-rows-2 gap-0 overflow-hidden rounded-[inherit] border p-0">
                <div
                  style={{
                    backgroundColor: getThemeColor(item.id, "primary")
                  }}
                />
                <div
                  style={{
                    backgroundColor: getThemeColor(item.id, "secondary")
                  }}
                />
                <div
                  style={{
                    backgroundColor: getThemeColor(item.id, "background")
                  }}
                />
                <div
                  style={{
                    backgroundColor: getThemeColor(item.id, "foreground")
                  }}
                />
              </div>
              {item.title.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
            </Select.Item>
          )}
        </Select.Content>
      </Select>
    </div>
  )
}

export default SelectThemePreset
