'use client'

import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'
import { ColorField, ColorSwatch } from '@/components/ui/colors'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ColorFieldChannelsDemo() {
  const [color, setColor] = useState<Color | null>(parseColor('rgb(255, 0, 0)'))

  return (
    <div className='flex flex-col gap-2'>
      <ColorSwatch className='w-full rounded-lg border' color={color!} />
      <ColorField channel='red' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Red</Label>
        <Input />
      </ColorField>
      <ColorField channel='green' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Green</Label>
        <Input />
      </ColorField>
      <ColorField channel='blue' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Blue</Label>
        <Input />
      </ColorField>
      <ColorField channel='alpha' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Alpha</Label>
        <Input />
      </ColorField>
    </div>
  )
}
