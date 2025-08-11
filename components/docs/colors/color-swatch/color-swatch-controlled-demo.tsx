'use client'

import { useState } from 'react'
import { parseColor } from 'react-aria-components'
import { ColorSwatchPicker } from '@/components/ui'

export default function ColorSwatchPickerDemo() {
    const [color, setColor] = useState(parseColor('#0d6efd'))
    return (
        <div className='flex flex-col gap-4'>
            <ColorSwatchPicker
                aria-label='Pick color'
                className='flex justify-center gap-2'
                onChange={setColor}
                value={color}
            >
                <ColorSwatchPicker.Item color='#f59e0b' />
                <ColorSwatchPicker.Item color='#84cc16' />
                <ColorSwatchPicker.Item color='#0d6efd' />
                <ColorSwatchPicker.Item color='#ec4899' />
                <ColorSwatchPicker.Item color='#f43f5e' />
            </ColorSwatchPicker>
            <code>color: {JSON.stringify(color)}</code>
        </div>
    )
}
