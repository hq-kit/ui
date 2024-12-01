'use client'

import * as React from 'react'

import { IconFullscreen, IconMonitor, IconSmartphone, IconTablet } from 'hq-icons'

import FileExplorer from '@/components/mdx/file-explorer'
import PreviewContent from '@/components/mdx/preview-content'
import { buttonVariants, cn, Link, Tabs, Toggle } from '@/components/ui'

type screenWidthType = 'max-w-none' | 'max-w-3xl' | 'max-w-sm'

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
    page: string
    className?: string
    height?: number
    zoomOut?: boolean
}

export default function Block({
    page,
    zoomOut = true,
    height = 768,
    className,
    ...props
}: BlockProps) {
    const [screenWidth, setScreenWidth] = React.useState<screenWidthType>('max-w-none')

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
                            'relative bg-background',
                            'flex min-h-56 items-center justify-center lg:min-h-80'
                        )}
                    >
                        <div className='absolute hidden sm:-top-14 right-0 sm:flex gap-1 [&_.btn]:!size-8'>
                            <Link
                                target='_blank'
                                className={buttonVariants({ size: 'icon', variant: 'outline' })}
                                href={`/${page}`}
                            >
                                <IconFullscreen />
                            </Link>
                            <Toggle
                                variant='solid'
                                size='icon'
                                isSelected={screenWidth === 'max-w-sm'}
                                onChange={() => setScreenWidth('max-w-sm')}
                            >
                                <IconSmartphone />
                            </Toggle>
                            <Toggle
                                variant='solid'
                                size='icon'
                                isSelected={screenWidth === 'max-w-3xl'}
                                onChange={() => setScreenWidth('max-w-3xl')}
                            >
                                <IconTablet />
                            </Toggle>
                            <Toggle
                                variant='solid'
                                size='icon'
                                isSelected={screenWidth === 'max-w-none'}
                                onChange={() => setScreenWidth('max-w-none')}
                            >
                                <IconMonitor />
                            </Toggle>
                        </div>
                        <PreviewContent
                            height={height}
                            zoomOut={zoomOut}
                            component={page}
                            className={screenWidth}
                        />
                    </div>
                </Tabs.Content>
                <Tabs.Content id='code'>
                    <FileExplorer style={{ height: height * 0.6 }} page={page} />
                </Tabs.Content>
            </Tabs>
        </div>
    )
}
