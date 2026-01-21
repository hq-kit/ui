'use client'

import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'
import { ColorField } from '@/components/ui/colors'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ColorFieldDemo() {
  const [color, setColor] = useState<Color | null>(parseColor('hsl(0, 100%, 50%)'))
  return (
    <div className='flex flex-col gap-2'>
      <ColorField onChange={setColor} value={color}>
        <Label>Color</Label>
        <Input />
      </ColorField>
      <pre className='text-xs'>{JSON.stringify({ color }, null, 2)}</pre>
    </div>
  )
}
