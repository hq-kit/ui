'use client'

import { SearchField } from '@/components/ui'

export default function SearchFieldDemo() {
    return (
        <div className='flex flex-col gap-2 sm:flex-row'>
            <SearchField label='Basic' />
            <SearchField isPending label='Pending' />
            <SearchField isReadOnly label='Readonly' />
            <SearchField isInvalid label='Invalid' />
            <SearchField isDisabled label='Disabled' />
        </div>
    )
}
