'use client'

import { Tag } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' }
]
export default function TagGroupVariantDemo() {
    return (
        <div className='max-w-sm space-y-6'>
            <Tag.Group variant='primary' label='Primary' items={items} selectionMode='multiple'>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
            <Tag.Group variant='secondary' label='Secondary' items={items} selectionMode='multiple'>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
            <Tag.Group variant='danger' label='Danger' items={items} selectionMode='multiple'>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
        </div>
    )
}
