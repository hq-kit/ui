'use client'

import { IconEye, IconPencil } from '@tabler/icons-react'
import { Menu } from '@/components/ui'

export default function MenuWithIconDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content>
                <Menu.Item>
                    <IconEye />
                    <Menu.Label>View</Menu.Label>
                </Menu.Item>
                <Menu.Item>
                    <IconPencil />
                    <Menu.Label>Edit</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
