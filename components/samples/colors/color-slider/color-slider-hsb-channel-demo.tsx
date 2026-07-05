"use client"

import { useState } from "react"
import { type Color, parseColor } from "react-aria-components/ColorSlider"
import { ColorSlider, ColorSliderOutput, ColorSwatch } from "@/components/ui/colors"
import { Label } from "@/components/ui/field"

export default function ColorSliderChannelsDemo() {
  const [color, setColor] = useState<Color>(parseColor("hsb(0, 100%, 100%)"))

  return (
    <div className="flex w-full flex-col gap-2">
      <ColorSwatch className="w-full rounded-lg border" color={color} />
      <ColorSlider channel="hue" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Hue</Label>
        <ColorSliderOutput />
      </ColorSlider>
      <ColorSlider channel="saturation" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Saturation</Label>
        <ColorSliderOutput />
      </ColorSlider>
      <ColorSlider channel="brightness" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Brightness</Label>
        <ColorSliderOutput />
      </ColorSlider>
      <ColorSlider channel="alpha" colorSpace="hsb" onChange={setColor} value={color}>
        <Label>Alpha</Label>
        <ColorSliderOutput />
      </ColorSlider>
    </div>
  )
}
