import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipRoundedDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Rounded
      </Button>
      <TooltipContent className='rounded-full'>
        <p>This tooltip is rounded</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipRoundedDemo
