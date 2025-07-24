'use client'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuDestructiveDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                <p className='hidden sm:flex'>Right click here!</p>
                <p className='flex sm:hidden'>Hold your finger here!</p>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item>
                    <ContextMenu.Label>View</ContextMenu.Label>
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <ContextMenu.Label>Edit</ContextMenu.Label>
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item isDestructive>
                    <ContextMenu.Label>Delete</ContextMenu.Label>
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
