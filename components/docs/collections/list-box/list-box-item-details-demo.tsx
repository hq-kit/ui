'use client'

import { ListBox } from '@/components/ui'
import { useState } from 'react'
import type { Selection } from 'react-aria-components'

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
            selectedKeys={selected}
            onSelectionChange={setSelected}
            items={items}
            aria-label='Javascript Frameworks'
            selectionMode='single'
        >
            {(item) => (
                <ListBox.Item id={item.id} textValue={item.name}>
                    <ListBox.Details label={item.name} description={item.description} />
                </ListBox.Item>
            )}
        </ListBox>
    )
}
