import { IconMailCheck } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const IconButtonBadgeDemo = () => {
  return (
    <Button className='relative' size='icon' variant='outline'>
      <IconMailCheck />
      <span className='sr-only'>Messages</span>
      <Badge className='absolute -top-2.5 -right-2.5 h-5 min-w-5 px-1 tabular-nums' variant='destructive'>
        8
      </Badge>
    </Button>
  )
}

export default IconButtonBadgeDemo
