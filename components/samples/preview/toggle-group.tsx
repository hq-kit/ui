'use client'

import type { Key } from 'react-aria-components'
import type { ToggleProps } from '@/components/ui/toggle'
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'
import { useState } from 'react'
import { Code } from '@/components/mdx/code'
import { Label } from '@/components/ui/label'
import { NumberField, NumberInput } from '@/components/ui/number-field'
import { Radio, RadioGroup } from '@/components/ui/radio'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export default function ButtonPreview() {
  const [isDisabled, setIsDisabled] = useState(false)
  const [variant, setVariant] = useState<Key | null>('default')
  const [size, setSize] = useState<Key | null>('default')
  const [withIcon, setWithIcon] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)

  const [spacing, setSpacing] = useState<number>(0)
  const [orientation, setOrientation] = useState('horizontal')

  return (
    <div>
      <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l'>
          <Switch isDisabled={iconOnly} isSelected={withIcon} onChange={setWithIcon}>
            With Icon
          </Switch>
          <Switch isDisabled={withIcon} isSelected={iconOnly} onChange={setIconOnly}>
            Icon Only
          </Switch>
          <Select onChange={setVariant} value={variant}>
            <Label>Variant</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem id='default'>Default (Primary)</SelectItem>
              <SelectItem id='outline'>Outline</SelectItem>
            </SelectContent>
          </Select>
          <Select onChange={setSize} value={size}>
            <Label>Size</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem id='sm'>Small</SelectItem>
              <SelectItem id='default'>Default (Medium)</SelectItem>
              <SelectItem id='lg'>Large</SelectItem>
            </SelectContent>
          </Select>
          <RadioGroup onChange={setOrientation} orientation='vertical' value={orientation}>
            <Label>Orientation</Label>
            <div className='flex gap-3'>
              <Radio value='horizontal'>Horizontal</Radio>
              <Radio value='vertical'>Vertical</Radio>
            </div>
          </RadioGroup>
          <NumberField onChange={setSpacing} value={spacing}>
            <Label>Spacing</Label>
            <NumberInput />
          </NumberField>
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </div>
        <div className='grid min-h-52 w-full place-items-center'>
          <ToggleGroup
            isDisabled={isDisabled}
            orientation={orientation as 'horizontal' | 'vertical'}
            size={size as ToggleProps['size']}
            spacing={spacing}
            variant={variant as ToggleProps['variant']}
          >
            <ToggleGroupItem id='bold'>
              {withIcon && <IconBold />}
              {iconOnly ? <IconBold /> : 'Bold'}
            </ToggleGroupItem>
            <ToggleGroupItem id='italic'>
              {withIcon && <IconItalic />}
              {iconOnly ? <IconItalic /> : 'Italic'}
            </ToggleGroupItem>
            <ToggleGroupItem id='underline'>
              {withIcon && <IconUnderline />}
              {iconOnly ? <IconUnderline /> : 'Underline'}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

<ToggleGroup${orientation !== 'horizontal' ? ` orientation="${orientation}"` : ''}${variant !== 'default' ? ` variant="${variant}"` : ''}${size !== 'default' ? ` size="${size}"` : ''}${isDisabled ? ' isDisabled' : ''}>
  <ToggleGroupItem id="bold">
    ${
      iconOnly
        ? `<IconBold />`
        : withIcon
          ? `<IconBold />
    Bold`
          : 'Bold'
    }
  </ToggleGroupItem>
  <ToggleGroupItem id="italic">
    ${
      iconOnly
        ? `<IconItalic />`
        : withIcon
          ? `<IconItalic />
    Italic`
          : 'Italic'
    }
  </ToggleGroupItem>
  <ToggleGroupItem id="underline">
    ${
      iconOnly
        ? `<IconUnderline />`
        : withIcon
          ? `<IconUnderline />
    Underline`
          : 'Underline'
    }
  </ToggleGroupItem>
</ToggleGroup>`}
        copy
      />
    </div>
  )
}
