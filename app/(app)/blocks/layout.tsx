'use client'

import React from 'react'

import {
    IconAppWindowMac,
    IconBrandLinux,
    IconGauge,
    IconPanelLeft,
    IconPanelLeftClose,
    IconPanelLeftDashed,
    IconPanelLeftOpen,
    IconPanelRight,
    IconPanelRightOpen
} from 'hq-icons'
import { usePathname } from 'next/navigation'

import { Link, Sidebar } from '@/components/ui'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Sidebar.Provider>
            <Sidebar variant='inset'>
                <Sidebar.Header>
                    <Link
                        className='flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2'
                        href='/docs/components/layouts/sidebar'
                    >
                        <IconBrandLinux className='size-5' />
                        <strong className='font-medium group-data-[collapsible=dock]:hidden'>
                            Linux
                        </strong>
                    </Link>
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Section>
                        <SidebarItem icon={IconGauge} href='/block/sidebar/sidebar-basic-demo'>
                            Sidebar
                        </SidebarItem>
                    </Sidebar.Section>
                    <Sidebar.Section collapsible title='Variant'>
                        <SidebarItem
                            icon={IconPanelRight}
                            href='/block/sidebar/sidebar-default-demo'
                        >
                            Default
                        </SidebarItem>
                        <SidebarItem
                            icon={IconPanelLeftDashed}
                            href='/block/sidebar/sidebar-floating-demo'
                        >
                            Floating
                        </SidebarItem>
                        <SidebarItem
                            icon={IconAppWindowMac}
                            href='/block/sidebar/sidebar-inset-demo'
                        >
                            Inset
                        </SidebarItem>
                    </Sidebar.Section>
                    <Sidebar.Section collapsible title='Collapsible'>
                        <SidebarItem
                            icon={IconPanelLeftClose}
                            href='/block/sidebar/sidebar-dock-demo'
                        >
                            Dock
                        </SidebarItem>
                        <Sidebar.Item
                            icon={IconPanelRightOpen}
                            href='/block/sidebar/sidebar-off-canvas-demo'
                        >
                            Off Canvas
                        </Sidebar.Item>
                        <Sidebar.Item icon={IconPanelLeft} href='/block/sidebar/sidebar-fixed-demo'>
                            Fixed
                        </Sidebar.Item>
                    </Sidebar.Section>
                </Sidebar.Content>
            </Sidebar>
            <header className='md:sticky ml-12 md:ml-0 z-50 absolute justify-between sm:justify-start top-0 md:top-16 h-[3.57rem] px-4 flex items-center gap-x-2'>
                <Sidebar.Trigger className='-mx-2'>
                    <IconPanelLeftOpen />
                </Sidebar.Trigger>
            </header>
            <Sidebar.Inset>
                <div className='p-4 md:p-6'>{children}</div>
            </Sidebar.Inset>
        </Sidebar.Provider>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    const pathname = usePathname()
    return <Sidebar.Item isCurrent={pathname === props.href} icon={Icon} {...props} />
}
