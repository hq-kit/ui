'use client'

import { Menu } from '@/components/ui'

export default function MenuDestructiveDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content>
                <Menu.Item>
                    <Menu.Label>View</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Label>Edit</Menu.Label>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item isDestructive>
                    <Menu.Label>Delete</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
