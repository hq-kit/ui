'use client'

import { useState } from 'react'
import { parseColor } from 'react-aria-components'
import { ColorArea, ColorField, ColorSlider } from '@/components/ui'

export default function ColorAreaWithSliderDemo() {
    const [color, setColor] = useState(parseColor('hsl(50, 100%, 50%)'))
    return (
        <div className='flex flex-col gap-y-2'>
            <ColorArea onChange={setColor} value={color} xChannel='saturation' yChannel='lightness' />
            <ColorSlider channel='hue' label='Fill Color' onChange={setColor} value={color} />
            <ColorField label='Current Color' value={color.toString('hex')} withPicker={false} />
        </div>
    )
}
