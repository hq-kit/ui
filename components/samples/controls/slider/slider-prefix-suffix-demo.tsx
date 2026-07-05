"use client"

import { IconVolume, IconVolume3 } from "@tabler/icons-react"
import { useState } from "react"
import { Label } from "@/components/ui/field"
import { Slider, SliderGroup } from "@/components/ui/slider"

export default function SliderPrefixSuffixDemo() {
  const [volume, setVolume] = useState<number>(0.5)
  return (
    <div className="w-full space-y-3">
      <SliderGroup>
        <Label>Volume</Label>
        <IconVolume3 />
        <Slider onChange={(v) => setVolume(v as number)} value={volume}></Slider>
        <IconVolume />
      </SliderGroup>
    </div>
  )
}
