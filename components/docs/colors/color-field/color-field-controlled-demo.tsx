'use client'

import React from 'react'

import { type Color, parseColor } from 'react-aria-components'

import { ColorField, Description } from '@/components/ui'

export default function ColorFieldControlledDemo() {
    const [color, setColor] = React.useState(parseColor('#FAFAFA'))
    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
            <ColorField
                className='min-w-56'
                value={color}
                aria-label='Pick a color'
                onChange={(newColor: Color | null) => newColor && setColor(newColor)}
                placeholder='#FAFAFA'
            />
            <Description>{color.toString('css')}</Description>
        </div>
    )
}
