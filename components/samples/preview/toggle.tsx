'use client'

import type { Key } from 'react-aria-components'
import { IconBrandAdobe } from '@tabler/icons-react'
import { useState } from 'react'
import { Code } from '@/components/mdx/code'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { TextField } from '@/components/ui/text-field'
import { Toggle, type ToggleProps } from '@/components/ui/toggle'

export default function ButtonPreview() {
  const [isDisabled, setIsDisabled] = useState(false)
  const [children, setChildren] = useState('Toggle')
  const [variant, setVariant] = useState<Key | null>('default')
  const [size, setSize] = useState<Key | null>('default')
  const [withIcon, setWithIcon] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)

  return (
    <div>
      <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l'>
          <TextField isDisabled={iconOnly} onChange={setChildren} value={children}>
            <Label>Children</Label>
            <Input />
          </TextField>
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
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </div>
        <div className='grid min-h-52 w-full place-items-center'>
          <Toggle
            isDisabled={isDisabled}
            size={size as ToggleProps['size']}
            variant={variant as ToggleProps['variant']}
          >
            {withIcon && <IconBrandAdobe />}
            {iconOnly ? <IconBrandAdobe /> : children}
          </Toggle>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { IconBrandAdobe } from '@tabler/icons-react'
import { Toggle } from '@/components/ui/toggle'

<Toggle${variant !== 'default' ? ` variant="${variant}"` : ''}${size !== 'default' ? ` size="${size}"` : ''}${isDisabled ? ' isDisabled' : ''}>
  ${
    iconOnly
      ? `<IconBrandAdobe />`
      : withIcon
        ? `<IconBrandAdobe />
  ${children}`
        : children
  }
</Toggle>`}
        copy
      />
    </div>
  )
}
