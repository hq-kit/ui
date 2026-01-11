'use client'

import { useState } from 'react'
import { parseColor } from 'react-aria-components'
import { ColorArea, ColorSlider, ColorSliderOutput, ColorSliderTrack, ColorThumb } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'

export default function ColorAreaWithSliderDemo() {
  const [color, setColor] = useState(parseColor('hsl(50, 100%, 50%)'))

  return (
    <div className='flex flex-col gap-y-2'>
      <ColorArea onChange={setColor} value={color} xChannel='saturation' yChannel='lightness' />
      <ColorSlider channel='hue' defaultValue='hsl(0, 100%, 50%)' onChange={setColor} value={color}>
        <Label>Color</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
    </div>
  )
}
