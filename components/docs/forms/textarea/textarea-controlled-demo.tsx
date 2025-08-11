'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui'

export default function TextareaControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <Textarea label='About' onChange={setValue} value={value} />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
