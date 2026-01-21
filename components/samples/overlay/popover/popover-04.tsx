'use client'

import { IconVolume, IconVolume3 } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Slider, SliderFill, SliderGroup, SliderThumb, SliderTrack } from '@/components/ui/slider'

const PopoverVolumeDemo = () => {
  const [value, setValue] = useState([45])

  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconVolume />
        <span className='sr-only'>Volume control</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <Slider onChange={(v) => setValue(v as any)} value={value}>
              <div className='flex items-center justify-between gap-2'>
                <Label className='leading-5'>Volume</Label>
                <output className='font-medium text-sm tabular-nums'>{value[0]}</output>
              </div>
              <SliderGroup>
                <IconVolume3 />
                <SliderTrack>
                  <SliderFill />
                  <SliderThumb />
                </SliderTrack>
                <IconVolume />
              </SliderGroup>
            </Slider>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverVolumeDemo
