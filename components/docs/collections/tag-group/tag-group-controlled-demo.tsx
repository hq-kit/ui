'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'

import { Tag } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' }
]

export default function TagGroupControlledDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set([]))
    return (
        <div className='space-y-6'>
            <Tag.Group
                label='Linux Distros'
                selectionMode='multiple'
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={items}
            >
                {(item) => <Tag>{item.name}</Tag>}
            </Tag.Group>

            <code>selected: {JSON.stringify(Array.from(selected))}</code>
        </div>
    )
}
