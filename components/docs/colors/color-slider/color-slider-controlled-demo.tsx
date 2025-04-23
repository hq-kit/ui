'use client'

import { useState } from 'react'

import { ColorSlider, defaultColor } from '@/components/ui'

export default function ColorSliderControlledDemo() {
    const [color, setColor] = useState(defaultColor)
    return (
        <div className='flex flex-col gap-2'>
            <ColorSlider channel='hue' value={color} onChange={setColor} />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
