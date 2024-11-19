'use client'

import { GridList } from '@/components/ui'

export default function GridListRenderEmptyStateDemo() {
    return (
        <GridList
            items={[]}
            aria-label='Select items'
            selectionMode='multiple'
            className='min-w-64'
            renderEmptyState={() => <GridList.EmptyState>No items selected</GridList.EmptyState>}
        />
    )
}
