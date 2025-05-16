'use client'

import { useState } from 'react'

import { IconFullscreen, IconMonitor, IconSmartphone, IconTablet } from 'hq-icons'
import { type Key, TabPanel } from 'react-aria-components'

import { Link, Separator, Toggle, buttonStyle } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Fleet } from './fleet'
import { TabsSwitcher } from './tabs-switcher'

export function Block({ page }: { page: string }) {
    const [screenWidth, setScreenWidth] = useState(new Set<Key>(['max-w-none']))
    return (
        <>
            <div className='-mb-7 flex items-center gap-3 pl-28 text-muted-fg text-sm capitalize'>
                <Separator orientation='vertical' className='h-6' /> {page.split('/').splice(1).join(' ')}
            </div>
            <TabsSwitcher>
                <TabPanel className='mt-2' id='preview'>
                    <div className={cn('relative w-full bg-bg', 'flex min-h-56 items-center lg:min-h-80')}>
                        <div className='sm:-top-10 absolute right-0 z-20 hidden gap-1 sm:flex'>
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
                            <Link
                                target='_blank'
                                className={buttonStyle({
                                    icon: true,
                                    variant: 'outline',
                                    size: 'sm'
                                })}
                                href={`/block/${page}`}
                            >
                                <IconFullscreen />
                            </Link>
                        </div>
                        <iframe
                            title='Preview'
                            className={cn(
                                'relative z-20 w-full overflow-hidden rounded-lg border',
                                [...screenWidth].flat()
                            )}
                            height={768}
                            style={{ zoom: 0.95 }}
                            allowFullScreen
                            src={`/block/${page}`}
                        />
                    </div>
                </TabPanel>
                <TabPanel id='code'>
                    <Fleet page={page} />
                </TabPanel>
            </TabsSwitcher>
        </>
    )
}
