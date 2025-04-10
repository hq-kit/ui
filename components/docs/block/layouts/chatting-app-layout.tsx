'use client'

import {
    IconBrandCleon,
    IconChevronRight,
    IconFilm,
    IconGroup,
    IconHeadphones,
    IconLogOut,
    IconMessage,
    IconRss,
    IconSettings
} from 'hq-icons'

import { Menu, Sidebar, User } from '@/components/ui'

export default function ChattingAppLayout() {
    return (
        <Sidebar collapsible='dock' defaultOpen={false}>
            <Sidebar.Header>
                <IconBrandCleon />
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
                        <IconFilm />
                        <Sidebar.Label>Stories</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item href='#'>
                        <IconGroup />
                        <Sidebar.Label>Communities</Sidebar.Label>
                    </Sidebar.Item>
                </Sidebar.Section>
            </Sidebar.Content>
            <Sidebar.Footer>
                <Menu>
                    <Menu.Trigger className='group p-2 size-full justify-between items-center flex hover:bg-muted pressed:bg-muted rounded-lg'>
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
            <Sidebar.Trigger />
        </Sidebar>
    )
}
