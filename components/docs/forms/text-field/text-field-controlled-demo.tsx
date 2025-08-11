'use client'

import { useState } from 'react'
import { TextField } from '@/components/ui'

export default function TextFieldControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <TextField label='Name' onChange={setValue} value={value} />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
