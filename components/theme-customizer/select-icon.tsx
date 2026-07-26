"use client"
import type { ComponentProps } from "react"
import { iconLibraries } from "shadcn/icons"
import { BrandIcon } from "@/components/icons"
import { Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"

interface SelectIconProps extends ComponentProps<typeof Select> {
  label: string
}

const SelectIcon = ({ label, ...props }: SelectIconProps) => {
  return (
    <Select name={label} placeholder="Select icon" {...props}>
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content items={Object.values(iconLibraries)}>
        {(item) => (
          <Select.Item id={item.name} textValue={item.title}>
            <BrandIcon name={item.name} /> {item.title}
          </Select.Item>
        )}
      </Select.Content>
    </Select>
  )
}

export default SelectIcon
