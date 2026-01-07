import { Badge } from '@/components/ui/badge'

const BadgeAvatarDemo = () => {
  return (
    <Badge className='p-1 pr-2' variant='outline'>
      <img
        alt='Hallie Richards'
        className='size-6 rounded-full'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      Avatar
    </Badge>
  )
}

export default BadgeAvatarDemo
