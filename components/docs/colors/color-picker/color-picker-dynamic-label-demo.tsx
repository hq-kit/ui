'use client'

import React from 'react'

import { ColorPicker, defaultColor } from '@/components/ui'

export default function ColorPickerWithLabelDemo() {
    const [color, setColor] = React.useState(defaultColor)
    return <ColorPicker label={color.toString('hex')} value={color} onChange={setColor} />
}
