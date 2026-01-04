import { Avatar } from '@/components/ui/avatar'

const AvatarStatusBusyDemo = () => {
  return (
    <div className='relative w-fit'>
      <Avatar alt='Hallie Richards' src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' />
      <span className='absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-destructive'>
        <span className='sr-only'>Busy</span>
      </span>
    </div>
  )
}

export default AvatarStatusBusyDemo
