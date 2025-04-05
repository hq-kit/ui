'use client'

import React from 'react'

import { parseColor } from 'react-aria-components'

import { ColorWheel } from '@/components/ui'

export default function ColorWheelControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))
    return (
        <div className='flex flex-col gap-4 items-center'>
            <ColorWheel aria-label='Background color' value={color} onChange={setColor} />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
