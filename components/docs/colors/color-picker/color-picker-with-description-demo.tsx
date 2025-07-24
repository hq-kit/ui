'use client'

import { ColorPicker, defaultColor } from '@/components/ui'
import { useState } from 'react'

export default function ColorPickerWithDescriptionDemo() {
    const [color, setColor] = useState(defaultColor)
    return (
        <ColorPicker
            label='Theme Color'
            description='Snag a color for the app theme'
            value={color}
            onChange={setColor}
        />
    )
}
