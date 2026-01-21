import { IconInfoCircle } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipContentDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Content
      </Button>
      <TooltipContent className='max-w-64 text-pretty py-3'>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <IconInfoCircle className='size-4' />
            <p className='font-medium text-sm'>Accessibility First</p>
          </div>
          <p className='text-background/80'>
            Tooltips should supplement the UI, not hide critical information. Ensure all important content is visible
            without requiring tooltip interaction.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipContentDemo
