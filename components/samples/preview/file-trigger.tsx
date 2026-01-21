'use client'

import type { Key } from 'react-aria-components'
import type { ButtonProps } from '@/components/ui/button'
import { IconBrandAdobe } from '@tabler/icons-react'
import { useState } from 'react'
import { Code } from '@/components/mdx/code'
import { FileTrigger } from '@/components/ui/file-trigger'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { TextField } from '@/components/ui/text-field'

export default function ButtonPreview() {
  const [isPending, setIsPending] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [children, setChildren] = useState('Upload')
  const [variant, setVariant] = useState<Key | null>('default')
  const [size, setSize] = useState<Key | null>('default')
  const [withIcon, setWithIcon] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)

  const [allowsMultiple, setAllowsMultiple] = useState(false)
  const [acceptDirectory, setAcceptDirectory] = useState(false)

  const [camera, setCamera] = useState(false)

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
              <SelectItem id='secondary'>Secondary</SelectItem>
              <SelectItem id='destructive'>Destructive</SelectItem>
              <SelectItem id='ghost'>Ghost</SelectItem>
              <SelectItem id='outline'>Outline</SelectItem>
              <SelectItem id='link'>Link</SelectItem>
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
              <SelectItem id='icon-sm'>Icon Small</SelectItem>
              <SelectItem id='icon'>Icon Medium</SelectItem>
              <SelectItem id='icon-lg'>Icon Large</SelectItem>
            </SelectContent>
          </Select>
          <Switch isSelected={allowsMultiple} onChange={setAllowsMultiple}>
            Allows Multiple
          </Switch>
          <Switch isSelected={acceptDirectory} onChange={setAcceptDirectory}>
            Accept Directory
          </Switch>
          <Switch isSelected={camera} onChange={setCamera}>
            Camera
          </Switch>
          <Switch isSelected={isPending} onChange={setIsPending}>
            Pending
          </Switch>
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </div>
        <div className='grid min-h-52 w-full place-items-center'>
          <FileTrigger
            acceptDirectory={acceptDirectory}
            allowsMultiple={allowsMultiple}
            defaultCamera={camera ? 'environment' : undefined}
            isDisabled={isDisabled}
            isPending={isPending}
            size={size as ButtonProps['size']}
            variant={variant as ButtonProps['variant']}
          >
            {withIcon && <IconBrandAdobe />}
            {iconOnly ? <IconBrandAdobe /> : children}
          </FileTrigger>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { IconBrandAdobe } from '@tabler/icons-react'
import { FileTrigger } from '@/components/ui/file-trigger'

<FileTrigger${variant !== 'default' ? ` variant="${variant}"` : ''}${size !== 'default' ? ` size="${size}"` : ''}${acceptDirectory ? ' acceptDirectory' : ''}${allowsMultiple ? ' allowsMultiple' : ''}${camera ? ' defaultCamera="environment"' : ''}${isPending ? ' isPending' : ''}${isDisabled ? ' isDisabled' : ''}>
  ${
    iconOnly
      ? `<IconBrandAdobe />`
      : withIcon
        ? `<IconBrandAdobe />
  ${children}`
        : children
  }
</FileTrigger>`}
        copy
      />
    </div>
  )
}
