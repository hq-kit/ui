'use client'

import { ColorSlider } from '@/components/ui'

export default function ColorSliderWithLabelDemo() {
    return <ColorSlider channel='hue' defaultValue='hsl(0, 100%, 50%)' label='Color Customizer' />
}
