'use client'

import { useState } from 'react'
import type { Selection } from 'react-aria-components'

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
            <Menu.Content items={items} selectionMode='single' selectedKeys={selected} onSelectionChange={setSelected}>
                {(item) => (
                    <Menu.Item id={item.id} textValue={item.name}>
                        <Menu.Details label={item.name} description={item.description} />
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
