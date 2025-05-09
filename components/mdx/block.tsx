'use client'
import { type HTMLAttributes, useState } from 'react'

import { FileExplorer } from '@/components/mdx/file-explorer'
import { Link, Tabs, Toggle, buttonStyle } from '@/components/ui'
import { cn } from '@/lib/utils'
import { IconFullscreen, IconMonitor, IconSmartphone, IconTablet } from 'hq-icons'
import type { Key } from 'react-aria-components'

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
    page: string
    className?: string
    height?: number
    zoomOut: number
}

export function Block({ page, zoomOut = 0.6, height = 768, className, ...props }: BlockProps) {
    const [screenWidth, setScreenWidth] = useState(new Set<Key>(['max-w-none']))

    return (
        <div className={cn('not-prose group relative my-6', className)} {...props}>
            <Tabs aria-label='Blocks'>
                <Tabs.List>
                    <Tabs.Label id='preview'>Preview</Tabs.Label>
                    <Tabs.Label id='code'>Code</Tabs.Label>
                </Tabs.List>
                <Tabs.Content className='w-full' id='preview'>
                    <div
                        className={cn('relative w-full bg-bg', 'flex min-h-56 items-center justify-center lg:min-h-80')}
                    >
                        <div className='sm:-top-12 absolute right-0 z-20 hidden gap-1 sm:flex'>
                            <Link
                                target='_blank'
                                className={buttonStyle({
                                    icon: true,
                                    variant: 'outline',
                                    size: 'sm'
                                })}
                                href={`/${page}`}
                            >
                                <IconFullscreen />
                            </Link>
                            <Toggle.Group
                                size='sm'
                                icon
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
                        <iframe
                            title='Preview'
                            className={cn('relative z-20 w-full rounded-lg border', screenWidth, className)}
                            height={height || 768}
                            style={{ zoom: zoomOut || 1 }}
                            allowFullScreen
                            src={`/${page}`}
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
