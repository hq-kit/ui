'use client'

import { Progress } from '@/components/ui'

export default function ProgressIndeterminateDemo() {
    return (
        <div className='flex flex-col items-center gap-4'>
            <Progress isIndeterminate label='Loading…' />
            <Progress circle isIndeterminate label='Loading…' />
        </div>
    )
}
