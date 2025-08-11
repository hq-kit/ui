'use client'

import { useState } from 'react'
import { ColorPicker, defaultColor } from '@/components/ui'

export default function ColorPickerWithDescriptionDemo() {
    const [color, setColor] = useState(defaultColor)
    return (
        <ColorPicker
            description='Snag a color for the app theme'
            label='Theme Color'
            onChange={setColor}
            value={color}
        />
    )
}
