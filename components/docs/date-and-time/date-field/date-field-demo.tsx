'use client'

import { DateField } from '@/components/ui'

export default function DateFieldDemo() {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <DateField label='Default' />
            <DateField label='Readonly' isReadOnly />
            <DateField label='Invalid' isInvalid />
            <DateField label='Disabled' isDisabled />
        </div>
    )
}
