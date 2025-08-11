'use client'

import {
    IconChevronRight,
    IconHeadphones,
    IconLogout,
    IconMessage,
    IconMovie,
    IconRss,
    IconSettings,
    IconUsersGroup
} from '@tabler/icons-react'
import { IconApp } from '@/components/icons'
import { Menu, Sidebar, User } from '@/components/ui'

export default function ChatSidebar() {
    return (
        <Sidebar collapsible='dock' defaultOpen={false}>
            <Sidebar.Header>
                <IconApp />
                <Sidebar.Label>Chat App</Sidebar.Label>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section>
                    <Sidebar.Item href='#' isCurrent>
                        <IconMessage />
                        <Sidebar.Label>Chats</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item href='#'>
                        <IconRss />
                        <Sidebar.Label>Broadcast</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item href='#'>
                        <IconMovie />
                        <Sidebar.Label>Stories</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item href='#'>
                        <IconUsersGroup />
                        <Sidebar.Label>Communities</Sidebar.Label>
                    </Sidebar.Item>
                </Sidebar.Section>
            </Sidebar.Content>
            <Sidebar.Footer>
                <Menu>
                    <Menu.Trigger className='group flex size-full items-center justify-between rounded-lg pressed:bg-muted p-2 hover:bg-muted'>
                        <User
                            description='@dq-alhq'
                            name='DQ Al Haqqi'
                            shape='square'
                            src='https://github.com/dq-alhq.png'
                        />
                        <IconChevronRight className='group-aria-expanded:-rotate-90 size-4' />
                    </Menu.Trigger>
                    <Menu.Content className='sm:min-w-(--trigger-width)' placement='bottom right'>
                        <Menu.Header>
                            <span className='block'>DQ Al Haqqi</span>
                            <span className='font-normal text-muted-foreground'>@dq-alhq</span>
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
                            <IconLogout />
                            Log out
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Sidebar.Footer>
            <Sidebar.Trigger />
        </Sidebar>
    )
}
