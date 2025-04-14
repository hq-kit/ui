'use client'

import { GridLayout, Virtualizer } from 'react-aria-components'

import { ListBox } from '@/components/ui'

export default function Example() {
    return (
        <Virtualizer
            layout={GridLayout}
            layoutOptions={{
                maxColumns: 1
            }}
        >
            <ListBox
                className='max-h-[200px] overflow-auto'
                aria-label='Virtualized ListBox'
                items={Array.from({ length: 5000 }, (_, i) => ({ id: i, name: `Item ${i + 1}` })).flat()}
            >
                {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
            </ListBox>
        </Virtualizer>
    )
}
