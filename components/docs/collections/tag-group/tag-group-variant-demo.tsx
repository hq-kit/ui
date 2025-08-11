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
            <Tag.Group items={items} label='Default' selectionMode='multiple' variant='default'>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
            <Tag.Group items={items} label='Secondary' selectionMode='multiple' variant='secondary'>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
            <Tag.Group items={items} label='Destructive' selectionMode='multiple' variant='destructive'>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
        </div>
    )
}
