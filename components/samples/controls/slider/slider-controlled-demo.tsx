"use client"

import { useState } from "react"
import { Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function SliderControlledDemo() {
  const [temperature, setTemperature] = useState<number>(31)
  const [saturation, setSaturation] = useState([21, 86])
  return (
    <div className="w-full space-y-6">
      <div className="space-y-3">
        <Slider defaultValue={20} onChange={(v) => setTemperature(v as number)} value={temperature}>
          <Label>Temperature</Label>
          <SliderOutput />
        </Slider>
        <p className="text-muted-foreground text-sm">Current temperature: {temperature ?? "-"}</p>
      </div>
      <div className="space-y-3">
        <Slider onChange={(v) => setSaturation(v as number[])} value={saturation}>
          <Label>Saturation</Label>
          <SliderOutput />
        </Slider>
        <p className="text-muted-foreground text-sm">Current saturation: {saturation.join("-") ?? "-"}</p>
      </div>
    </div>
  )
}
