'use client'

import { useListData } from 'react-stately'

import { MultiSelect, type SelectedKey } from '@/components/ui'

export default function MultiSelectVariantDemo() {
    const selectedItems = useListData<SelectedKey>({
        initialItems: [fruits[0]]
    })
    return (
        <MultiSelect
            className='max-w-xs'
            variant='secondary'
            label='Fruits'
            selectedList={selectedItems}
            items={fruits}
            tag={(item) => (
                <MultiSelect.Tag textValue={item.textValue}>{item.textValue}</MultiSelect.Tag>
            )}
        >
            {(item) => {
                return (
                    <MultiSelect.Item textValue={item.textValue}>{item.textValue}</MultiSelect.Item>
                )
            }}
        </MultiSelect>
    )
}

const fruits: SelectedKey[] = [
    { id: 1, textValue: 'Apple' },
    { id: 2, textValue: 'Banana' },
    { id: 3, textValue: 'Cherry' },
    { id: 7, textValue: 'Grape' },
    { id: 8, textValue: 'Honeydew' },
    { id: 9, textValue: 'Kiwi' },
    { id: 10, textValue: 'Lemon' },
    { id: 11, textValue: 'Mango' },
    { id: 12, textValue: 'Nectarine' },
    { id: 13, textValue: 'Orange' },
    { id: 14, textValue: 'Papaya' },
    { id: 15, textValue: 'Quince' },
    { id: 16, textValue: 'Raspberry' },
    { id: 17, textValue: 'Strawberry' },
    { id: 18, textValue: 'Tangerine' },
    { id: 19, textValue: 'Ugli Fruit' },
    { id: 20, textValue: 'Watermelon' }
]
