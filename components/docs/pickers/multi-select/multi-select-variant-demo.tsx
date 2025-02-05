'use client'

import { useListData } from 'react-stately'

import type { SelectedKey } from '@/components/ui'
import { MultiSelect } from '@/components/ui'

export default function MultiSelectVariantDemo() {
    const selectedItems = useListData<SelectedKey>({
        initialItems: [fruits[0]!]
    })
    return (
        <MultiSelect
            className='max-w-xs'
            variant='secondary'
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

const fruits: SelectedKey[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 7, name: 'Grape' },
    { id: 8, name: 'Honeydew' },
    { id: 9, name: 'Kiwi' },
    { id: 10, name: 'Lemon' },
    { id: 11, name: 'Mango' },
    { id: 12, name: 'Nectarine' },
    { id: 13, name: 'Orange' },
    { id: 14, name: 'Papaya' },
    { id: 15, name: 'Quince' },
    { id: 16, name: 'Raspberry' },
    { id: 17, name: 'Strawberry' },
    { id: 18, name: 'Tangerine' },
    { id: 19, name: 'Ugli Fruit' },
    { id: 20, name: 'Watermelon' }
]
