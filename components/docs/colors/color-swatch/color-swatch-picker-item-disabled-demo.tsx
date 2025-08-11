'use client'

import { useState } from 'react'
import { parseColor } from 'react-aria-components'
import { ColorSwatchPicker, Description } from '@/components/ui'

export default function ColorSwatchPickerDemo() {
    const [value, setValue] = useState(parseColor('#0d6efd'))
    return (
        <div className='flex flex-col gap-4'>
            <ColorSwatchPicker
                aria-label='Pick color'
                className='flex justify-center gap-2'
                onChange={setValue}
                value={value}
            >
                <ColorSwatchPicker.Item color='#f59e0b' isDisabled />
                <ColorSwatchPicker.Item color='#84cc16' />
                <ColorSwatchPicker.Item color='#0d6efd' />
                <ColorSwatchPicker.Item color='#ec4899' isDisabled />
                <ColorSwatchPicker.Item color='#f43f5e' isDisabled />
            </ColorSwatchPicker>

            <Description>{value.toString('css')}</Description>
        </div>
    )
}
