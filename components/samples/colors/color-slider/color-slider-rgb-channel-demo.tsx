'use client'

import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'
import { ColorSlider, ColorSliderOutput, ColorSliderTrack, ColorSwatch, ColorThumb } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'

export default function ColorSliderChannelsDemo() {
  const [color, setColor] = useState<Color>(parseColor('rgb(255, 0, 0)'))

  return (
    <div className='flex w-full flex-col gap-2'>
      <ColorSwatch className='w-full rounded-lg border' color={color} />
      <ColorSlider channel='red' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Red</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='green' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Green</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='blue' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Blue</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='alpha' colorSpace='rgb' onChange={setColor} value={color}>
        <Label>Alpha</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
    </div>
  )
}
