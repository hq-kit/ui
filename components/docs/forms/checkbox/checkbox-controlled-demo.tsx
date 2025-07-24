'use client'

import { Checkbox } from '@/components/ui'
import { useState } from 'react'

export default function CheckboxControlledDemo() {
    const [selected, setSelection] = useState(false)
    return (
        <div className='space-y-2'>
            <Checkbox isSelected={selected} onChange={setSelection} value='updates'>
                Accept terms and conditions
            </Checkbox>
            <code>{JSON.stringify({ selected })}</code>
        </div>
    )
}
