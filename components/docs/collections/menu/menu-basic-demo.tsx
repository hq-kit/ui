'use client'

import { IconInbox, IconSend } from 'hq-icons'

import { Menu } from '@/components/ui'

export default function MenuBasicDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content placement='bottom'>
                <Menu.Item>
                    <IconInbox />
                    <Menu.Label>Inbox</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                    <IconSend />
                    <Menu.Label>Sent</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Label>New Message</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
