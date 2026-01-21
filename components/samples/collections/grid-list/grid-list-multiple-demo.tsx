'use client'

import { GridList, GridListItem } from '@/components/ui/grid-list'

export default function GridListMultipleDemo() {
  return (
    <div>
      <GridList aria-label='Select items' className='min-w-64' items={items} selectionMode='multiple'>
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </GridList>
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
