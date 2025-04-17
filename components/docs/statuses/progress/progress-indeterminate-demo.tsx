'use client'

import { Progress } from '@/components/ui'

export default function ProgressIndeterminateDemo() {
    return (
        <div className='flex flex-col items-center gap-4'>
            <Progress label='Loading…' isIndeterminate />
            <Progress circle label='Loading…' isIndeterminate />
        </div>
    )
}
