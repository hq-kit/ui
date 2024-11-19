'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'

import { Description, ListBox } from '@/components/ui'

export default function ListBoxControlledDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set([1]))
    return (
        <>
            <ListBox
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={fruits}
                aria-label='Fruits'
                selectionMode='single'
            >
                {(fruit) => (
                    <ListBox.Item id={fruit.id} textValue={fruit.name}>
                        {fruit.name}
                    </ListBox.Item>
                )}
            </ListBox>

            {selected && (
                <Description className='mt-4 block [&>strong]:font-medium [&>strong]:text-foreground'>
                    Selected: <strong>{selected}</strong>
                </Description>
            )}
        </>
    )
}

const fruits = [
    {
        id: 1,
        name: 'Apple'
    },
    {
        id: 2,
        name: 'Banana'
    },
    {
        id: 3,
        name: 'Orange'
    },
    {
        id: 4,
        name: 'Strawberry'
    },
    {
        id: 5,
        name: 'Grapes'
    },
    {
        id: 6,
        name: 'Mango'
    },
    {
        id: 7,
        name: 'Pineapple'
    }
]
