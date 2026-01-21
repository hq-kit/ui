import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const TooltipBadgeDemo = () => {
  return (
    <Tooltip>
      <Button size='sm' variant='outline'>
        Badge
      </Button>
      <TooltipContent>
        <div className='flex items-center gap-2'>
          <p>Team plan: $99/month per user.</p>
          <Badge className='px-1.5 py-px' variant='secondary'>
            Trending
          </Badge>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipBadgeDemo
