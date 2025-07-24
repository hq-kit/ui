'use client'

import { IconCopy, IconFolder, IconHighlighter, IconTrash, IconUpload } from 'hq-icons'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuWithIconDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                <p className='hidden sm:flex'>Right click here!</p>
                <p className='flex sm:hidden'>Hold your finger here!</p>
            </ContextMenu.Trigger>
            <ContextMenu.Content aria-label='Options'>
                <ContextMenu.Item>
                    <IconFolder />
                    Open
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconHighlighter />
                    Rename
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconCopy />
                    Duplicate
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconUpload />
                    Share
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item isDestructive>
                    <IconTrash />
                    Delete
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
