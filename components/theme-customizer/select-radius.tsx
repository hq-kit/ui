"use client"
import { useEffect, useRef, useState } from "react"
import { Field, Label } from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"
import { useTheme } from "@/stores/theme-store"

export const SelectRadius = () => {
  const { preset, setVar } = useTheme()
  const currentRadius = Number(preset.light.radius?.replace("rem", "")) ?? 0.625
  const [value, setValue] = useState(currentRadius)

  useEffect(() => {
    setValue(currentRadius)
  }, [currentRadius])

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const setRadius = (v: number | number[]) => {
    const value = v as number
    setValue(value)
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      setVar({ key: "radius", value: `${v as number}rem`, theme: "light" })
    }, 500)
  }
  return (
    <Field orientation="horizontal">
      <Label>Radius</Label>
      <Slider
        aria-label="Radius"
        className="ml-2 flex flex-row-reverse items-center **:data-[slot=slider-track]:w-fit! **:data-[slot=slider-track]:grow"
        formatOptions={{
          minimumFractionDigits: 3,
          maximumFractionDigits: 3
        }}
        maxValue={1}
        minValue={0}
        onChange={(v) => setValue(v as number)}
        onChangeEnd={setRadius}
        step={0.025}
        value={value}
      >
        <Slider.Output />
      </Slider>
    </Field>
  )
}
