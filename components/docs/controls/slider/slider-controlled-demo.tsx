'use client'

import React from 'react'
import { Slider } from '@/components/ui'

export default function SliderControlledDemo() {
    const [temperature, setTemperature] = React.useState<number>(31)
    const [saturation, setSaturation] = React.useState<number[]>([21, 86])
    return (
        <div className='space-y-6'>
            <Slider
                description={`Current temperature: ${temperature ?? '-'}`}
                label='Temperature'
                onChange={(v) => setTemperature(v as number)}
                value={temperature}
            />
            <Slider
                description={`Current saturation: ${saturation ?? '-'}`}
                label='Saturation'
                onChange={(v) => setSaturation(v as number[])}
                value={saturation}
            />
        </div>
    )
}
