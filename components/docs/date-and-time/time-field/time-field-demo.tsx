'use client'

import { TimeField } from '@/components/ui'

export default function TimeFieldDemo() {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <TimeField label='Default' />
            <TimeField label='Readonly' isReadOnly />
            <TimeField label='Invalid' isInvalid />
            <TimeField label='Disabled' isDisabled />
        </div>
    )
}
