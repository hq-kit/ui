'use client'

import { useState } from 'react'
import { type Color, parseColor } from 'react-aria-components'
import { ColorField } from '@/components/ui'

export default function ColorFieldControlledDemo() {
    const [color, setColor] = useState<Color | null>(parseColor('#FAFAFA'))
    return (
        <div className='flex flex-col items-center gap-4'>
            <ColorField label='Color' onChange={setColor} value={color} />
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
