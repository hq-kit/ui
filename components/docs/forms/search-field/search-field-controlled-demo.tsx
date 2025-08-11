'use client'

import { useState } from 'react'
import { SearchField } from '@/components/ui'

export default function SearchFieldControlledDemo() {
    const [value, setValue] = useState('')
    return (
        <div className='space-y-2'>
            <SearchField className='mb-2' onChange={setValue} value={value} />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
