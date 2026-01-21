'use client'

import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'
import { ColorSlider, ColorSliderOutput, ColorSliderTrack, ColorSwatch, ColorThumb } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'

export default function ColorSliderChannelsDemo() {
  const [color, setColor] = useState<Color>(parseColor('hsl(0, 100%, 50%)'))

  return (
    <div className='flex w-full flex-col gap-2'>
      <ColorSwatch className='w-full rounded-lg border' color={color} />
      <ColorSlider channel='hue' colorSpace='hsl' onChange={setColor} value={color}>
        <Label>Hue</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='saturation' colorSpace='hsl' onChange={setColor} value={color}>
        <Label>Saturation</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='lightness' colorSpace='hsl' onChange={setColor} value={color}>
        <Label>Lightness</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='alpha' colorSpace='hsl' onChange={setColor} value={color}>
        <Label>Alpha</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
    </div>
  )
}
