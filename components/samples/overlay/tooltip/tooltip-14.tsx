import { IconQuestionMark } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipAlertDemo = () => {
  return (
    <Tooltip closeDelay={0}>
      <Button variant='link'>Hover Card Alert</Button>
      <TooltipContent className='w-72 p-4 shadow-md' isInverse={false} showArrow={false}>
        <div className='flex flex-col items-center text-center'>
          <span className='mb-2.5 flex size-12 items-center justify-center rounded-full bg-destructive/10'>
            <IconQuestionMark className='size-6 text-destructive' />
          </span>
          <div className='mb-1 font-medium text-lg'>File is corrupted</div>
          <p className='text-sm'>It might have some virus or something that might be harmful for your device. </p>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipAlertDemo
