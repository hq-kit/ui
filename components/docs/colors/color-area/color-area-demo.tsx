'use client'

import { ColorArea } from '@/components/ui'

export default function ColorAreaDemo() {
    return (
        <div className='flex gap-4'>
            <div className='space-y-1.5'>
                <span>Default</span>
                <ColorArea />
            </div>
            <div className='space-y-1.5'>
                <span>Disabled</span>
                <ColorArea isDisabled />
            </div>
        </div>
    )
}
