'use client'

import { parseColor } from '@react-stately/color'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSliderTrack,
  ColorSwatch,
  ColorThumb
} from '@/components/ui/colors'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent } from '@/components/ui/popover'

export default function ColorPickerDemo() {
  const [color, setColor] = useState(parseColor('#123456'))
  return (
    <ColorPicker defaultValue='rgb(120,140,200)' onChange={setColor} value={color}>
      <Popover>
        <Button className='flex h-fit items-center gap-2 p-2' variant='ghost'>
          <ColorSwatch />
          {color?.toString()}
        </Button>
        <PopoverContent>
          <div className='space-y-2'>
            <ColorArea className='w-full' colorSpace='hsl' xChannel='hue' yChannel='lightness' />
            <ColorSlider channel='saturation' colorSpace='hsl'>
              <ColorSliderTrack>
                <ColorThumb />
              </ColorSliderTrack>
            </ColorSlider>
            <ColorField aria-label='Color'>
              <Input />
            </ColorField>
          </div>
        </PopoverContent>
      </Popover>
    </ColorPicker>
  )
}
