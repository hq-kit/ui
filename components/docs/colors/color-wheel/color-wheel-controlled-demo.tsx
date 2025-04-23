'use client'

import { useState } from 'react'
import { parseColor } from 'react-aria-components'

import { ColorWheel } from '@/components/ui'

export default function ColorWheelControlledDemo() {
    const [color, setColor] = useState(parseColor('hsl(0, 100%, 50%)'))
    return (
        <div className='flex flex-col items-center gap-4'>
            <ColorWheel aria-label='Background color' value={color} onChange={setColor} />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
