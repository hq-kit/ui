'use client'

import { IconLoader } from '@tabler/icons-react'
import { Collection, ListBoxLoadMoreItem } from 'react-aria-components'
import { useAsyncList } from 'react-stately'
import { Card, CardContent } from '@/components/ui/card'
import { ListBox, ListBoxItem } from '@/components/ui/list-box'

interface Character {
  name: string
}
export default function ListBoxInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      const res = await fetch(cursor || `https://pokeapi.co/api/v2/pokemon`, { signal })
      const json = await res.json()

      return {
        items: json.results,
        cursor: json.next
      }
    }
  })

  return (
    <Card className='max-h-96 overflow-y-auto'>
      <CardContent>
        <ListBox aria-label='Pick a Pokemon' items={list.items} selectionMode='single'>
          <Collection items={list.items}>{(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}</Collection>
          <ListBoxLoadMoreItem isLoading={list.loadingState === 'loadingMore'} onLoadMore={list.loadMore}>
            <IconLoader aria-label='Loading more...' className='mx-auto mb-4 animate-spin' />
          </ListBoxLoadMoreItem>
        </ListBox>
      </CardContent>
    </Card>
  )
}
