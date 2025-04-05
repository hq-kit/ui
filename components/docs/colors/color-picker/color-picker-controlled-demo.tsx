'use client'

import React from 'react'

import { ColorPicker, defaultColor } from '@/components/ui'

export default function ColorPickerControlledDemo() {
    const [color, setColor] = React.useState(defaultColor)

    return (
        <div className='flex flex-col gap-4 items-center'>
            <ColorPicker value={color} onChange={setColor} />
            <code>{JSON.stringify(color)}</code>
        </div>
    )
}
