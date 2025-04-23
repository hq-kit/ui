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
                value={value}
                onChange={setValue}
                className='flex justify-center gap-2'
            >
                <ColorSwatchPicker.Item isDisabled color='#f59e0b' />
                <ColorSwatchPicker.Item color='#84cc16' />
                <ColorSwatchPicker.Item color='#0d6efd' />
                <ColorSwatchPicker.Item isDisabled color='#ec4899' />
                <ColorSwatchPicker.Item isDisabled color='#f43f5e' />
            </ColorSwatchPicker>

            <Description>{value.toString('css')}</Description>
        </div>
    )
}
