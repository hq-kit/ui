"use client"

import { useState } from "react"
import { type Color, parseColor } from "react-aria-components/ColorField"
import { ColorField, ColorSwatch } from "@/components/ui/colors"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function ColorFieldChannelsDemo() {
  const [color, setColor] = useState<Color | null>(parseColor("hsb(0, 100%, 100%)"))

  return (
    <div className="flex flex-col gap-2">
      <ColorSwatch className="w-full rounded-lg border" color={color!} />
      <ColorField channel="hue" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Hue</Label>
        <Input />
      </ColorField>
      <ColorField channel="saturation" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Saturation</Label>
        <Input />
      </ColorField>
      <ColorField channel="brightness" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Brightness</Label>
        <Input />
      </ColorField>
      <ColorField channel="alpha" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Alpha</Label>
        <Input />
      </ColorField>
    </div>
  )
}
