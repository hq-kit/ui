'use client'

import React from 'react'

import {
    IconBrandCleon,
    IconFilm,
    IconGroup,
    IconHeadphones,
    IconLogOut,
    IconMessage,
    IconRss,
    IconSettings
} from 'hq-icons'

import { Avatar, Link, Menu, Sidebar } from '@/components/ui'

export default function ChattingAppLayout() {
    return (
        <Sidebar collapsible='dock'>
            <Sidebar.Header>
                <Link
                    className='flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center'
                    href='#'
                >
                    <IconBrandCleon className='size-5' />
                    <Sidebar.Label className='font-medium'>Chat App</Sidebar.Label>
                </Link>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.SectionGroup>
                    <Sidebar.Section>
                        <SidebarItem isCurrent icon={IconMessage} href='#' tooltip='Chats' />
                        <SidebarItem icon={IconRss} href='#' tooltip='Broadcast' />
                        <SidebarItem icon={IconFilm} href='#' tooltip='Stories' />
                        <SidebarItem icon={IconGroup} href='#' tooltip='Communities' />
                    </Sidebar.Section>
                </Sidebar.SectionGroup>
            </Sidebar.Content>
            <Sidebar.Footer>
                <Menu>
                    <Menu.Trigger className='group' aria-label='Profile' data-slot='menu-trigger'>
                        <Avatar shape='square' src='https://github.com/dq-alhq.png' />
                        <div className='text-sm in-data-[sidebar-collapsible=dock]:hidden'>
                            <Sidebar.Label>DQ Al Haqqi</Sidebar.Label>
                            <span className='text-muted-fg -mt-0.5 block'>@dq-alhq</span>
                        </div>
                    </Menu.Trigger>
                    <Menu.Content placement='bottom right' className='sm:min-w-(--trigger-width)'>
                        <Menu.Header>
                            <span className='block'>DQ Al Haqqi</span>
                            <span className='text-muted-fg font-normal'>@dq-alhq</span>
                        </Menu.Header>
                        <Menu.Item href='#setting'>
                            <IconSettings />
                            Setting
                        </Menu.Item>
                        <Menu.Item href='#contact'>
                            <IconHeadphones />
                            Customer Support
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item href='#logout'>
                            <IconLogOut />
                            Log out
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Sidebar.Footer>
        </Sidebar>
    )
}

function SidebarItem({
    icon: Icon,
    ...props
}: React.ComponentProps<typeof Sidebar.Item> & { icon: React.FC<React.SVGProps<SVGSVGElement>> }) {
    return (
        <Sidebar.Item tooltip={props.tooltip} isCurrent href='#' {...props}>
            <Icon />
            <Sidebar.Label>{props.tooltip}</Sidebar.Label>
        </Sidebar.Item>
    )
}
