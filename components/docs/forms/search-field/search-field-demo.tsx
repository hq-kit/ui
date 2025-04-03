'use client'

import { SearchField } from '@/components/ui'

export default function SearchFieldDemo() {
    return (
        <div className='flex flex-col sm:flex-row gap-2'>
            <SearchField label='Basic' />
            <SearchField isPending label='Pending' />
            <SearchField isReadOnly label='Readonly' />
            <SearchField isInvalid label='Invalid' />
            <SearchField isDisabled label='Disabled' />
        </div>
    )
}
