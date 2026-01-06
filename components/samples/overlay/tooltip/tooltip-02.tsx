import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipLightDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Light
      </Button>
      <TooltipContent isInverse={false}>
        <p>This tooltip will be always light</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipLightDemo
