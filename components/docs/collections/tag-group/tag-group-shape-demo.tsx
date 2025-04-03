'use client'

import { Tag } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' }
]

export default function TagGroupShapeDemo() {
    return (
        <div className='space-y-6'>
            <Tag.Group shape='square' label='Square' selectionMode='multiple' items={items}>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
            <Tag.Group shape='circle' label='Circle' selectionMode='multiple' items={items}>
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>
        </div>
    )
}
