'use client'

import { useListData } from 'react-stately'

import type { SelectedKey } from '@/components/ui'
import { Description, MultiSelect } from '@/components/ui'

const tags = [
    { id: 1, name: 'Travel' },
    { id: 2, name: 'Food' },
    { id: 3, name: 'Fashion' },
    { id: 4, name: 'Music' },
    { id: 5, name: 'Photography' }
]

export default function MultiSelectControlledDemo() {
    const selectedItems = useListData<SelectedKey>({
        initialItems: []
    })

    return (
        <>
            <MultiSelect
                className='max-w-xs'
                onItemInserted={(key) => console.info('onItemInserted', key)}
                onItemCleared={(key) => console.info('onItemCleared', key)}
                label='Select tags'
                selectedItems={selectedItems}
                items={tags}
                tag={(item) => <MultiSelect.Tag textValue={item.name}>{item.name}</MultiSelect.Tag>}
            >
                {(item) => {
                    return (
                        <MultiSelect.Item id={item.id} textValue={item.name}>
                            {item.name}
                        </MultiSelect.Item>
                    )
                }}
            </MultiSelect>
            {selectedItems.items.length > 0 && (
                <Description className='text-muted-fg [&>strong]:text-fg mt-2 block max-w-xs'>
                    You have selected:{' '}
                    <strong>{selectedItems.items.map((item) => item.name).join(', ')}</strong>
                </Description>
            )}
        </>
    )
}
