'use client'

import { GridList, useDND, useList } from '@/components/ui'

function DNDList({ items }: { items: { id: string; type: string; name: string }[] }) {
    const list = useList({ initialItems: items })
    const { dragAndDropHooks } = useDND({ list, operation: 'move' })

    return (
        <GridList
            aria-label='Linux Distros'
            dragAndDropHooks={dragAndDropHooks}
            items={list.items}
            onSelectionChange={list.setSelectedKeys}
            renderEmptyState={() => (
                <div className='col-span-full flex items-center justify-center text-muted-foreground'>
                    Drop items here
                </div>
            )}
            selectedKeys={list.selectedKeys}
        >
            {(item) => <GridList.Item>{item.name}</GridList.Item>}
        </GridList>
    )
}

export default function GridListDragBetween() {
    return (
        <div className='grid grid-cols-2 gap-4'>
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
