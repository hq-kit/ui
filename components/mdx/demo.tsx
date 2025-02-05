'use client'

import * as React from 'react'

import { IconLoaderCircle } from 'hq-icons'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import Code from '@/components/mdx/code'
import { Tabs, cn } from '@/components/ui'

interface DemoProps extends React.HTMLAttributes<HTMLDivElement> {
    component: string
    className?: string
    center?: boolean
}

export default function Demo({ component, className, center = false, ...props }: DemoProps) {
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
                <Tabs.Content className='w-full' id='preview'>
                    <div
                        className={cn(
                            'border-muted bg-bg relative w-full gap-4 rounded-lg border border-dashed p-6',
                            center &&
                                'preview flex min-h-20 items-center justify-center py-6 sm:py-12'
                        )}
                    >
                        <React.Suspense
                            fallback={
                                <div className='text-muted-fg flex w-full items-center justify-center text-sm'>
                                    <IconLoaderCircle className='size-12 animate-spin' />
                                </div>
                            }
                        >
                            <div className={cn('not-prose', className)}>
                                <Preview />
                            </div>
                        </React.Suspense>
                    </div>
                </Tabs.Content>
                <Tabs.Content className='not-prose' id='code'>
                    <Code code={codeString} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
