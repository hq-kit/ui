import { IconStar } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'

const BadgeWithIconDemo = () => {
  return (
    <Badge>
      <IconStar className='size-3' />
      With Icon
    </Badge>
  )
}

export default BadgeWithIconDemo
