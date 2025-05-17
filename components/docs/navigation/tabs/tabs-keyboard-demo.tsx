'use client'

import { Collection } from 'react-aria-components'

import { Tabs } from '@/components/ui'

const withArrowItems = [
    { id: 1, title: 'Use', content: 'This is the first content' },
    { id: 2, title: 'Left or Right Arrow', content: 'This is the second content' },
    { id: 3, title: 'To Switch', content: 'This is the third content' },
    { id: 4, title: 'The Tabs', content: 'This is the fourth content' }
]
const manualItems = [
    { id: 1, title: 'Use', content: 'This is the first content' },
    { id: 2, title: 'Space or Enter', content: 'This is the second content' },
    { id: 3, title: 'To Switch', content: 'This is the third content' },
    { id: 4, title: 'The Tabs', content: 'This is the fourth content' }
]

export default function TabsKeyboardDemo() {
    return (
        <div className='space-y-6'>
            <Tabs aria-label='Project Management'>
                <Tabs.List items={withArrowItems}>{(item) => <Tabs.Label>{item.title}</Tabs.Label>}</Tabs.List>
                <Collection items={withArrowItems}>
                    {(item) => <Tabs.Content key={item.id}>{item.content}</Tabs.Content>}
                </Collection>
            </Tabs>
            <Tabs keyboardActivation='manual' aria-label='Project Management'>
                <Tabs.List items={manualItems}>{(item) => <Tabs.Label>{item.title}</Tabs.Label>}</Tabs.List>
                <Collection items={manualItems}>
                    {(item) => <Tabs.Content key={item.id}>{item.content}</Tabs.Content>}
                </Collection>
            </Tabs>
        </div>
    )
}
