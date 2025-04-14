'use client'

import { ColorSlider } from '@/components/ui'

export default function ColorSliderDemo() {
    return (
        <div className='space-y-4'>
            <ColorSlider label='Default' channel='hue' defaultValue={'hsl(0, 100%, 50%)'} />
            <ColorSlider label='Disabled' channel='hue' isDisabled defaultValue={'hsl(0, 100%, 50%)'} />
        </div>
    )
}
