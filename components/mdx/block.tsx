'use client'

import { Link, Toggle, buttonStyle } from '@/components/ui'
import { cn } from '@/lib/utils'

import { IconBrowserMaximize, IconDeviceDesktop, IconDeviceMobile, IconDeviceTablet } from '@tabler/icons-react'
import { useState } from 'react'
import { type Key, TabPanel } from 'react-aria-components'
import { Fleet } from './fleet'
import { TabsSwitcher } from './tabs-switcher'

export function Block({ page }: { page: string }) {
    const [screenWidth, setScreenWidth] = useState(new Set<Key>(['max-w-none']))
    return (
        <div className='my-4'>
            <TabsSwitcher>
                <TabPanel className='my-2' id='preview'>
                    <div className={cn('relative w-full bg-background', 'flex min-h-56 items-center lg:min-h-80')}>
                        <div className='sm:-top-10 absolute right-0 z-20 hidden gap-1 sm:flex'>
                            <Toggle.Group
                                size='sm'
                                icon
                                selectionMode='single'
                                selectedKeys={screenWidth}
                                onSelectionChange={setScreenWidth}
                            >
                                <Toggle id='max-w-sm'>
                                    <IconDeviceMobile />
                                </Toggle>
                                <Toggle id='max-w-3xl'>
                                    <IconDeviceTablet />
                                </Toggle>
                                <Toggle id='max-w-none'>
                                    <IconDeviceDesktop />
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
                                <IconBrowserMaximize />
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
        </div>
    )
}
