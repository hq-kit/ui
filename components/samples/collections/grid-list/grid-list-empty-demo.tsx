'use client'

import { IconAlertCircle } from '@tabler/icons-react'
import { GridList, GridListEmptyState } from '@/components/ui/grid-list'

export default function GridListRenderEmptyStateDemo() {
  return (
    <GridList
      aria-label='Select items'
      className='min-w-64'
      items={items}
      renderEmptyState={() => (
        <GridListEmptyState>
          <IconAlertCircle />
          No bands selected
        </GridListEmptyState>
      )}
      selectionMode='multiple'
    />
  )
}

const items: Iterable<any> | undefined = []
