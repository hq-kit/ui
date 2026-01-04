import { Avatar } from '@/components/ui/avatar'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    name: 'Jenny Wilson'
  }
]

const AvatarGroupPopularityIndicatorDemo = () => {
  return (
    <div className='flex flex-wrap items-center justify-center rounded-full border bg-background p-1 shadow-sm'>
      <div className='flex -space-x-1'>
        {avatars.map((avatar, index) => (
          <Avatar alt={avatar.name} className='size-6 ring-2 ring-background' key={index} src={avatar.src} />
        ))}
      </div>
      <p className='px-2 text-muted-foreground text-xs'>
        Loved by <strong className='font-medium text-foreground'>10K+</strong> developers.
      </p>
    </div>
  )
}

export default AvatarGroupPopularityIndicatorDemo
