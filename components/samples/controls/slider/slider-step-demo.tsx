'use client'

import { Label } from '@/components/ui/label'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderStepDemo() {
  return (
    <Slider defaultValue={20} step={10}>
      <div className='flex items-center justify-between'>
        <Label>Progress tracking</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
      <p className='text-muted-foreground text-sm'>Step in 10</p>
    </Slider>
  )
}
