'use client'

import { components } from '@/components/docs/generated/components'
import CLI from '@/components/mdx/cli'
import SourceCode from '@/components/mdx/source-code'
import { Tabs } from '@/components/ui'

export default function Install({ component }: { component: string }) {
    const items: string[] = [component]
    const deps: string[] = ['react-aria-components', 'hq-icons']

    const item = components.find((c) => c.name === component)
    if (!item) {
        return null
    }
    if (item.deps) {
        for (const dep of item.deps) {
            if (!deps.includes(dep)) {
                deps.push(dep)
            }
        }
    }
    if (item.children) {
        for (const child of item.children) {
            if (!items.includes(child.name)) {
                items.push(child.name)
            }
            const childItem = components.find((c) => c.name === child.name)
            if (childItem) {
                if (childItem.deps) {
                    for (const dep of childItem.deps) {
                        if (!deps.includes(dep)) {
                            deps.push(dep)
                        }
                    }
                }
                if (childItem.children) {
                    for (const grandchild of childItem.children) {
                        if (!items.includes(grandchild.name)) {
                            items.push(grandchild.name)
                        }
                    }
                }
            }
        }
    }
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
