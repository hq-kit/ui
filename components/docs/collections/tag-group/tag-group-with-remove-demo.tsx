'use client'

import { useListData } from 'react-stately'
import { Tag } from '@/components/ui'

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
            items={list.items}
            label='Linux Distros'
            onRemove={(keys) => list.remove(...keys)}
            selectionMode='multiple'
        >
            {(item) => <Tag>{item.name}</Tag>}
        </Tag.Group>
    )
}
