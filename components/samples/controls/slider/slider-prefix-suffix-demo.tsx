'use client'

import { IconVolume, IconVolume3 } from '@tabler/icons-react'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider, SliderFill, SliderGroup, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderPrefixSuffixDemo() {
  const [volume, setVolume] = useState<number>(0.5)
  return (
    <div className='flex w-full items-center gap-4 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:translate-y-3.5'>
      <Slider onChange={(v) => setVolume(v as number)} value={volume}>
        <Label>Volume</Label>
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
  )
}
