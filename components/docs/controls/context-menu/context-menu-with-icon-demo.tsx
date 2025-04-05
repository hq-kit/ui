'use client'

import { IconCopy, IconFolder, IconHighlighter, IconTrash, IconUpload } from 'hq-icons'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuWithIconDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='w-md h-32 rounded-lg border border-dashed flex items-center justify-center'>
                <p className='sm:flex hidden'>Right click here!</p>
                <p className='sm:hidden flex'>Hold your finger here!</p>
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
                <ContextMenu.Item isDanger>
                    <IconTrash />
                    Delete
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
