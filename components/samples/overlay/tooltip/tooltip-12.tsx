import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipStatsDemo = () => {
  return (
    <Tooltip closeDelay={0}>
      <Button variant='link'>Hover Card Stats</Button>
      <TooltipContent className='w-fit p-4 shadow-md' isInverse={false} showArrow={false}>
        <div className='flex items-center gap-1.5'>
          <div className='flex flex-col gap-1'>
            <div className='font-medium text-sm'>Total page views</div>
            <div className='font-semibold text-xl'>89,400</div>
            <div className='text-muted-foreground text-xs'>21% ↗︎ than last month</div>
          </div>
          <Avatar
            alt='Hallie Richards'
            className='size-10'
            fallback='HR'
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          />
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipStatsDemo
