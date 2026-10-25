import { GridList, GridListItem } from "@/components/ui/grid-list"

export default function GridListGrid() {
  return (
    <div>
      <GridList items={items}>{(item) => <GridListItem>{item.name}</GridListItem>}</GridList>
    </div>
  )
}

const items = [
  { id: "1", name: "The Beatles" },
  { id: "2", name: "Led Zeppelin" },
  { id: "3", name: "Pink Floyd" },
  { id: "4", name: "Queen" },
  { id: "5", name: "The Rolling Stones" },
  { id: "6", name: "The Who" }
]
