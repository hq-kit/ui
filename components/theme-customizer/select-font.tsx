"use client"
import type { ComponentProps } from "react"
import type { FontMonoFamily } from "@/lib/fonts/mono"
import type { FontSansFamily } from "@/lib/fonts/sans"
import { Label } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SelectFontProps extends ComponentProps<typeof Select> {
  fonts: FontMonoFamily[] | FontSansFamily[]
  label: string
}

const SelectFont = ({ fonts, label, ...props }: SelectFontProps) => {
  return (
    <Select name={label} placeholder="Select theme font" {...props}>
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent items={fonts}>
        {(item) => (
          <SelectItem id={item.value} textValue={item.label}>
            <span
              style={{
                fontFamily: item.value
              }}
            >
              {item.label}
            </span>
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}

export default SelectFont
