'use client'

import { useState } from 'react'
import { parseColor } from 'react-aria-components'

import { ColorPicker } from '@/components/ui'

export default function ColorPickerDisabledDemo() {
    const [color, setColor] = useState(parseColor('hsl(216, 98%, 52%)'))
    return <ColorPicker isDisabled label='Color Picker' value={color} onChange={setColor} />
}
