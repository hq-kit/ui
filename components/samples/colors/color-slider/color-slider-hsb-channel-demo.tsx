'use client'

import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'
import { ColorSlider, ColorSliderOutput, ColorSliderTrack, ColorSwatch, ColorThumb } from '@/components/ui/colors'
import { Label } from '@/components/ui/label'

export default function ColorSliderChannelsDemo() {
  const [color, setColor] = useState<Color>(parseColor('hsb(0, 100%, 100%)'))

  return (
    <div className='flex w-full flex-col gap-2'>
      <ColorSwatch className='w-full rounded-lg border' color={color} />
      <ColorSlider channel='hue' colorSpace='hsb' onChange={setColor} value={color}>
        <Label>Hue</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='saturation' colorSpace='hsb' onChange={setColor} value={color}>
        <Label>Saturation</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='brightness' colorSpace='hsb' onChange={setColor} value={color}>
        <Label>Brightness</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
      <ColorSlider channel='alpha' colorSpace='hsb' onChange={setColor} value={color}>
        <Label>Alpha</Label>
        <ColorSliderOutput />
        <ColorSliderTrack>
          <ColorThumb />
        </ColorSliderTrack>
      </ColorSlider>
    </div>
  )
}
