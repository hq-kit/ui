'use client'

import { useState } from 'react'

import { Radio, RadioGroup } from '@/components/ui'

export default function RadioGroupControlledDemo() {
    const [selected, setSelected] = useState('')
    return (
        <div className='space-y-4'>
            <RadioGroup label='Plan' value={selected} onChange={setSelected}>
                <Radio value='bronze'>Bronze</Radio>
                <Radio value='silver'>Silver</Radio>
                <Radio value='gold'>Gold</Radio>
                <Radio value='platinum'>Platinum</Radio>
            </RadioGroup>
            <code>selected: {JSON.stringify(selected)}</code>
        </div>
    )
}
