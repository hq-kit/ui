import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipAvatarDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Avatar
      </Button>
      <TooltipContent>
        <div className='flex items-center gap-1.5'>
          <Avatar
            alt='Hallie Richards'
            className='size-5'
            fallback='HR'
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          />
          <p className='font-medium'>Hallie Richards</p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipAvatarDemo
