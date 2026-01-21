import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipNoArrowDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        No arrow
      </Button>
      <TooltipContent className='[&_svg]:invisible'>
        <p>This tooltip don&apos;t have arrow</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipNoArrowDemo
