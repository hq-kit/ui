'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'

export default function ListBoxControlledDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([1]))
  return (
    <div className='min-w-2xs'>
      <ListBox
        aria-label='Fruits'
        items={fruits}
        onSelectionChange={setSelected}
        selectedKeys={selected}
        selectionMode='single'
      >
        {(fruit) => (
          <ListBoxItem id={fruit.id} textValue={fruit.name}>
            {fruit.name}
          </ListBoxItem>
        )}
      </ListBox>

      {selected && (
        <p className='mt-4 block [&>strong]:font-medium [&>strong]:text-fg'>
          Selected: <strong>{selected}</strong>
        </p>
      )}
    </div>
  )
}

const fruits = [
  {
    id: 1,
    name: 'Apple'
  },
  {
    id: 2,
    name: 'Banana'
  },
  {
    id: 3,
    name: 'Orange'
  },
  {
    id: 4,
    name: 'Strawberry'
  },
  {
    id: 5,
    name: 'Grapes'
  },
  {
    id: 6,
    name: 'Mango'
  },
  {
    id: 7,
    name: 'Pineapple'
  }
]
