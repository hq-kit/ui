"use client"

import { Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"
import { FONT_MONO, FONT_SANS } from "@/lib/fonts"
import { useFont } from "@/stores/font-store"

export const SelectFontSans = () => {
  const { fontSans, setFontSans } = useFont()
  return (
    <Select name="font-sans" onChange={setFontSans} placeholder="Font Sans" value={fontSans}>
      <Label>Font Sans</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content
        isSearchable
        items={FONT_SANS.map((font) => ({
          id: font,
          label: font.match(/'([^']+)'/)?.[1]
        }))}
      >
        {(item) => <Select.Item style={{ fontFamily: item.id }}>{item.label}</Select.Item>}
      </Select.Content>
    </Select>
  )
}

export const SelectFontMono = () => {
  const { fontMono, setFontMono } = useFont()

  return (
    <Select name="font-mono" onChange={setFontMono} placeholder="Font Mono" value={fontMono}>
      <Label>Font Mono</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content
        isSearchable
        items={FONT_MONO.map((font) => ({
          id: font,
          label: font.match(/'([^']+)'/)?.[1]
        }))}
      >
        {(item) => <Select.Item style={{ fontFamily: item.id }}>{item.label}</Select.Item>}
      </Select.Content>
    </Select>
  )
}
