'use client'

import { SearchField } from '@/components/ui'
import { useState } from 'react'

export default function SearchFieldControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <SearchField value={value} onChange={setValue} className='mb-2' />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
