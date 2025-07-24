'use client'

import { Slider } from '@/components/ui'
import React from 'react'

export default function SliderControlledDemo() {
    const [temperature, setTemperature] = React.useState<number>(31)
    const [saturation, setSaturation] = React.useState<number[]>([21, 86])
    return (
        <div className='space-y-6'>
            <Slider
                value={temperature}
                onChange={(v) => setTemperature(v as number)}
                label='Temperature'
                description={`Current temperature: ${temperature ?? '-'}`}
            />
            <Slider
                value={saturation}
                onChange={(v) => setSaturation(v as number[])}
                label='Saturation'
                description={`Current saturation: ${saturation ?? '-'}`}
            />
        </div>
    )
}
