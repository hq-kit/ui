'use client'

import { previews } from '@/components/docs/generated/previews'
import jsonPreviews from '@/components/docs/generated/previews.json'
import { cn } from '@/lib/utils'
import { IconLoaderCircle } from 'hq-icons'
import { Fragment, type HTMLAttributes, Suspense } from 'react'

import { TabPanel } from 'react-aria-components'
import { Code } from './code'
import { TabsSwitcher } from './tabs-switcher'

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
            <TabsSwitcher aria-label='Component'>
                <TabPanel id='preview'>
                    <div
                        className={cn(
                            'not-prose **:not-prose relative w-full gap-4 overflow-auto rounded-lg border p-6',
                            center && 'grid min-h-20 place-content-center py-6 sm:py-12'
                        )}
                    >
                        <Suspense
                            fallback={
                                <div className='flex w-full items-center justify-center text-muted-foreground text-sm'>
                                    <IconLoaderCircle className='size-12 animate-spin' />
                                </div>
                            }
                        >
                            <Preview />
                        </Suspense>
                    </div>
                </TabPanel>
                <TabPanel id='code'>
                    <Code filename={component.split('/').pop()} code={codeString} />
                </TabPanel>
            </TabsSwitcher>
        </div>
    )
}
