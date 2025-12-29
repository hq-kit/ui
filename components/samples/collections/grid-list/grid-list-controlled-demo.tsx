'use client'

import type { Selection } from 'react-aria-components'
import { useState } from 'react'
import { GridList, GridListItem } from '@/components/ui/grid-list'

export default function GridListControlledDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]))
  return (
    <div>
      <GridList
        aria-label='Select items'
        className='min-w-64'
        items={items}
        onSelectionChange={setSelectedKeys}
        selectedKeys={selectedKeys}
        selectionMode='multiple'
      >
        {(item) => <GridListItem id={item.id}>{item.name}</GridListItem>}
      </GridList>
      <p className='mt-2 block text-muted-fg [&>strong]:text-fg'>
        You have selected: <strong>{Array.from(selectedKeys).join(', ')}</strong>
      </p>
    </div>
  )
}

const items = [
  { id: '1', name: 'The Beatles' },
  { id: '2', name: 'Led Zeppelin' },
  { id: '3', name: 'Pink Floyd' },
  { id: '4', name: 'Queen' },
  { id: '5', name: 'The Rolling Stones' }
]
