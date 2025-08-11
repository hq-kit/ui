'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Menu } from '@/components/ui'

const items = [
    { id: 1, name: 'Recent Files' },
    { id: 2, name: 'Downloads' },
    { id: 3, name: 'Documents' },
    { id: 4, name: 'Music' },
    { id: 5, name: 'Pictures' },
    { id: 6, name: 'Videos' }
]

export default function MultipleMenuDemo() {
    const [selected, setSelected] = useState<Selection>(new Set([1, 2]))
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content
                items={items}
                onSelectionChange={setSelected}
                selectedKeys={selected}
                selectionMode='multiple'
            >
                {(item) => (
                    <Menu.Item id={item.id} textValue={item.name}>
                        <Menu.Label>{item.name}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
