'use client'

import { useListData } from 'react-stately'

import { TagField } from '@/components/ui'

export default function TagFieldVariantDemo() {
    const selectedItems = useListData({
        initialItems: [
            {
                id: 1,
                name: 'Laravel'
            },
            {
                id: 2,
                name: 'Inertia.js'
            },
            {
                id: 3,
                name: 'React'
            }
        ]
    })

    return (
        <div className='space-y-2'>
            <TagField variant='primary' className='max-w-xs' label='Primary' list={selectedItems} />
            <TagField
                variant='secondary'
                className='max-w-xs'
                label='Secondary'
                list={selectedItems}
            />
            <TagField variant='dark' className='max-w-xs' label='Dark' list={selectedItems} />
        </div>
    )
}
