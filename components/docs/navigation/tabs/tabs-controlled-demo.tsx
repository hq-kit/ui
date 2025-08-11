'use client'

import { useState } from 'react'
import { Collection, type Key } from 'react-aria-components'
import { Tabs } from '@/components/ui'

const items = [
    { id: 1, title: 'Overview', content: 'This is the overview tab content.' },
    { id: 2, title: 'Features', content: 'Details about the features are listed here.' },
    { id: 3, title: 'Pricing', content: 'Find the pricing information on this tab.' },
    { id: 4, title: 'Reviews', content: 'Read user reviews and ratings here.' }
]

export default function TabsControlledDemo() {
    const [selected, setSelected] = useState<Key>(1)
    return (
        <div className='space-y-6'>
            <Tabs aria-label='Project Management' onSelectionChange={setSelected} selectedKey={selected}>
                <Tabs.List items={items}>{(item) => <Tabs.Label>{item.title}</Tabs.Label>}</Tabs.List>
                <Collection items={items}>
                    {(item) => <Tabs.Content key={item.id}>{item.content}</Tabs.Content>}
                </Collection>
            </Tabs>
            <code>selected: {JSON.stringify(selected)}</code>
        </div>
    )
}
