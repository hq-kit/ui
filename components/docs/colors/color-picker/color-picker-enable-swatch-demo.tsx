'use client'

import type { Color } from 'react-aria-components'
import { useState } from 'react'
import { ColorArea, ColorField, ColorPicker, ColorSlider, ColorSwatchPicker, defaultColor } from '@/components/ui'

export default function ColorPickerEnableSwatchDemo() {
    const [color, setColor] = useState(defaultColor)
    const colorChangeHandler = (v: Color) => {
        setColor(v)
    }
    return (
        <ColorPicker onChange={(v) => colorChangeHandler(v)} value={color}>
            <ColorArea colorSpace='hsb' xChannel='saturation' yChannel='brightness' />
            <ColorSlider channel='hue' colorSpace='hsb' />
            <ColorField aria-label='Hex color' />
            <ColorSwatchPicker aria-label='Color swatch picker' className='flex flex-wrap gap-2' layout='grid'>
                {colors.map((color) => (
                    <ColorSwatchPicker.Item color={color} key={color} />
                ))}
            </ColorSwatchPicker>
        </ColorPicker>
    )
}

const colors = ['#f59e0b', '#84cc16', '#0d6efd', '#ec4899', '#f43f5e', '#d4b990', '#b19f73', '#9370db', '#7d60df']
