'use client'

import { parseColor } from 'react-aria-components'

import { ColorArea, ColorField, ColorSlider } from '@/components/ui'
import { useState } from 'react'

export default function ColorAreaWithSliderDemo() {
    const [color, setColor] = useState(parseColor('hsl(50, 100%, 50%)'))
    return (
        <div className='flex flex-col gap-y-2'>
            <ColorArea value={color} onChange={setColor} xChannel='saturation' yChannel='lightness' />
            <ColorSlider label='Fill Color' channel='hue' value={color} onChange={setColor} />
            <ColorField label='Current Color' withPicker={false} value={color.toString('hex')} />
        </div>
    )
}
