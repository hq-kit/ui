'use client'

import { Menu } from '@/components/ui'

export default function MenuRespectScreenDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content respectScreen={false}>
                <Menu.Item>
                    <Menu.Label>View</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Label>Edit</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
