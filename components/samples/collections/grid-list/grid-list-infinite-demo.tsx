"use client"
import { IconLoader2 } from "@tabler/icons-react"
import { Collection, GridListLoadMoreItem } from "react-aria-components/GridList"
import { useAsyncList } from "react-aria-components/useAsyncList"
import { GridList } from "@/components/ui/grid-list"

interface Character {
  name: string
}

export default function GridListInfiniteScrollDemo() {
  const list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, "https://")
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
    <GridList
      aria-label="Async loading ListView example"
      className={"max-h-64 overflow-y-auto"}
      layout="grid"
      selectionMode="multiple"
    >
      <Collection items={list.items}>{(item) => <GridList.Item id={item.name}>{item.name}</GridList.Item>}</Collection>
      <GridListLoadMoreItem isLoading={list.loadingState === "loadingMore"} onLoadMore={list.loadMore}>
        <IconLoader2 aria-label="Loading more..." className="text-muted-foreground mx-auto mb-4 size-5 animate-spin" />
      </GridListLoadMoreItem>
    </GridList>
  )
}
