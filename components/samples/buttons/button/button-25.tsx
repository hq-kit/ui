import { IconBell } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ButtonNotificationsBadgeDemo = () => {
  return (
    <Button className='relative' variant='outline'>
      <IconBell />
      Notifications
      <Badge className='absolute -top-2.5 -right-2.5 h-5 min-w-5 px-1 tabular-nums' variant='destructive'>
        8
      </Badge>
    </Button>
  )
}

export default ButtonNotificationsBadgeDemo
