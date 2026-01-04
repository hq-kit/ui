'use client'
import { IconPlus } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

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
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Darlene Robertson'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Leslie Alexander'
  }
]

const AvatarGroupDropdownDemo = () => {
  return (
    <div className='flex -space-x-2'>
      {avatars.slice(0, 3).map((avatar, index) => (
        <Avatar alt={avatar.name} className='ring-2 ring-background' key={index} src={avatar.src} />
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className='flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-muted ring-2 ring-background has-focus-visible:ring-ring/50'>
          <IconPlus className='size-4' />
          <span className='sr-only'>Add</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {avatars.slice(3).map((avatar, index) => (
            <DropdownMenuItem key={index}>
              <Avatar alt={avatar.name} className='ring-2 ring-background' src={avatar.src} />
              <span>{avatar.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AvatarGroupDropdownDemo
