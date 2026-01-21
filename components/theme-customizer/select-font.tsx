'use client'
import type { SelectProps } from 'react-aria-components'
import type { FontMonoFamily } from '@/lib/fonts/mono'
import type { FontSansFamily } from '@/lib/fonts/sans'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectFontProps extends SelectProps {
  fonts: FontMonoFamily[] | FontSansFamily[]
  label: string
}

const SelectFont = ({ fonts, label, ...props }: SelectFontProps) => {
  return (
    <Select name={label} placeholder='Select theme font' {...props}>
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
