'use client'

import React from 'react'

import {
    IconAppWindowMac,
    IconBrandLinux,
    IconChevronDown,
    IconCircleUser,
    IconGauge,
    IconLogOut,
    IconMoon,
    IconPanelLeft,
    IconPanelLeftClose,
    IconPanelLeftDashed,
    IconPanelRight,
    IconPanelRightOpen,
    IconSun
} from 'hq-icons'
import { usePathname } from 'next/navigation'

import { useTheme } from '@/components/providers'
import { Avatar, Button, Link, Menu, Sidebar, useSidebar } from '@/components/ui'

export default function AppSidebar({ ...props }) {
    const { theme, setTheme } = useTheme()
    const { state } = useSidebar()
    const collapsed = state === 'collapsed'
    return (
        <Sidebar {...props}>
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
                    <SidebarItem
                        icon={IconGauge}
                        href='/block/sidebar/sidebar-basic-demo'
                        textValue='Sidebar'
                    />
                </Sidebar.Section>
                <Sidebar.Section title='Variant'>
                    <SidebarItem
                        icon={IconPanelRight}
                        href='/block/sidebar/sidebar-default-demo'
                        textValue='Default'
                    />
                    <SidebarItem
                        icon={IconPanelLeftDashed}
                        href='/block/sidebar/sidebar-floating-demo'
                        textValue='Floating'
                    />
                    <SidebarItem
                        icon={IconAppWindowMac}
                        href='/block/sidebar/sidebar-inset-demo'
                        textValue='Inset'
                    />
                </Sidebar.Section>
                <Sidebar.Section title='Collapsible'>
                    <SidebarItem
                        icon={IconPanelLeftClose}
                        href='/block/sidebar/sidebar-dock-demo'
                        textValue='Dock'
                    />
                    <Sidebar.Item
                        icon={IconPanelRightOpen}
                        href='/block/sidebar/sidebar-off-canvas-demo'
                        textValue='Off Canvas'
                    />
                    <Sidebar.Item
                        icon={IconPanelLeft}
                        href='/block/sidebar/sidebar-fixed-demo'
                        textValue='Fixed'
                    />
                </Sidebar.Section>
            </Sidebar.Content>
            <Sidebar.Footer className='lg:flex lg:flex-row hidden items-center'>
                <Menu>
                    <Button
                        variant='ghost'
                        aria-label='Profile'
                        slot='close'
                        className='group w-full justify-start group-data-[collapsible=dock]:justify-center'
                    >
                        <Avatar size='sm' shape='square' src='https://github.com/dq-alhq.png' />
                        <span className='group-data-[collapsible=dock]:hidden flex items-center justify-center'>
                            DQ Al-Haqqi
                            <IconChevronDown className='right-3 size-4 absolute group-pressed:rotate-180 transition-transform' />
                        </span>
                    </Button>
                    <Menu.Content
                        placement={collapsed ? 'right' : 'top'}
                        className={collapsed ? 'sm:min-w-56' : 'min-w-[--trigger-width]'}
                    >
                        <Menu.Item href='#'>
                            <IconCircleUser />
                            Profile
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item onAction={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                            {theme === 'light' ? <IconMoon /> : <IconSun />}
                            Dark Mode
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item isDanger href='#'>
                            <IconLogOut />
                            Log out
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Sidebar.Footer>
            <Sidebar.Rail />
        </Sidebar>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    const pathname = usePathname()
    return <Sidebar.Item isCurrent={pathname === props.href} icon={Icon} {...props} />
}
