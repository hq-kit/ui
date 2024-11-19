'use client'

import React from 'react'

import { ColorPicker, defaultColor, Description } from '@/components/ui'

export default function ColorPickerControlledDemo() {
    const [color, setColor] = React.useState(defaultColor)

    return (
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
            <ColorPicker value={color} onChange={setColor} />
            <Description>{color.toString('css')}</Description>
        </div>
    )
}
