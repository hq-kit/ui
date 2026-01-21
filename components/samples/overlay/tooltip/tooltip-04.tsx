import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipErrorDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Error
      </Button>
      <TooltipContent className='bg-destructive text-white [&_svg]:fill-destructive'>
        <p>This is an error tooltip</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipErrorDemo
