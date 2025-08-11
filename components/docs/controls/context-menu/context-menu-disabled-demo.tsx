'use client'

import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import { ContextMenu } from '@/components/ui'

export default function ContextMenuDisabledDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <ContextMenu>
                <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                    Disabled by Item
                </ContextMenu.Trigger>
                <ContextMenu.Content>
                    <ContextMenu.Item>
                        <IconEye />
                        <ContextMenu.Label>View</ContextMenu.Label>
                    </ContextMenu.Item>
                    <ContextMenu.Item isDisabled>
                        <IconPencil />
                        <ContextMenu.Label>Edit</ContextMenu.Label>
                    </ContextMenu.Item>
                    <ContextMenu.Item isDestructive isDisabled>
                        <IconTrash />
                        <ContextMenu.Label>Delete</ContextMenu.Label>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
            <ContextMenu>
                <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                    Disabled by Key
                </ContextMenu.Trigger>
                <ContextMenu.Content disabledKeys={['edit', 'delete']}>
                    <ContextMenu.Item id='view'>
                        <IconEye />
                        <ContextMenu.Label>View</ContextMenu.Label>
                    </ContextMenu.Item>
                    <ContextMenu.Item id='edit'>
                        <IconPencil />
                        <ContextMenu.Label>Edit</ContextMenu.Label>
                    </ContextMenu.Item>
                    <ContextMenu.Item id='delete' isDestructive>
                        <IconTrash />
                        <ContextMenu.Label>Delete</ContextMenu.Label>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
        </div>
    )
}
