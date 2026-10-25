"use client"

import { IconAlertCircle } from "@tabler/icons-react"
import { GridList } from "@/components/ui/grid-list"

export default function GridListRenderEmptyStateDemo() {
  return (
    <GridList
      aria-label="Select items"
      className="min-w-64"
      items={items}
      renderEmptyState={() => (
        <div className="flex items-center gap-2 text-sm">
          <IconAlertCircle size={16} />
          No items!
        </div>
      )}
      selectionMode="multiple"
    />
  )
}

const items: Iterable<any> | undefined = []
