'use client'

import { useState } from 'react'
import { ColorPicker, defaultColor } from '@/components/ui'

export default function ColorPickerWithLabelDemo() {
    const [color, setColor] = useState(defaultColor)
    return <ColorPicker label={color.toString('hex')} onChange={setColor} value={color} />
}
