'use client'

import { Tag } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu', active: true },
    { id: 2, name: 'Debian', active: false },
    { id: 3, name: 'Fedora', active: true },
    { id: 4, name: 'Arch', active: false }
]

export default function TagGroupDisabledDemo() {
    return (
        <div className='space-y-6'>
            <Tag.Group
                disabledKeys={items.filter((item) => !item.active).map((item) => item.id)}
                label='Disabled Key'
                selectionMode='multiple'
                items={items}
            >
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>

            <Tag.Group label='Disabled by Tag' selectionMode='multiple' items={items}>
                {(item) => <Tag isDisabled={!item.active}>{item.name}</Tag>}
            </Tag.Group>
        </div>
    )
}
