'use client'

import { useListData } from 'react-stately'

import type { SelectedKey } from '@/components/ui'
import { MultiSelect } from '@/components/ui'

export default function MultiSelectDisabledDemo() {
    const selectedItems = useListData<SelectedKey>({
        initialItems: []
    })
    return (
        <MultiSelect
            isDisabled
            className='max-w-xs'
            label='Fruits'
            selectedItems={selectedItems}
            items={fruits}
            tag={(item) => <MultiSelect.Tag textValue={item.name}>{item.name}</MultiSelect.Tag>}
        >
            {(item) => {
                return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
            }}
        </MultiSelect>
    )
}

const fruits: SelectedKey[] = [{ id: 1, name: 'Apple' }]
