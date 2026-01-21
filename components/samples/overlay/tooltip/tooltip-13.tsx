import { IconCalendar } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Progress, ProgressHeader, ProgressTrack, ProgressValue } from '@/components/ui/progress'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  }
]

const TooltipProjectDemo = () => {
  return (
    <Tooltip closeDelay={0}>
      <Button variant='link'>Hover Card Project</Button>
      <TooltipContent className='max-w-xs p-4 shadow-md' isInverse={false} showArrow={false}>
        <div className='space-y-3'>
          <Progress value={25}>
            <ProgressHeader>
              <Label>Resume project completion</Label>
              <ProgressValue />
            </ProgressHeader>
            <ProgressTrack />
          </Progress>
          <p className='text-sm'>Developing platform where ai will generate resume automatically Ai</p>
          <div className='flex items-center gap-2 text-muted-foreground text-xs'>
            <IconCalendar className='size-4' />
            <span>Started in December 2024</span>
          </div>
          <div className='flex -space-x-2'>
            {avatars.map((avatar, index) => (
              <Avatar
                alt={avatar.name}
                className='ring-2 ring-background'
                fallback={avatar.fallback}
                key={index}
                src={avatar.src}
              />
            ))}
            <Avatar className='ring-2 ring-background' fallback='+6' fallbackClassName='text-xs' />
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipProjectDemo
