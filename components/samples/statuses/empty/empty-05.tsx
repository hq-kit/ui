import { IconUpload, IconUserPlus, IconUsers } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'Empty with Stacked Actions'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <IconUsers />
      </EmptyMedia>
      <EmptyTitle>No team members yet</EmptyTitle>
      <EmptyDescription>Invite team members to collaborate on your projects.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button className='w-full'>
        <IconUserPlus />
        Invite Team Member
      </Button>
      <Button className='w-full' variant='outline'>
        <IconUpload />
        Import from CSV
      </Button>
    </EmptyContent>
  </Empty>
)

export default Example
