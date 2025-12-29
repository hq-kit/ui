import { IconMail } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ButtonMessagesBadgeDemo = () => {
  return (
    <Button variant='outline'>
      <IconMail />
      Messages
      <Badge className='px-1.5 py-px' variant='destructive'>
        99+
      </Badge>
    </Button>
  )
}

export default ButtonMessagesBadgeDemo
