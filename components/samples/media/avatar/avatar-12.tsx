import { IconCheck } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'

const AvatarVerifiedDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar
        alt='Hallie Richards'
        className='size-10'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <span className='absolute -top-1.5 -right-1.5'>
        <span className='sr-only'>Verified</span>
        <IconCheck className='size-5 fill-sky-500 text-background' />
      </span>
    </div>
  )
}

export default AvatarVerifiedDemo
