'use client'

import { ProgressCircle } from '@/components/ui'

export default function ProgressCircleColorDemo() {
    return (
        <div className='flex gap-2'>
            <ProgressCircle aria-label='Loading…' isIndeterminate className='text-danger' />
            <ProgressCircle aria-label='Loading…' isIndeterminate className='text-primary' />
            <ProgressCircle aria-label='Loading…' isIndeterminate className='text-warning' />
        </div>
    )
}
