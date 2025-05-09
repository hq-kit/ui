'use client'

import { useState } from 'react'

import { Textarea } from '@/components/ui'

export default function TextareaControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <Textarea value={value} onChange={setValue} label='About' />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
