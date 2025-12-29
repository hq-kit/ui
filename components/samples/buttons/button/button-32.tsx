import { IconPlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const IconButtonTooltipDemo = () => {
  return (
    <Tooltip>
      <Button className='rounded-full' size='icon' variant='outline'>
        <IconPlus />
        <span className='sr-only'>Add new item</span>
      </Button>
      <TooltipContent className='px-2 py-1 text-xs'>Add new item</TooltipContent>
    </Tooltip>
  )
}

export default IconButtonTooltipDemo
