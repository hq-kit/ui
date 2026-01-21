'use client'
import { useAsyncList } from '@react-stately/data'
import { IconLoader } from '@tabler/icons-react'
import { Collection, GridListLoadMoreItem } from 'react-aria-components'
import { Card, CardContent } from '@/components/ui/card'
import { GridList, GridListItem } from '@/components/ui/grid-list'

interface Character {
  name: string
}

export default function GridListInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://')
      }

      const res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=`, {
        signal
      })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next
      }
    }
  })
  return (
    <Card className='max-h-56 overflow-y-auto p-0'>
      <CardContent>
        <GridList aria-label='Async loading ListView example' selectionMode='multiple'>
          <Collection items={list.items}>
            {(item) => <GridListItem id={item.name}>{item.name}</GridListItem>}
          </Collection>
          <GridListLoadMoreItem isLoading={list.loadingState === 'loadingMore'} onLoadMore={list.loadMore}>
            <IconLoader aria-label='Loading more...' className='mx-auto mb-4' />
          </GridListLoadMoreItem>
        </GridList>
      </CardContent>
    </Card>
  )
}
