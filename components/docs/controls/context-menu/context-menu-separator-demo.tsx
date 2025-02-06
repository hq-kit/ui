'use client'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuSeparatorDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
            <ContextMenu.Content aria-label='Context menu'>
                <ContextMenu.Item id='view'>View</ContextMenu.Item>
                <ContextMenu.Item id='edit'>Edit</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item id='gsu'>Generate Short URL</ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
