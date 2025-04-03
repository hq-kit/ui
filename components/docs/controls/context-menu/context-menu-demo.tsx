'use client'

import { ContextMenu, Keyboard } from '@/components/ui'

export default function ContextMenuDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='w-md h-32 rounded-lg border border-dashed flex items-center justify-center'>
                Right click me
            </ContextMenu.Trigger>
            <ContextMenu.Content aria-label='Context menu'>
                <ContextMenu.Item>Back</ContextMenu.Item>
                <ContextMenu.Item isDisabled>Forward</ContextMenu.Item>
                <ContextMenu.Item>Reload</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item>Bookmark</ContextMenu.Item>
                <ContextMenu.Item>Save as</ContextMenu.Item>
                <ContextMenu.Item>
                    Select all
                    <Keyboard keys='⌘A' />
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item>View source</ContextMenu.Item>
                <ContextMenu.Item>Inspect Accessibility</ContextMenu.Item>
                <ContextMenu.Item>Inspect</ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
