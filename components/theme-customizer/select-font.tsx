"use client"
import type { ComponentProps } from "react"
import type { Font } from "@/lib/fonts"
import { Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"

interface SelectFontProps extends ComponentProps<typeof Select> {
  fonts: Font[]
  label: string
}

const SelectFont = ({ fonts, label, ...props }: SelectFontProps) => {
  return (
    <Select aria-label={label} id={label} name={label} placeholder="Select theme font" {...props}>
      <Label>{label}</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content isSearchable items={fonts}>
        {(item) => (
          <Select.Item id={item.label} textValue={item.label}>
            <span
              style={{
                fontFamily: item.label
              }}
            >
              {item.label}
            </span>
          </Select.Item>
        )}
      </Select.Content>
    </Select>
  )
}

export default SelectFont
