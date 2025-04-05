'use client'

import * as React from 'react'

import { IconFullscreen, IconMonitor, IconSmartphone, IconTablet } from 'hq-icons'
import type { Key } from 'react-aria-components'

import FileExplorer from '@/components/mdx/file-explorer'
import PreviewContent from '@/components/mdx/preview-content'
import { buttonStyles, Link, Tabs, Toggle } from '@/components/ui'
import { cn } from '@/lib/utils'

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
    page: string
    className?: string
    height?: number
    zoomOut: number
}

export default function Block({
    page,
    zoomOut = 0.6,
    height = 768,
    className,
    ...props
}: BlockProps) {
    const [screenWidth, setScreenWidth] = React.useState(new Set<Key>(['max-w-none']))

    return (
        <div className={cn('not-prose group relative my-6', className)} {...props}>
            <Tabs aria-label='Blocks'>
                <Tabs.List>
                    <Tabs.Label id='preview'>Preview</Tabs.Label>
                    <Tabs.Label id='code'>Code</Tabs.Label>
                </Tabs.List>
                <Tabs.Content className='w-full' id='preview'>
                    <div
                        className={cn(
                            'bg-bg relative w-full',
                            'flex min-h-56 items-center justify-center lg:min-h-80'
                        )}
                    >
                        <div className='absolute right-0 hidden sm:flex gap-1 sm:-top-14 z-50'>
                            <Link
                                target='_blank'
                                className={buttonStyles({
                                    size: 'icon',
                                    variant: 'outline',
                                    className: '!size-9'
                                })}
                                href={`/${page}`}
                            >
                                <IconFullscreen />
                            </Link>
                            <Toggle.Group
                                size='sm'
                                selectionMode='single'
                                selectedKeys={screenWidth}
                                onSelectionChange={setScreenWidth}
                            >
                                <Toggle id='max-w-sm'>
                                    <IconSmartphone />
                                </Toggle>
                                <Toggle id='max-w-3xl'>
                                    <IconTablet />
                                </Toggle>
                                <Toggle id='max-w-none'>
                                    <IconMonitor />
                                </Toggle>
                            </Toggle.Group>
                        </div>
                        <PreviewContent
                            height={height}
                            zoomOut={zoomOut}
                            component={page}
                            className={[...screenWidth].join(' ')}
                        />
                    </div>
                </Tabs.Content>
                <Tabs.Content id='code'>
                    <FileExplorer style={{ height: height * zoomOut }} page={page} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
