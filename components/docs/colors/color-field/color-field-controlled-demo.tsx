'use client'

import { ColorField } from '@/components/ui'
import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'

export default function ColorFieldControlledDemo() {
    const [color, setColor] = useState<Color | null>(parseColor('#FAFAFA'))
    return (
        <div className='flex flex-col items-center gap-4'>
            <ColorField value={color} label='Color' onChange={setColor} />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
