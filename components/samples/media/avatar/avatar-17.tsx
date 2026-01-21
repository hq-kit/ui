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

const AvatarGroupTransitionDemo = () => {
  return (
    <div className='flex -space-x-2 hover:space-x-1'>
      {avatars.map((avatar, index) => (
        <Avatar
          alt={avatar.name}
          className='ring-2 ring-background transition-all duration-300 ease-in-out'
          key={index}
          src={avatar.src}
        />
      ))}
    </div>
  )
}

export default AvatarGroupTransitionDemo
