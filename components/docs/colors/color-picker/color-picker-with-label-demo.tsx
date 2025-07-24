'use client'

import { ColorPicker, defaultColor } from '@/components/ui'
import { useState } from 'react'

export default function ColorPickerWithLabelDemo() {
    const [color, setColor] = useState(defaultColor)
    return <ColorPicker label='Theme Color' value={color} onChange={setColor} />
}
