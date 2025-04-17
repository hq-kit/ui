'use client'

import { ContextMenu, Keyboard } from '@/components/ui'

export default function ContextMenuDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                <p className='hidden sm:flex'>Right click here!</p>
                <p className='flex sm:hidden'>Hold your finger here!</p>
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
                    <Keyboard keys={['⌘', 'A']} />
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item>View source</ContextMenu.Item>
                <ContextMenu.Item>Inspect Accessibility</ContextMenu.Item>
                <ContextMenu.Item>Inspect</ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
