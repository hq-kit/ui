'use client'

import React from 'react'

import { NumberField } from '@/components/ui'

export default function NumberFieldControlledDemo() {
    const [value, setValue] = React.useState<number>(100)
    return (
        <div className='space-y-2'>
            <NumberField label='Size' value={value} onChange={setValue} />
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}
