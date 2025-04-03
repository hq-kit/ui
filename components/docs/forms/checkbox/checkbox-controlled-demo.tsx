'use client'

import React from 'react'

import { Checkbox } from '@/components/ui'

export default function CheckboxControlledDemo() {
    const [selected, setSelection] = React.useState(false)
    return (
        <div className='space-y-2'>
            <Checkbox isSelected={selected} onChange={setSelection} value='updates'>
                Accept terms and conditions
            </Checkbox>
            <code>selected: {JSON.stringify(selected)}</code>
        </div>
    )
}
