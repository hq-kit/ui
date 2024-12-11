'use client'

import React from 'react'

import {
    IconBrandCleon,
    IconChevronDown,
    IconCircleUser,
    IconFilm,
    IconGroup,
    IconLogOut,
    IconMessage,
    IconMoon,
    IconRss,
    IconSun
} from 'hq-icons'

import { useTheme } from '@/components/providers'
import { Avatar, Button, Link, Menu, Sidebar, useSidebar } from '@/components/ui'

export default function ChattingAppLayout() {
    const { theme, setTheme } = useTheme()
    const { state } = useSidebar()
    const collapsed = state === 'collapsed'
    return (
        <Sidebar collapsible='dock' variant='floating'>
            <Sidebar.Header>
                <Link
                    className='flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2'
                    href='#'
                >
                    <IconBrandCleon className='size-5' />
                    <strong className='font-medium group-data-[collapsible=dock]:hidden'>
                        CHATTING APP
                    </strong>
                </Link>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section>
                    <SidebarItem isCurrent icon={IconMessage} href='#' textValue='Chats' />
                    <SidebarItem icon={IconRss} href='#' textValue='Broadcast' />
                    <SidebarItem icon={IconFilm} href='#' textValue='Stories' />
                    <SidebarItem icon={IconGroup} href='#' textValue='Communities' />
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
        </Sidebar>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    return <Sidebar.Item isCurrent={props.isCurrent} icon={Icon} {...props} />
}
