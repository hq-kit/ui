'use client'

import React from 'react'

import { parseColor } from 'react-aria-components'

import { ColorArea, ColorThumb, Description } from '@/components/ui'

export default function ColorAreaControlledDemo() {
    const [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'))

    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
            <ColorArea value={color} onChange={setColor}>
                <ColorThumb />
            </ColorArea>
            <Description>{color.toString('css')}</Description>
        </div>
    )
}
