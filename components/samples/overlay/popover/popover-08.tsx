import { IconMessage } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/input'
import { Popover, PopoverContent } from '@/components/ui/popover'

const PopoverFeedbackDemo = () => {
  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconMessage />
        <span className='sr-only'>Feedback</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='grid gap-2'>
          <div className='font-medium'>Feedback</div>
          <Textarea className='max-h-56' placeholder='Type your message here.' />
          <div className='grid w-full grid-cols-2 gap-2'>
            <Button size='sm'>Send</Button>
            <Button size='sm' variant='secondary'>
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverFeedbackDemo
