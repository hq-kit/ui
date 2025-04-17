'use client'

import { ContextMenu } from '@/components/ui'

const items = [
    {
        id: 1,
        name: 'React',
        description: 'Component-based JavaScript library'
    },
    {
        id: 2,
        name: 'Angular',
        description: 'Comprehensive TypeScript-based framework'
    },
    {
        id: 3,
        name: 'Vue.Js',
        description: 'Flexible and progressive UI framework'
    }
]

export default function ContextMenuItemDetailsDemo() {
    return (
        <ContextMenu>
            <ContextMenu.Trigger className='flex items-center justify-center rounded-lg border border-dashed p-10'>
                <p className='hidden sm:flex'>Right click here!</p>
                <p className='flex sm:hidden'>Hold your finger here!</p>
            </ContextMenu.Trigger>
            <ContextMenu.Content items={items} aria-label='Bands'>
                {(item) => (
                    <ContextMenu.Item id={item.id} textValue={item.name}>
                        <ContextMenu.Details label={item.name} description={item.description} />
                    </ContextMenu.Item>
                )}
            </ContextMenu.Content>
        </ContextMenu>
    )
}
