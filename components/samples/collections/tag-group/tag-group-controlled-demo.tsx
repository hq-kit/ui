'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { Tag, TagGroup, TagList } from '@/components/ui/tag'

const fruitList = [
  { id: '1', name: 'Apple', available: false },
  { id: '2', name: 'Banana', available: true },
  { id: '3', name: 'Cherry', available: true },
  { id: '4', name: 'Date', available: false }
]

export default function TagGroupControlledDemo() {
  const [selected, setSelected] = useState<Selection>(new Set([]))
  return (
    <div>
      <TagGroup aria-label='Fruite' onSelectionChange={setSelected} selectedKeys={selected} selectionMode='multiple'>
        <TagList items={fruitList}>{(item) => <Tag>{item.name}</Tag>}</TagList>
      </TagGroup>

      <p className='mt-2 block text-muted-foreground text-xs [&>strong]:text-foreground'>
        You have selected: <strong>{Array.from(selected).join(', ')}</strong>
      </p>
    </div>
  )
}
