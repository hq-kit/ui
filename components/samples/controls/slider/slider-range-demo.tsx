"use client"

import { Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function SliderRangeDemo() {
  return (
    <Slider defaultValue={[25, 75]}>
      <Label>Distance Range</Label>
      <SliderOutput />
    </Slider>
  )
}
