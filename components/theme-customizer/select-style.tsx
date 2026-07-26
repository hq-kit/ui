"use client"
import type { ComponentProps } from "react"
import { PRESET_STYLES } from "shadcn/preset"
import { Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"
import { titleCase } from "@/lib/modifiers"

interface SelectStyleProps extends ComponentProps<typeof Select> {
  label: string
}

const SelectStyle = ({ label, ...props }: SelectStyleProps) => {
  return (
    <Select name={label} placeholder="Select style" {...props}>
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content items={Object.values(PRESET_STYLES).map((style) => ({ id: style, title: style }))}>
        {(item) => (
          <Select.Item id={item.id} textValue={item.title}>
            {titleCase(item.title)}
          </Select.Item>
        )}
      </Select.Content>
    </Select>
  )
}

export default SelectStyle
