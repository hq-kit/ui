'use client'

import { ColorPicker, defaultColor } from '@/components/ui'
import { useState } from 'react'

export default function ColorPickerControlledDemo() {
    const [color, setColor] = useState(defaultColor)

    return (
        <div className='flex flex-col items-center gap-4'>
            <ColorPicker value={color} onChange={setColor} />
            <code>{JSON.stringify(color)}</code>
        </div>
    )
}
