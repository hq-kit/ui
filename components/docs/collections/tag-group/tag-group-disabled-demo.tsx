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
                items={items}
                label='Disabled Key'
                selectionMode='multiple'
            >
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>

            <Tag.Group items={items} label='Disabled by Tag' selectionMode='multiple'>
                {(item) => <Tag isDisabled={!item.active}>{item.name}</Tag>}
            </Tag.Group>
        </div>
    )
}
