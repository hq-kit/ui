import { IconInfoCircle } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipIconDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Icon
      </Button>
      <TooltipContent className='max-w-64 text-pretty'>
        <div className='flex items-center gap-1.5'>
          <IconInfoCircle className='size-4' />
          <p>This tooltip has an icon</p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipIconDemo
