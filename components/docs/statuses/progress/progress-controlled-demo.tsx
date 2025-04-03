'use client'

import React from 'react'

import { Progress, Slider } from '@/components/ui'

export default function ProgressControlledDemo() {
    const [value, setValue] = React.useState(10)

    return (
        <div className='flex flex-col items-center gap-4'>
            <Progress circle label='Progress…' value={value} />
            <Progress label='Progress…' value={value} />
            <Slider label='Control' value={value} onChange={(v) => setValue(v as number)} />
        </div>
    )
}
