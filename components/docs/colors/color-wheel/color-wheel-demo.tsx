'use client'

import { ColorWheel } from '@/components/ui'

export default function ColorWheelDemo() {
    return (
        <div className='flex gap-4'>
            <div className='space-y-1.5'>
                <span>Default</span>
                <ColorWheel aria-label='Color' />
            </div>
            <div className='space-y-1.5'>
                <span>Disabled</span>
                <ColorWheel aria-label='Color' isDisabled />
            </div>
        </div>
    )
}
