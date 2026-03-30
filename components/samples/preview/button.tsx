'use client'

import type { Key } from 'react-aria-components'
import { IconBrandAdobe } from '@tabler/icons-react'
import { useState } from 'react'
import { Code } from '@/components/mdx/code-client'
import { Button, type ButtonProps, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { TextField } from '@/components/ui/text-field'

const variants = Object.keys(buttonVariants.variants.variant)
const sizes = Object.keys(buttonVariants.variants.size)

export default function ButtonPreview() {
  const [isPending, setIsPending] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [children, setChildren] = useState('Button')
  const [variant, setVariant] = useState<Key | null>(variants[0])
  const [size, setSize] = useState<Key | null>(sizes[0])
  const [withIcon, setWithIcon] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)

  const onIconOnlyChange = (value: boolean) => {
    setIconOnly(value)
    if (value) {
      setWithIcon(false)
      setSize(sizes.find((size) => size.startsWith('icon')) as Key)
    } else {
      setSize(sizes[0] as Key)
    }
  }

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
          <Switch isSelected={iconOnly} onChange={onIconOnlyChange}>
            Icon Only
          </Switch>
          <Select onChange={setVariant} value={variant}>
            <Label>Variant</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent items={variants.map((variant) => ({ id: variant, textValue: variant }))}>
              {(item) => <SelectItem id={item.id}>{item.textValue}</SelectItem>}
            </SelectContent>
          </Select>
          <Select onChange={setSize} value={size}>
            <Label>Size</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              items={
                iconOnly
                  ? sizes.filter((size) => size.startsWith('icon')).map((size) => ({ id: size, textValue: size }))
                  : sizes.filter((size) => !size.startsWith('icon')).map((size) => ({ id: size, textValue: size }))
              }
            >
              {(item) => <SelectItem id={item.id}>{item.textValue}</SelectItem>}
            </SelectContent>
          </Select>
          <Switch isSelected={isPending} onChange={setIsPending}>
            Pending
          </Switch>
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </div>
        <div className='grid min-h-52 w-full place-items-center'>
          <Button
            isDisabled={isDisabled}
            isPending={isPending}
            size={size as ButtonProps['size']}
            variant={variant as ButtonProps['variant']}
          >
            {withIcon && <IconBrandAdobe />}
            {iconOnly ? <IconBrandAdobe /> : children}
          </Button>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { IconBrandAdobe } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

<Button${variant !== 'default' ? ` variant="${variant}"` : ''}${size !== 'default' ? ` size="${size}"` : ''}${isPending ? ' isPending' : ''}${isDisabled ? ' isDisabled' : ''}>
  ${
    iconOnly
      ? `<IconBrandAdobe />`
      : withIcon
        ? `<IconBrandAdobe />
  ${children}`
        : children
  }
</Button>`}
        copy
      />
    </div>
  )
}
