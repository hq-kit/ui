'use client'

import { IconLogout, IconSettings, IconUserCircle } from '@tabler/icons-react'
import { ContextMenu } from '@/components/ui'

export default function ContextMenuSeparatorDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                <p className='hidden sm:flex'>Right click here!</p>
                <p className='flex sm:hidden'>Hold your finger here!</p>
            </ContextMenu.Trigger>
            <ContextMenu.Content aria-label='Context menu'>
                <ContextMenu.Header>
                    <span className='block'>DQ Al-Haqqi</span>
                    <span className='font-normal text-muted-foreground'>@dq-alhq</span>
                </ContextMenu.Header>
                <ContextMenu.Item>
                    <IconUserCircle />
                    Profile
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconSettings />
                    Settings
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item isDestructive>
                    <IconLogout />
                    Log out
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
