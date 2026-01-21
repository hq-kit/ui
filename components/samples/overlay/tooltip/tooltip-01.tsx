import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Default
      </Button>
      <TooltipContent>
        <p>This is a simple tooltip</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipDemo
