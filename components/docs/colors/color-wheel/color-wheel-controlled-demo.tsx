'use client'

import React from 'react'

import { parseColor } from 'react-aria-components'

import { ColorWheel, Description } from '@/components/ui'

export default function ColorWheelControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
    return (
        <div className='grid gap-4 justify-center items-center sm:grid-cols-2'>
            <div className='shrink-0 grid place-content-center'>
                <ColorWheel aria-label='Background color' value={color} onChange={setColor} />
            </div>
            <Description>{color.toString('css')}</Description>
        </div>
    )
}
