import { IconFileUnknown } from '@tabler/icons-react'
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'Simple Empty State'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <IconFileUnknown />
      </EmptyMedia>
      <EmptyTitle>No items found</EmptyTitle>
    </EmptyHeader>
  </Empty>
)

export default Example
