'use client'

import { ListBox, useDND, useList } from '@/components/ui'

function DNDList({ items }: { items: { id: string; type: string; name: string }[] }) {
    const list = useList({ initialItems: items })
    const { dragAndDropHooks } = useDND({ list, operation: 'move' })

    return (
        <ListBox
            selectedKeys={list.selectedKeys}
            onSelectionChange={list.setSelectedKeys}
            dragAndDropHooks={dragAndDropHooks}
            items={list.items}
            renderEmptyState={() => (
                <div className='text-muted-fg flex items-center justify-center col-span-full'>Drop items here</div>
            )}
            aria-label='Linux Distros'
        >
            {(item) => <ListBox.Item>{item.name}</ListBox.Item>}
        </ListBox>
    )
}

export default function ListBoxDragBetween() {
    return (
        <div className='flex gap-4'>
            <DNDList
                items={[
                    { id: '1', type: 'file', name: 'Adobe Photoshop' },
                    { id: '2', type: 'file', name: 'Adobe XD' },
                    { id: '3', type: 'folder', name: 'Documents' },
                    { id: '4', type: 'file', name: 'Adobe InDesign' },
                    { id: '5', type: 'folder', name: 'Utilities' },
                    { id: '6', type: 'file', name: 'Adobe AfterEffects' }
                ]}
            />
            <DNDList
                items={[
                    { id: '7', type: 'folder', name: 'Pictures' },
                    { id: '8', type: 'file', name: 'Adobe Fresco' },
                    { id: '9', type: 'folder', name: 'Apps' },
                    { id: '10', type: 'file', name: 'Adobe Illustrator' },
                    { id: '11', type: 'file', name: 'Adobe Lightroom' },
                    { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
                ]}
            />
        </div>
    )
}
