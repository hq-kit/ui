'use client'

import { IconCircleUser, IconLogOut, IconSettings } from 'hq-icons'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuSeparatorDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='w-md h-32 rounded-lg border border-dashed flex items-center justify-center'>
                Right click me
            </ContextMenu.Trigger>
            <ContextMenu.Content aria-label='Context menu'>
                <ContextMenu.Header>
                    <span className='block'>DQ Al-Haqqi</span>
                    <span className='text-muted-fg font-normal'>@dq-alhq</span>
                </ContextMenu.Header>
                <ContextMenu.Item>
                    <IconCircleUser />
                    Profile
                </ContextMenu.Item>
                <ContextMenu.Item>
                    <IconSettings />
                    Settings
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item isDanger>
                    <IconLogOut />
                    Log out
                </ContextMenu.Item>
            </ContextMenu.Content>
        </ContextMenu>
    )
}
