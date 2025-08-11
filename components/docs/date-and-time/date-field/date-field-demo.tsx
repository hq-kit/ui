'use client'

import { DateField } from '@/components/ui'

export default function DateFieldDemo() {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <DateField label='Default' />
            <DateField isReadOnly label='Readonly' />
            <DateField isInvalid label='Invalid' />
            <DateField isDisabled label='Disabled' />
        </div>
    )
}
