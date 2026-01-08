import { IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'Empty with Single Action'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <IconPlus />
      </EmptyMedia>
      <EmptyTitle>No projects yet</EmptyTitle>
      <EmptyDescription>Get started by creating your first project.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button>
        <IconPlus />
        Create Project
      </Button>
    </EmptyContent>
  </Empty>
)

export default Example
