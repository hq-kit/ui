"use client"

import { Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={20}>
      <Label>Opacity</Label>
      <SliderOutput />
    </Slider>
  )
}
