'use client'
import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { components } from '@/components/docs/generated/components'
import previews from '@/components/docs/generated/previews.json'
import { Description, Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'
import { CLI } from './cli'
import { Code } from './code'

export function Install({ component }: { component: string }) {
    const items: string[] = [component]
    const deps: string[] = ['react-aria-components', '@tabler/icons-react']

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
            <Tabs.List className='mb-2 w-fit'>
                <Tabs.Label id='cli'>CLI</Tabs.Label>
                <Tabs.Label id='manual'>Manual</Tabs.Label>
            </Tabs.List>
            <Tabs.Content className='w-full' id='cli'>
                <CLI command='add' items={component} />
            </Tabs.Content>
            <Tabs.Content className='w-full' id='manual'>
                <CLI command='install' items={deps} />
                <SourceCode component={items} />
            </Tabs.Content>
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
        <section className={cn('space-y-2', withMessage ? 'my-4' : 'my-2')}>
            {withMessage && (
                <Description className='-mt-2 mb-4 max-w-none text-base'>
                    Copy the code below and paste it into your component folder.
                </Description>
            )}
            <Tabs className='mt-2'>
                <Tabs.List className='mb-2 w-fit' items={codeStrings}>
                    {(item) => (
                        <Tabs.Label id={`tab-${item.name}`} key={item.name}>
                            {item.name.includes('demo') ? 'main' : item.name}
                        </Tabs.Label>
                    )}
                </Tabs.List>
                {codeStrings.map((item) => (
                    <Tabs.Content id={`tab-${item.name}`} key={item.name}>
                        <Code code={item.code} filename={`components/ui/${item.name}.tsx`} lang='tsx' />
                    </Tabs.Content>
                ))}
            </Tabs>
        </section>
    )
}
