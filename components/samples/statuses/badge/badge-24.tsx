import { Avatar } from '@/components/ui/avatar'

const BadgeStatusOnlineDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar
        alt='Hallie Richards'
        className='size-10'
        fallback='HR'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <span className='absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-green-600 dark:bg-green-400'>
        <span className='sr-only'>Online</span>
      </span>
    </div>
  )
}

export default BadgeStatusOnlineDemo
