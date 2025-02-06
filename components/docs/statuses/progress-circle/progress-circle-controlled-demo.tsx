'use client'

import React from 'react'

import { ProgressCircle, Slider } from '@/components/ui'

export default function ProgressCircleControlledDemo() {
    const [value, setValue] = React.useState(10)

    return (
        <div className='flex min-w-56 flex-col items-center gap-y-6'>
            <ProgressCircle aria-label='Progress…' className='size-10' value={value} />
            <Slider label='Track' value={value} onChange={(v) => setValue(v as number)} />
        </div>
    )
}
