'use client'

import { useDragAndDrop } from 'react-aria-components'
import { useListData } from 'react-stately'
import { GridList, GridListEmptyState, GridListItem } from '@/components/ui/grid-list'

function GridListDragDemo() {
  const list = useListData({
    initialItems: items
  })
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({
        'text/plain': list.getItem(key)?.name ?? ''
      })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys)
      }
    }
  })

  return (
    <GridList
      aria-label='Droppable list'
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
      selectionMode='multiple'
    >
      {(item) => <GridListItem id={item.id}>{item.name}</GridListItem>}
    </GridList>
  )
}

const items = [
  { id: 1, name: 'The Beatles' },
  { id: 2, name: 'Led Zeppelin' },
  { id: 3, name: 'Pink Floyd' },
  { id: 4, name: 'Queen' },
  { id: 5, name: 'The Rolling Stones' },
  { id: 6, name: 'The Beach Boys' },
  { id: 7, name: 'The Kinks' },
  { id: 8, name: 'The Who' }
]

export default function GridListDragBetweenItemDemo() {
  const list = useListData({
    initialItems: [
      { id: 6, name: 'The Byrds' },
      { id: 7, name: 'The Yardbirds' }
    ]
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === 'text' ? await item.getText('text/plain') : item.name
          return { id: Math.random(), name }
        })
      )

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items)
      }
    }
  })

  return (
    <div className='grid gap-4 lg:grid-cols-3'>
      <GridListDragDemo />
      <GridList aria-label='Droppable list' dragAndDropHooks={dragAndDropHooks} items={list.items}>
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </GridList>
      <OtherEmptyList />
    </div>
  )
}

export function OtherEmptyList() {
  const list = useListData({
    initialItems: [{ id: 7, name: 'The Who' }]
  })

  const { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      const items = await Promise.all(
        e.items.map(async (item) => {
          const name = item.kind === 'text' ? await item.getText('text/plain') : item.name
          return { id: Math.random(), name }
        })
      )

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items)
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items)
      }
    }
  })

  return (
    <GridList
      aria-label='Droppable list'
      dragAndDropHooks={dragAndDropHooks}
      items={list.items}
      renderEmptyState={() => <GridListEmptyState>No bands selected</GridListEmptyState>}
    >
      {(item) => <GridListItem>{item.name}</GridListItem>}
    </GridList>
  )
}
