'use client'

import { Collection } from 'react-aria-components'

import { Tabs } from '@/components/ui'

const items = [
    { id: 1, title: 'Overview', content: 'This is the overview tab content.' },
    { id: 2, title: 'Features', content: 'Details about the features are listed here.' },
    { id: 3, title: 'Pricing', content: 'Find the pricing information on this tab.' },
    { id: 4, title: 'Reviews', content: 'Read user reviews and ratings here.' }
]

export default function TabsCollectionsDemo() {
    return (
        <Tabs aria-label='Project Management'>
            <Tabs.List items={items}>{(item) => <Tabs.Label>{item.title}</Tabs.Label>}</Tabs.List>
            <Collection items={items}>{(item) => <Tabs.Content key={item.id}>{item.content}</Tabs.Content>}</Collection>
        </Tabs>
    )
}
