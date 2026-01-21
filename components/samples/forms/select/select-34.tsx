'use client'
import type { Key } from 'react-aria-components'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tag, TagGroup, TagList } from '@/components/ui/tag'

const options = [
  {
    id: 'clothing',
    name: 'Clothing'
  },
  {
    id: 'footwear',
    name: 'Footwear'
  },
  {
    id: 'accessories',
    name: 'Accessories'
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    disable: true
  },
  {
    id: 'outerwear',
    name: 'Outerwear'
  },
  {
    id: 'fragrance',
    name: 'Fragrance'
  },
  {
    id: 'makeup',
    name: 'Makeup'
  },
  {
    id: 'skincare',
    name: 'Skincare'
  },
  {
    id: 'furniture',
    name: 'Furniture'
  },
  {
    id: 'lighting',
    name: 'Lighting'
  },
  {
    id: 'kitchenware',
    name: 'Kitchenware',
    disable: true
  },
  {
    id: 'computers',
    name: 'Computers'
  },
  {
    id: 'audio',
    name: 'Audio'
  },
  {
    id: 'wearables',
    name: 'Wearables'
  },
  {
    id: 'supplements',
    name: 'Supplements'
  },
  {
    id: 'sportswear',
    name: 'Sportswear'
  }
]

const MultipleSelectTagDisabledDemo = () => {
  const [selected, setSelected] = useState<Key[]>([])
  return (
    <Select
      className='w-full'
      onChange={setSelected}
      placeholder='Select categories'
      selectionMode='multiple'
      value={selected}
    >
      <Label>Multiple Select</Label>
      <SelectTrigger>
        <SelectValue<(typeof options)[0]>>
          {({ selectedItems, state }) => (
            <TagGroup
              aria-label='Selected states'
              onRemove={(keys) => {
                if (Array.isArray(state.value)) {
                  state.setValue(state.value.filter((k) => !keys.has(k)))
                }
              }}
            >
              <TagList
                items={selectedItems.filter((item) => item != null)}
                renderEmptyState={() => 'No selected items'}
              >
                {(item) => <Tag>{item.name}</Tag>}
              </TagList>
            </TagGroup>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent items={options}>
        {(item) => (
          <SelectItem id={item.id} isDisabled={item.disable}>
            {item.name}
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}

export default MultipleSelectTagDisabledDemo
