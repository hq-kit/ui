'use client'

import { ColorSlider } from '@/components/ui'

export default function ColorSliderDemo() {
    return <ColorSlider label='Fill color' channel='hue' defaultValue='hsl(0, 100%, 50%)' />
}
