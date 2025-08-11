'use client'

import { Tag } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' }
]

export default function TagGroupDemo() {
    return (
        <Tag.Group items={items} label='Linux Distros' selectionMode='multiple'>
            {(item) => <Tag>{item.name}</Tag>}
        </Tag.Group>
    )
}
