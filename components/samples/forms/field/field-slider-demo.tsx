"use client"

import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Form, Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function FieldSliderDemo() {
  const [temperature, setTemperature] = useState(31)
  const [saturation, setSaturation] = useState([21, 86])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ temperature, saturation }, null, 2)
    })
  }

  return (
    <Form className="w-full space-y-4" onSubmit={onSubmit}>
      <Slider defaultValue={20} onChange={(v) => setTemperature(v as number)} value={temperature}>
        <Label>Temperature</Label>
        <SliderOutput />
      </Slider>
      <Slider onChange={(v) => setSaturation(v as number[])} value={saturation}>
        <Label>Saturation</Label>
        <SliderOutput />
      </Slider>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
