"use client"

import { Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function SliderStepDemo() {
  return (
    <Slider defaultValue={20} step={10}>
      <Label>Step in 10</Label>
      <SliderOutput />
    </Slider>
  )
}
