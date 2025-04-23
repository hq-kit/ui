'use client'

import { Time } from '@internationalized/date'
import { useState } from 'react'

import { TimeField } from '@/components/ui'

export default function TimeFieldValidationDemo() {
    const [value, setValue] = useState(new Time(11, 45))
    return (
        <div className='space-y-6'>
            <TimeField label='Event time' value={value} onChange={(v) => setValue(v!)} />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
