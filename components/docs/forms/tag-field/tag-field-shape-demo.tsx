'use client'

import { useListData } from 'react-stately'

import { TagField } from '@/components/ui'

export default function TagFieldShapeDemo() {
    const selectedItems = useListData({
        initialItems: [
            {
                id: 1,
                name: 'Laravel'
            },
            {
                id: 2,
                name: 'Inertia.js'
            }
        ]
    })

    return (
        <div className='space-y-2'>
            <TagField shape='rounded' className='max-w-xs' label='Rounded' list={selectedItems} />
            <TagField shape='sharp' className='max-w-xs' label='Sharp' list={selectedItems} />
            <TagField shape='circle' className='max-w-xs' label='Circle' list={selectedItems} />
        </div>
    )
}
