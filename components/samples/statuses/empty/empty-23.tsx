import { IconPlus } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export default function EmptyAvatarGroup() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className='flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale'>
            <Avatar alt='@shadcn' fallback='CN' src='https://github.com/shadcn.png' />
            <Avatar alt='@maxleiter' fallback='LR' src='https://github.com/maxleiter.png' />
            <Avatar alt='@evilrabbit' fallback='ER' src='https://github.com/evilrabbit.png' />
          </div>
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>Invite your team to collaborate on this project.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size='sm'>
          <IconPlus />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  )
}
