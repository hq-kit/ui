import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const ButtonAvatarDemo = () => {
  return (
    <Button className='rounded-full pl-2'>
      <Avatar
        alt='Hallie Richards'
        className='size-6'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      @hallierichards
    </Button>
  )
}

export default ButtonAvatarDemo
