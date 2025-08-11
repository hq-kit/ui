'use client'

import { TimeField } from '@/components/ui'

export default function TimeFieldDemo() {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <TimeField label='Default' />
            <TimeField isReadOnly label='Readonly' />
            <TimeField isInvalid label='Invalid' />
            <TimeField isDisabled label='Disabled' />
        </div>
    )
}
