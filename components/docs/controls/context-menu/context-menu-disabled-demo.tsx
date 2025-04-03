'use client'

import { IconEye, IconPencil, IconTrash } from 'hq-icons'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuDisabledDemo() {
    return (
        <div className='flex flex-col gap-4'>
            <ContextMenu>
                <ContextMenu.Trigger className='p-10 rounded-lg flex items-center justify-center border border-dashed'>
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
                    <ContextMenu.Item isDanger isDisabled>
                        <IconTrash />
                        <ContextMenu.Label>Delete</ContextMenu.Label>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
            <ContextMenu>
                <ContextMenu.Trigger className='p-10 rounded-lg flex items-center justify-center border border-dashed'>
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
                    <ContextMenu.Item id='delete' isDanger>
                        <IconTrash />
                        <ContextMenu.Label>Delete</ContextMenu.Label>
                    </ContextMenu.Item>
                </ContextMenu.Content>
            </ContextMenu>
        </div>
    )
}
