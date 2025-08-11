'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Menu } from '@/components/ui'

const items = [
    {
        id: 1,
        name: 'React',
        description: 'Component-based JavaScript library'
    },
    {
        id: 2,
        name: 'Angular',
        description: 'Comprehensive TypeScript-based framework'
    },
    {
        id: 3,
        name: 'Vue.Js',
        description: 'Flexible and progressive UI framework'
    }
]

export default function MenuItemDetailsDemo() {
    const [selected, setSelected] = useState<Selection>(new Set([1]))

    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content items={items} onSelectionChange={setSelected} selectedKeys={selected} selectionMode='single'>
                {(item) => (
                    <Menu.Item id={item.id} textValue={item.name}>
                        <Menu.Details description={item.description} label={item.name} />
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
