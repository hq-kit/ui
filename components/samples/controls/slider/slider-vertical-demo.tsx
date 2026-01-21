'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

const bands = ['32 Hz', '64 Hz', '125 Hz', '250 Hz', '500 Hz', '1 kHz', '2 kHz', '4 kHz', '8 kHz', '16 kHz']

export default function SliderVerticalDemo() {
  const [eq, setEq] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  return (
    <div className='grid grid-cols-5 justify-items-center gap-2 sm:grid-cols-10 sm:gap-6'>
      {eq.map((v, i) => (
        <Slider
          formatOptions={{ maximumFractionDigits: 0 }}
          key={i}
          maxValue={12}
          minValue={-12}
          onChange={(n) => setEq((prev) => prev.map((x, idx) => (idx === i ? (n as number) : x)))}
          orientation='vertical'
          step={1}
          value={v}
        >
          <div className='mb-2 flex flex-col items-center justify-between'>
            <SliderOutput />
            <Label className='sr-only'>{bands[i]}</Label>
          </div>
          <div className='h-48'>
            <SliderTrack className='h-full w-10'>
              <SliderFill />
              <SliderThumb />
            </SliderTrack>
          </div>
          <p className='text-muted-foreground text-sm'>dB</p>
        </Slider>
      ))}
    </div>
  )
}
