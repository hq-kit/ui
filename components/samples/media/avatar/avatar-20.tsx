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

const AvatarGroupOutlineDemo = () => {
  return (
    <div className='flex items-center rounded-full border bg-background p-1 shadow-sm'>
      <div className='flex -space-x-2'>
        {avatars.map((avatar, index) => (
          <Avatar alt={avatar.name} className='ring-2 ring-background' key={index} src={avatar.src} />
        ))}
      </div>
      <span className='flex items-center justify-center rounded-full bg-transparent px-2 text-muted-foreground text-xs shadow-none hover:bg-transparent hover:text-foreground'>
        +3
      </span>
    </div>
  )
}

export default AvatarGroupOutlineDemo
