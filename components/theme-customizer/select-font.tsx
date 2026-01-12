import type {Key, SelectProps} from 'react-aria-components'
import { useMemo, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface SelectFontProps extends SelectProps {
  fonts: Record<string, string>
  label: string
}

const SelectFont = ({ fonts, defaultValue, label, ...props }: SelectFontProps) => {
  const fontNames = useMemo(() => Object.keys(fonts), [fonts])

  return (
    <Select name={label}  placeholder='Select theme font' {...props}>
      <Label>{label}</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {fontNames.map((fontName) => (
          <SelectItem id={fontName} key={fontName} textValue={fontName}>
            <span
              style={{
                fontFamily: fonts[fontName] ?? defaultValue
              }}
            >
              {fontName}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectFont
