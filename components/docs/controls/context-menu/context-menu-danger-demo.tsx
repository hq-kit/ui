'use client'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuDangerDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='w-md h-32 rounded-lg border border-dashed flex items-center justify-center'>
                Right click me
            </ContextMenu.Trigger>
            <ContextMenu.Content>
                <ContextMenu.Item>
                    <ContextMenu.Label>View</ContextMenu.Label>
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <ContextMenu.Label>Edit</ContextMenu.Label>
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item isDanger>
                    <ContextMenu.Label>Delete</ContextMenu.Label>
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
