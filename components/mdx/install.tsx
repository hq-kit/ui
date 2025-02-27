'use client'

import CLI from '@/components/mdx/cli'
import Components from '@/components/mdx/components.json'
import SourceCode from '@/components/mdx/source-code'
import { Tabs } from '@/components/ui'

export default function Install({ component }: { component: string }) {
    const item = Components.find((c) => c.name === component)
    if (!item) {
        return null
    }
    const items: string[] = [item.name]
    if (item.components) items.push(...item.components)

    const deps = ['react-aria-components', 'hq-icons']
    if (item.deps) deps.push(...item.deps)

    return (
        <Tabs aria-label='Packages' className='my-6'>
            <Tabs.List>
                <Tabs.Label id='cli'>CLI</Tabs.Label>
                <Tabs.Label id='manual'>Manual</Tabs.Label>
            </Tabs.List>
            <Tabs.Content id='cli' className='w-full'>
                <CLI command='add' items={component} />
            </Tabs.Content>
            <Tabs.Content id='manual' className='w-full'>
                <CLI command='install' items={deps} />
                <SourceCode component={items} />
            </Tabs.Content>
        </Tabs>
    )
}
