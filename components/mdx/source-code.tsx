'use client'

import { IconBrandReact } from 'hq-icons'
import { type HTMLAttributes, useEffect, useState } from 'react'

import previews from '@/components/docs/generated/previews.json'
import Code from '@/components/mdx/code'
import { Description, Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'

interface SourceCodeProps extends HTMLAttributes<HTMLDivElement> {
    component: string | string[]
    withMessage?: boolean
}

export default function SourceCode({ component, withMessage = true }: SourceCodeProps) {
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
                <Tabs.List items={codeStrings} className='max-w-full overflow-auto'>
                    {(item) => (
                        <Tabs.Label key={item.name} id={`tab-${item.name}`}>
                            <IconBrandReact />
                            {item.name.includes('demo') ? 'main' : item.name}.tsx
                        </Tabs.Label>
                    )}
                </Tabs.List>
                {codeStrings.map((item) => (
                    <Tabs.Content key={item.name} id={`tab-${item.name}`}>
                        <Code copyButton code={item.code} />
                    </Tabs.Content>
                ))}
            </Tabs>
        </section>
    )
}
