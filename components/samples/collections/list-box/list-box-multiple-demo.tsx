'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'

export default function ListBoxMultipleDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([3]))
  return (
    <div>
      <ListBox
        aria-label='Fruits'
        items={fruits}
        onSelectionChange={setSelected}
        selectedKeys={selected}
        selectionMode='multiple'
      >
        {(fruit) => (
          <ListBoxItem id={fruit.id} textValue={fruit.name}>
            {fruit.name}
          </ListBoxItem>
        )}
      </ListBox>

      {[...selected].length > 0 && (
        <p className='mt-4 block'>Selected: {selected === 'all' ? 'All selected' : [...selected].join(', ')}</p>
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
