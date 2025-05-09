'use client'

import { useState } from 'react'

import { RichTextField } from '@/components/ui'

export default function RichTextFieldControlledMarkdownDemo() {
    const [value, setValue] = useState('')
    return (
        <>
            <RichTextField returnType='markdown' value={value} onChange={setValue} label='Content' className='mb-2' />
            <p className='mt-2'>You have typed: {value ?? '-'}</p>
        </>
    )
}
