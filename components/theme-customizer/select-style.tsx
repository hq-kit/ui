"use client"
import type { ComponentProps } from "react"
import { PRESET_STYLES } from "shadcn/preset"
import { Label } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { titleCase } from "@/lib/modifiers"

interface SelectStyleProps extends ComponentProps<typeof Select> {
  label: string
}

const SelectStyle = ({ label, ...props }: SelectStyleProps) => {
  return (
    <Select name={label} placeholder="Select style" {...props}>
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent items={Object.values(PRESET_STYLES).map((style) => ({ id: style, title: style }))}>
        {(item) => (
          <SelectItem id={item.id} textValue={item.title}>
            {titleCase(item.title)}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}

export default SelectStyle
