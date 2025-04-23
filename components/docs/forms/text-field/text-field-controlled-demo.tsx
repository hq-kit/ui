'use client'

import { useState } from 'react'

import { TextField } from '@/components/ui'

export default function TextFieldControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <TextField value={value} onChange={setValue} label='Name' />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
