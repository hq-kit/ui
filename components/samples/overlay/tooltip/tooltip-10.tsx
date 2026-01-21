import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipDirectionsDemo = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <Tooltip>
        <Button size='sm' variant='outline'>
          Left
        </Button>
        <TooltipContent placement='left'>Tooltip on left</TooltipContent>
      </Tooltip>
      <Tooltip>
        <Button size='sm' variant='outline'>
          Top
        </Button>
        <TooltipContent placement='top'>Tooltip on top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <Button size='sm' variant='outline'>
          Bottom
        </Button>
        <TooltipContent placement='bottom'>Tooltip on bottom</TooltipContent>
      </Tooltip>
      <Tooltip>
        <Button size='sm' variant='outline'>
          Right
        </Button>
        <TooltipContent placement='right'>Tooltip on right</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TooltipDirectionsDemo
