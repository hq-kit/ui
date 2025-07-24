'use client'

import { Tag } from '@/components/ui'
import { useListData } from 'react-stately'

export default function TagGroupWithRemoveDemo() {
    const list = useListData({
        initialItems: [
            { id: 1, name: 'Ubuntu' },
            { id: 2, name: 'Debian' },
            { id: 3, name: 'Fedora' },
            { id: 4, name: 'Arch' }
        ]
    })

    return (
        <Tag.Group
            label='Linux Distros'
            selectionMode='multiple'
            onRemove={(keys) => list.remove(...keys)}
            items={list.items}
        >
            {(item) => <Tag>{item.name}</Tag>}
        </Tag.Group>
    )
}
