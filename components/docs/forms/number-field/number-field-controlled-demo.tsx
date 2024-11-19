'use client'

import React from 'react'

import { Description, NumberField } from '@/components/ui'

export default function NumberFieldControlledDemo() {
    const [number, setNumber] = React.useState(1280)
    return (
        <div>
            <NumberField label='Width' value={number} onChange={setNumber} />

            <Description className='mt-2 block [&>strong]:text-foreground'>
                You have typed: <strong>{number ?? '-'}</strong>
            </Description>
        </div>
    )
}
