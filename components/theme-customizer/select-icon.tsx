"use client"
import type { ComponentProps } from "react"
import { iconLibraries } from "shadcn/icons"
import { BrandIcon } from "@/components/icons"
import { Label } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SelectIconProps extends ComponentProps<typeof Select> {
  label: string
}

const SelectIcon = ({ label, ...props }: SelectIconProps) => {
  return (
    <Select name={label} placeholder="Select icon" {...props}>
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent items={Object.values(iconLibraries)}>
        {(item) => (
          <SelectItem id={item.name} textValue={item.title}>
            <BrandIcon name={item.name} /> {item.title}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}

export default SelectIcon
