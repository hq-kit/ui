import { IconChartBar } from '@tabler/icons-react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'Empty Chart'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia>
        <IconChartBar className='h-16 w-16 text-muted-foreground' />
      </EmptyMedia>
      <EmptyTitle>No data available</EmptyTitle>
      <EmptyDescription>
        There's no data to display in this chart yet. Data will appear here once it's available.
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
)

export default Example
