'use client'

import { Menu } from '@/components/ui'
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'

export default function MenuDisabledDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <Menu>
                <Menu.Trigger>Disabled by Item</Menu.Trigger>
                <Menu.Content>
                    <Menu.Item>
                        <IconEye />
                        <Menu.Label>View</Menu.Label>
                    </Menu.Item>
                    <Menu.Item isDisabled>
                        <IconPencil />
                        <Menu.Label>Edit</Menu.Label>
                    </Menu.Item>
                    <Menu.Item isDestructive isDisabled>
                        <IconTrash />
                        <Menu.Label>Delete</Menu.Label>
                    </Menu.Item>
                </Menu.Content>
            </Menu>
            <Menu>
                <Menu.Trigger>Disabled by Key</Menu.Trigger>
                <Menu.Content disabledKeys={['edit', 'delete']}>
                    <Menu.Item id='view'>
                        <IconEye />
                        <Menu.Label>View</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='edit'>
                        <IconPencil />
                        <Menu.Label>Edit</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='delete' isDestructive>
                        <IconTrash />
                        <Menu.Label>Delete</Menu.Label>
                    </Menu.Item>
                </Menu.Content>
            </Menu>
        </div>
    )
}
