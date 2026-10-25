"use client"

import { isTextDropItem, useDragAndDrop } from "react-aria-components/useDragAndDrop"
import { type ListData, useListData } from "react-aria-components/useListData"
import { GridList } from "@/components/ui/grid-list"
import { Item } from "@/components/ui/item"

const tickets = [
  {
    title: "UI Button Alignment Issue",
    description: "Buttons in the Settings menu are misaligned on smaller screens.",
    id: "#101",
    assignee: "Gilberto Miguel",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-15",
    status: "Open"
  },
  {
    title: "Login Page Redesign",
    description: "Requesting a redesign of the login page to improve user experience.",
    id: "#102",
    assignee: "Maia Pettegree",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-16",
    status: "Open"
  },
  {
    title: "Database Connection Error",
    description: "Users are experiencing intermittent connection errors when accessing the database.",
    id: "#103",
    assignee: "Mike Johnson",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-17",
    status: "In Progress"
  },
  {
    title: "Feature: Dark Mode",
    description: "Implement a dark mode option for improved accessibility and user preference.",
    id: "#104",
    assignee: "Sarah Lee",
    avatar:
      "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-18",
    status: "Open"
  },
  {
    title: "Missing User Profile Pictures",
    description: "Some user profile pictures are not displaying properly in the user dashboard.",
    id: "#105",
    assignee: "David Chen",
    avatar:
      "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-19",
    status: "Open"
  },
  {
    title: "Performance Optimization",
    description: "Requesting performance optimization for the application to reduce load times.",
    id: "#106",
    assignee: "Sarah Lee",
    avatar:
      "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-20",
    status: "Closed"
  },
  {
    title: "Broken Link on Homepage",
    description: 'The "Learn More" link on the homepage is leading to a 404 error.',
    id: "#107",
    assignee: "Alex Turner",
    avatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-21",
    status: "Open"
  },
  {
    title: "Feature: Export to PDF",
    description: "Implement a feature to allow users to export their data to PDF format.",
    id: "#108",
    assignee: "Maia Pettegree",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-22",
    status: "Open"
  },
  {
    title: "Mobile Responsiveness Issue",
    description: "The application is not rendering properly on certain mobile devices.",
    id: "#109",
    assignee: "Kevin Williams",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    date: "2023-09-23",
    status: "Open"
  },
  {
    title: "Feature: Two-Factor Authentication",
    description: "Requesting the addition of two-factor authentication for improved security.",
    id: "#110",
    assignee: "Maia Pettegree",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-09-24",
    status: "In Progress"
  }
]

export default () => {
  const list = useListData({
    initialItems: tickets
  })

  return (
    <div className="relative box-border grid w-full gap-4 overflow-auto">
      <Column list={list} status="Open" />
      <Column list={list} status="In Progress" />
      <Column list={list} status="Closed" />
    </div>
  )
}

interface ColumnProps {
  list: ListData<(typeof tickets)[0]>
  status: string
}

function Column({ list, status }: ColumnProps) {
  const items = list.items.filter((t) => t.status === status)

  const { dragAndDropHooks } = useDragAndDrop({
    // Provide drag data in a custom format as well as plain text.
    getItems(_keys, items: typeof tickets) {
      return items.map((item) => ({
        "issue-id": item.id,
        "text/plain": item.title
      }))
    },

    // Accept drops with the custom format.
    acceptedDragTypes: ["issue-id"],

    // Ensure items are always moved rather than copied.
    getDropOperation: () => "move",

    // Handle drops between items from other lists.
    async onInsert(e) {
      const ids = await Promise.all(e.items.filter(isTextDropItem).map((item) => item.getText("issue-id")))
      for (const id of ids) {
        list.update(id, { ...list.getItem(id)!, status })
      }
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, ids)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, ids)
      }
    },

    // Handle drops on the collection when empty.
    async onRootDrop(e) {
      const ids = await Promise.all(e.items.filter(isTextDropItem).map((item) => item.getText("issue-id")))
      for (const id of ids) {
        list.update(id, { ...list.getItem(id)!, status })
      }
    },

    // Handle reordering items within the same list.
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys)
      }
    }
  })

  return (
    <section className="flex snap-center flex-col gap-2">
      <header>
        <h3 className="my-0 font-semibold">{status}</h3>
        <span className="text-muted-foreground text-sm">
          {items.length} {items.length === 1 ? "task" : "tasks"}
        </span>
      </header>
      <GridList
        aria-label={status}
        className="h-80 gap-2 rounded-xl border"
        dragAndDropHooks={dragAndDropHooks}
        items={items}
        renderEmptyState={() => "No tasks."}
        selectionMode="multiple"
      >
        {(item) => (
          <GridList.Item checkbox={false} textValue={item.title}>
            <Item variant={"outline"}>
              <Item.Content>
                <Item.Title>{item.title}</Item.Title>
                <Item.Description>{item.description}</Item.Description>
              </Item.Content>
            </Item>
          </GridList.Item>
        )}
      </GridList>
    </section>
  )
}
