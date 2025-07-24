'use client'

import { ColorSlider, defaultColor } from '@/components/ui'
import { useState } from 'react'

export default function ColorSliderControlledDemo() {
    const [color, setColor] = useState(defaultColor)
    return (
        <div className='flex flex-col gap-2'>
            <ColorSlider channel='hue' value={color} onChange={setColor} />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
