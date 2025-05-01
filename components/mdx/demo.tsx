'use client'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import { IconLoaderCircle } from 'hq-icons'
import { Fragment, type HTMLAttributes, Suspense } from 'react'

import { Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Code } from './code'

interface DemoProps extends HTMLAttributes<HTMLDivElement> {
    component: keyof typeof jsonPreviews
    className?: string
    center?: boolean
}

export function Demo({ component, center = false, ...props }: DemoProps) {
    const Preview = previews[component] ? previews[component].component : Fragment
    const codeString = jsonPreviews[component].raw ?? ''
    return (
        <div className='relative my-4' {...props}>
            <Tabs aria-label='Component'>
                <Tabs.List>
                    <Tabs.Label id='preview'>Preview</Tabs.Label>
                    <Tabs.Label id='code'>Code</Tabs.Label>
                </Tabs.List>
                <Tabs.Content id='preview'>
                    <div
                        className={cn(
                            'not-prose relative w-full gap-4 overflow-auto rounded-lg border border-muted border-dashed bg-bg p-6',
                            center && 'grid min-h-20 place-content-center py-6 sm:py-12'
                        )}
                    >
                        <Suspense
                            fallback={
                                <div className='flex w-full items-center justify-center text-muted-fg text-sm'>
                                    <IconLoaderCircle className='size-12 animate-spin' />
                                </div>
                            }
                        >
                            <Preview />
                        </Suspense>
                    </div>
                </Tabs.Content>
                <Tabs.Content className='not-prose' id='code'>
                    <Code code={codeString} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
