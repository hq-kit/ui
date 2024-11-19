'use client'

import React from 'react'

import { ColorSlider, defaultColor, Description } from '@/components/ui'

export default function ColorSliderControlledDemo() {
    const [color, setColor] = React.useState(defaultColor)
    return (
        <div className='flex flex-col gap-2'>
            <ColorSlider channel='hue' value={color} onChange={setColor} />
            <Description>{color.toString('css')}</Description>
        </div>
    )
}
