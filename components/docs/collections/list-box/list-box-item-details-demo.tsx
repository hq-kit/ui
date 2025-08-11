'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { ListBox } from '@/components/ui'

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

export default function ListBoxItemDetailsDemo() {
    const [selected, setSelected] = useState<Selection>(new Set([1]))
    return (
        <ListBox
            aria-label='Javascript Frameworks'
            items={items}
            onSelectionChange={setSelected}
            selectedKeys={selected}
            selectionMode='single'
        >
            {(item) => (
                <ListBox.Item id={item.id} textValue={item.name}>
                    <ListBox.Details description={item.description} label={item.name} />
                </ListBox.Item>
            )}
        </ListBox>
    )
}
