'use client'

import { Textarea } from '@/components/ui'
import { useState } from 'react'

export default function TextareaControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <Textarea value={value} onChange={setValue} label='About' />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
