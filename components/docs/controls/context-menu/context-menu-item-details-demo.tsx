'use client'

import { ContextMenu } from '@/components/ui'

export default function ContextMenuItemDetailsDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger>Right click me</ContextMenu.Trigger>
            <ContextMenu.Content items={roles} aria-label='Bands'>
                {(item) => (
                    <ContextMenu.Item id={item.id} textValue={item.name}>
                        <ContextMenu.ItemDetails label={item.name} description={item.description} />
                    </ContextMenu.Item>
                )}
            </ContextMenu.Content>
        </ContextMenu>
    )
}

const roles = [
    { id: 1, name: 'Admin', description: 'Has full access to all resources' },
    { id: 2, name: 'Editor', description: 'Can edit content but has limited access to settings' },
    { id: 3, name: 'Viewer', description: 'Can view content but cannot make changes' },
    { id: 4, name: 'Contributor', description: 'Can contribute content for review' },
    { id: 5, name: 'Guest', description: 'Limited access, mostly for viewing purposes' }
]
