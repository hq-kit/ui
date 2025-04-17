'use client'

import React from 'react'

import { IconLoaderCircle } from 'hq-icons'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import Code from '@/components/mdx/code'
import { Tabs } from '@/components/ui'
import { cn } from '@/lib/utils'

interface DemoProps extends React.HTMLAttributes<HTMLDivElement> {
    component: string
    className?: string
    center?: boolean
}

export default function Demo({ component, center = false, ...props }: DemoProps) {
    const Preview = previews[component] ? previews[component].component : React.Fragment
    // @ts-expect-error no-type
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
                        <React.Suspense
                            fallback={
                                <div className='flex w-full items-center justify-center text-muted-fg text-sm'>
                                    <IconLoaderCircle className='size-12 animate-spin' />
                                </div>
                            }
                        >
                            <Preview />
                        </React.Suspense>
                    </div>
                </Tabs.Content>
                <Tabs.Content className='not-prose' id='code'>
                    <Code copyButton code={codeString} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
