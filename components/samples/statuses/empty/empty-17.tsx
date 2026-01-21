import { IconInbox } from '@tabler/icons-react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'Empty with Description'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <IconInbox />
      </EmptyMedia>
      <EmptyTitle>Nothing here yet</EmptyTitle>
      <EmptyDescription>Get started by creating your first item.</EmptyDescription>
    </EmptyHeader>
  </Empty>
)

export default Example
