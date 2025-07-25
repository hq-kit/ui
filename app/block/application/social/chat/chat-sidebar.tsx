'use client'

import { IconApp } from '@/components/icons'
import { Menu, Sidebar, User } from '@/components/ui'
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

export default function ChatSidebar() {
    return (
        <Sidebar collapsible='dock' defaultOpen={false}>
            <Sidebar.Header>
                <IconApp />
                <Sidebar.Label>Chat App</Sidebar.Label>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section>
                    <Sidebar.Item isCurrent href='#'>
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
                            src='https://github.com/dq-alhq.png'
                            name='DQ Al Haqqi'
                            description='@dq-alhq'
                            shape='square'
                        />
                        <IconChevronRight className='group-aria-expanded:-rotate-90 size-4' />
                    </Menu.Trigger>
                    <Menu.Content placement='bottom right' className='sm:min-w-(--trigger-width)'>
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
