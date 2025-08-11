'use client'

import { ColorField } from '@/components/ui'

export default function ColorFieldDemo() {
    return (
        <div className='flex flex-wrap gap-2'>
            <ColorField label='Default' placeholder='#FAFAFA' />
            <ColorField isReadOnly label='Readonly' placeholder='#FAFAFA' />
            <ColorField isInvalid label='Invalid' placeholder='#FAFAFA' />
            <ColorField isDisabled label='Disabled' placeholder='#FAFAFA' />
            <ColorField isLoading label='Loading' placeholder='#FAFAFA' />
        </div>
    )
}
