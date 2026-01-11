'use client'

import type { ColorSpace, Key } from 'react-aria-components'
import { useState } from 'react'
import { ColorArea } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

const spaces = ['rgb', 'hsb', 'hsl'].map((space) => ({ space }))

export default function ColorAreaSpaceDemo() {
  const [colorSpace, setColorSpace] = useState<Key | null>('rgb')
  return (
    <div className='flex flex-col gap-4'>
      <Select className='w-full' onChange={setColorSpace} value={colorSpace}>
        <Label>Color Space</Label>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content items={spaces}>
          {(item) => <Select.Item id={item.space}>{item.space}</Select.Item>}
        </Select.Content>
      </Select>
      <ColorArea colorSpace={colorSpace as ColorSpace} />
    </div>
  )
}
