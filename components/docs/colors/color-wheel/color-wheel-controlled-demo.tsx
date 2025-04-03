'use client'

import React from 'react'

import { parseColor } from 'react-aria-components'

import { ColorWheel } from '@/components/ui'

export default function ColorWheelControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
    return (
        <div className='grid items-center justify-center gap-4 sm:grid-cols-2'>
            <div className='grid shrink-0 place-content-center'>
                <ColorWheel aria-label='Background color' value={color} onChange={setColor} />
            </div>
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
