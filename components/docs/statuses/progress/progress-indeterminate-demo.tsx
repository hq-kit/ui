'use client'

import { Progress } from '@/components/ui'

export default function ProgressIndeterminateDemo() {
    return (
        <div className='flex flex-col gap-4 items-center'>
            <Progress label='Loading…' isIndeterminate />
            <Progress circle label='Loading…' isIndeterminate />
        </div>
    )
}
