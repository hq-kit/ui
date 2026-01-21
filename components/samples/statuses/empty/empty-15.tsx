import { IconFilter, IconRotateClockwise } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'Clear Filters Suggestion'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <IconFilter />
      </EmptyMedia>
      <EmptyTitle>No results with current filters</EmptyTitle>
      <EmptyDescription>
        Your current filter combination returned no results. Try removing some filters or starting over.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className='flex gap-2'>
        <Button>
          <IconRotateClockwise />
          Clear All Filters
        </Button>
        <Button variant='outline'>Browse All</Button>
      </div>
    </EmptyContent>
  </Empty>
)

export default Example
