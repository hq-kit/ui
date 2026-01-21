import { Avatar } from '@/components/ui/avatar'

const AvatarStatusAwayDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar
        alt='Hallie Richards'
        className='rounded-sm'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <span className='absolute -top-1.5 -right-1.5 size-3 rounded-full border-2 border-background bg-amber-600 dark:bg-amber-400'>
        <span className='sr-only'>Away</span>
      </span>
    </div>
  )
}

export default AvatarStatusAwayDemo
