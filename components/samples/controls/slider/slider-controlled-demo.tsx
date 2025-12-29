'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function SliderControlledDemo() {
  const [temperature, setTemperature] = useState<number>(31)
  const [saturation, setSaturation] = useState([21, 86])
  return (
    <div className='space-y-6'>
      <div>
        <Slider defaultValue={20} onChange={(v) => setTemperature(v as number)} value={temperature}>
          <div className='flex items-center justify-between'>
            <Label>Temperature</Label>
            <SliderOutput />
          </div>
          <SliderTrack>
            <SliderFill />
            <SliderThumb />
          </SliderTrack>
          <p className='text-muted-foreground text-sm'>Current temperature: {temperature ?? '-'}</p>
        </Slider>
      </div>
      <div>
        <Slider onChange={(v) => setSaturation(v as number[])} value={saturation}>
          <div className='flex items-center justify-between'>
            <Label>Saturation</Label>
            <SliderOutput className='text-muted-fg text-sm tabular-nums data-[orientation=vertical]:mx-auto data-[orientation=horizontal]:ml-auto'>
              {({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
            </SliderOutput>
          </div>
          <SliderTrack>
            {({ state }) => (
              <>
                <SliderFill />
                {state.values.map((_, i) => (
                  <SliderThumb index={i} key={i} />
                ))}
              </>
            )}
          </SliderTrack>
          <p className='text-muted-foreground text-sm'>Current saturation: {saturation ?? '-'}</p>
        </Slider>
      </div>
    </div>
  )
}
