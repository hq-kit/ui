'use client'

import { ColorSlider } from '@/components/ui'

export default function ColorSliderDemo() {
    return (
        <div className='space-y-4'>
            <ColorSlider channel='hue' defaultValue={'hsl(0, 100%, 50%)'} label='Default' />
            <ColorSlider channel='hue' defaultValue={'hsl(0, 100%, 50%)'} isDisabled label='Disabled' />
        </div>
    )
}
