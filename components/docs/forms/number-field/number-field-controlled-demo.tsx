'use client'

import { NumberField } from '@/components/ui'
import { useState } from 'react'

export default function NumberFieldControlledDemo() {
    const [value, setValue] = useState<number>(100)
    return (
        <div className='space-y-2'>
            <NumberField label='Size' value={value} onChange={setValue} />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
