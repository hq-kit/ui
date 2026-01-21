import { IconChevronRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

const HoverCardMediaDemo = () => {
  return (
    <Tooltip closeDelay={0}>
      <Button variant='link'>Hover Card Media</Button>
      <TooltipContent className='max-w-xs p-4 shadow-md' isInverse={false} showArrow={false}>
        <div className='space-y-2'>
          <img
            alt='Content-image'
            className='w-full rounded'
            src='https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg?width=232'
          />
          <div className='space-y-1'>
            <p className='font-medium text-sm'>About Himalayas</p>
            <p className='text-muted-foreground text-xs'>
              The Great Himalayan mountain ranges in the Indian sub-continent region.{' '}
              <a
                className='flex w-fit underline hover:text-foreground'
                href='https://en.wikipedia.org/wiki/Himalayas'
                rel='noopener noreferrer'
                target='_blank'
              >
                Read more
                <IconChevronRight className='size-4' />
              </a>
            </p>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default HoverCardMediaDemo
