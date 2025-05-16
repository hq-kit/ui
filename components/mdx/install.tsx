'use client'

import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'

import { IconBrandReact } from 'hq-icons'
import { Tab, TabList, TabPanel, Tabs } from 'react-aria-components'

import { components } from '@/components/docs/generated/components'
import previews from '@/components/docs/generated/previews.json'
import { Description } from '@/components/ui'
import { cn } from '@/lib/utils'
import { CLI } from './cli'
import { Code } from './code'

export function Install({ component }: { component: string }) {
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
            <TabList className='mb-2 flex w-fit max-w-full cursor-pointer items-center overflow-auto rounded-lg border p-1 text-xs'>
                <Tab
                    className='flex items-center gap-1 rounded-md selected:bg-primary px-2 py-1 selected:text-primary-fg'
                    id='cli'
                >
                    CLI
                </Tab>
                <Tab
                    className='flex items-center gap-1 rounded-md selected:bg-primary px-2 py-1 selected:text-primary-fg'
                    id='manual'
                >
                    Manual
                </Tab>
            </TabList>
            <TabPanel id='cli' className='w-full'>
                <CLI command='add' items={component} />
            </TabPanel>
            <TabPanel id='manual' className='w-full'>
                <CLI command='install' items={deps} />
                <SourceCode component={items} />
            </TabPanel>
        </Tabs>
    )
}

interface SourceCodeProps extends ComponentPropsWithoutRef<'div'> {
    component: string | string[]
    withMessage?: boolean
}

export function SourceCode({ component, withMessage = true }: SourceCodeProps) {
    const [codeStrings, setCodeStrings] = useState<{ name: string; code: string }[]>([])

    useEffect(() => {
        const componentArray = Array.isArray(component) ? component : [component]
        const updatedCodeStrings = componentArray.map((show) => {
            // @ts-expect-error no-type
            const componentData = previews[show]
            if (componentData) {
                return {
                    name: show,
                    code: componentData.raw
                }
            }
            console.error('Component not found:', show)
            return { name: show, code: '' }
        })
        setCodeStrings(updatedCodeStrings)
    }, [component])

    return (
        <section className={cn('not-prose space-y-2', withMessage ? 'my-4' : 'my-2')}>
            {withMessage && (
                <Description className='prose -mt-2 mb-4 max-w-none text-base'>
                    Copy the code below and paste it into your component folder.
                </Description>
            )}
            <Tabs className='mt-2 gap-0'>
                <TabList
                    items={codeStrings}
                    className='mb-2 flex w-fit max-w-full cursor-pointer items-center overflow-auto rounded-lg border p-1 text-xs'
                >
                    {(item) => (
                        <Tab
                            className='flex items-center gap-1 rounded-md selected:bg-primary px-2 py-1 selected:text-primary-fg'
                            key={item.name}
                            id={`tab-${item.name}`}
                        >
                            <IconBrandReact />
                            {item.name.includes('demo') ? 'main' : item.name}.tsx
                        </Tab>
                    )}
                </TabList>
                {codeStrings.map((item) => (
                    <TabPanel key={item.name} id={`tab-${item.name}`}>
                        <Code code={item.code} />
                    </TabPanel>
                ))}
            </Tabs>
        </section>
    )
}
