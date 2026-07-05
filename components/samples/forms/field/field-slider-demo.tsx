"use client"

import { Button } from "@/components/ui/button"
import { Form, Label } from "@/components/ui/field"
import { Slider, SliderOutput } from "@/components/ui/slider"

export default function FieldSliderDemo() {
  return (
    <Form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Slider defaultValue={20}>
        <Label>Opacity</Label>
        <SliderOutput />
      </Slider>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
