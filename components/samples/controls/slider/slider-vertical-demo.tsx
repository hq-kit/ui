"use client"

import { Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function SliderVerticalDemo() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
      <Slider className="h-40" defaultValue={[50]} maxValue={100} orientation="vertical" step={1}>
        <SliderOutput />
        <Label>Brightness</Label>
      </Slider>
      <Slider className="h-40" defaultValue={[25]} maxValue={100} orientation="vertical" step={1}>
        <SliderOutput />
        <Label>Contrast</Label>
      </Slider>
    </div>
  )
}
