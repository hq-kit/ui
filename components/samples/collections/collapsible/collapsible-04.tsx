import { IconChevronRight, IconPlus, IconSolarPanel, IconUser } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const users = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Howard Lloyd',
    bio: 'Senior Product Manager with 8+ years of experience in SaaS product development and team leadership.',
    projects: 5,
    followers: 120
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Olivia Sparks',
    bio: 'Full-stack Software Engineer specializing in React, Node.js, and cloud architecture solutions.',
    projects: 3,
    followers: 95,
    followed: true
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Hallie Richards',
    bio: 'Creative UI/UX Designer with expertise in user research, wireframing, and accessible interface design.',
    projects: 4,
    followers: 80
  }
]

const CollapsibleProfileDemo = () => {
  return (
    <ul className='flex w-full max-w-87.5 flex-col gap-4'>
      {users.map((user) => (
        <Collapsible key={user.name}>
          <li className='flex flex-col gap-2'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4'>
              <div className='flex items-center gap-2'>
                <Avatar alt={user.name} src={user.image} />
                <span className='font-medium'>{user.name}</span>
              </div>
              <IconChevronRight className='size-4 in-data-[expanded=true]:rotate-90 transition-transform' />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='flex flex-col gap-2'>
                <p className='text-muted-foreground text-sm'>{user.bio}</p>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-2'>
                      <IconUser className='size-4' />
                      <span className='text-sm'>{user.followers}</span>
                    </span>
                    <span className='flex items-center gap-2'>
                      <IconSolarPanel className='size-4' />
                      <span className='text-sm'>{user.projects}</span>
                    </span>
                  </div>
                  {user.followed ? (
                    <Button className='h-7 rounded-full px-3 py-1 text-xs' variant='outline'>
                      Following
                    </Button>
                  ) : (
                    <Button className='h-7 rounded-full px-3 py-1 text-xs'>
                      Follow
                      <IconPlus />
                    </Button>
                  )}
                </div>
              </div>
            </CollapsibleContent>
          </li>
        </Collapsible>
      ))}
    </ul>
  )
}

export default CollapsibleProfileDemo
