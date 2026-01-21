import { IconCheck } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'

const AvatarStatusRingDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar
        alt='Hallie Richards'
        className='ring-2 ring-green-600 ring-offset-2 ring-offset-background dark:ring-green-400'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <span className='absolute -right-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-600 dark:bg-green-400'>
        <IconCheck className='size-3 text-white' />
      </span>
    </div>
  )
}

export default AvatarStatusRingDemo
