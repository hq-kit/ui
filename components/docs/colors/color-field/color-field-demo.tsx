'use client'

import { ColorField } from '@/components/ui'

export default function ColorFieldDemo() {
    return (
        <div className='flex flex-wrap gap-2'>
            <ColorField placeholder='#FAFAFA' label='Default' />
            <ColorField placeholder='#FAFAFA' label='Readonly' isReadOnly />
            <ColorField placeholder='#FAFAFA' label='Invalid' isInvalid />
            <ColorField placeholder='#FAFAFA' label='Disabled' isDisabled />
            <ColorField placeholder='#FAFAFA' label='Loading' isLoading />
        </div>
    )
}
