'use client'

import * as React from 'react'

import { parseColor } from 'react-aria-components'

import { ColorSwatchPicker } from '@/components/ui'

export default function ColorSwatchPickerDemo() {
    const [color, setColor] = React.useState(parseColor('#0d6efd'))
    return (
        <div className='flex flex-col gap-4'>
            <ColorSwatchPicker
                aria-label='Pick color'
                value={color}
                onChange={setColor}
                className='flex justify-center gap-2'
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
