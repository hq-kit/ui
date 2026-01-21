'use client'

import { parseColor } from '@react-stately/color'
import { useState } from 'react'
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSliderTrack,
  ColorSwatch,
  ColorThumb
} from '@/components/ui/colors'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function ColorPickerDemo() {
  const [color, setColor] = useState(parseColor('#123456'))
  return (
    <ColorPicker defaultValue='rgb(120,140,200)' onChange={setColor} value={color}>
      <InputGroup>
        <InputGroupAddon>
          <Popover>
            <PopoverTrigger>
              <ColorSwatch />
            </PopoverTrigger>
            <PopoverContent>
              <div className='space-y-2'>
                <ColorArea className='w-full' colorSpace='hsl' xChannel='hue' yChannel='lightness' />
                <ColorSlider channel='saturation' colorSpace='hsl'>
                  <ColorSliderTrack>
                    <ColorThumb />
                  </ColorSliderTrack>
                </ColorSlider>
              </div>
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
        <ColorField aria-label='Color'>
          <InputGroupInput />
        </ColorField>
      </InputGroup>
    </ColorPicker>
  )
}
