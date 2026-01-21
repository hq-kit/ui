'use client'
import { Avatar } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

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

const AvatarGroupTooltipTransitionDemo = () => {
  return (
    <div className='flex -space-x-2 hover:space-x-1'>
      {avatars.map((avatar, index) => (
        <Tooltip key={index}>
          <TooltipTrigger>
            <Avatar
              alt={avatar.name}
              className='ring-2 ring-background transition-all duration-300 ease-in-out'
              src={avatar.src}
            />
          </TooltipTrigger>
          <TooltipContent>{avatar.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}

export default AvatarGroupTooltipTransitionDemo
