'use client'
import { IconChevronRight, IconMapPin } from '@tabler/icons-react'
import { Link } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'

const PopoverAboutHimalayasDemo = () => {
  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconMapPin />
        <span className='sr-only'>About Himalayas</span>
      </Button>
      <PopoverContent className='w-85 p-0'>
        <div className='flex'>
          <div className='space-y-2 p-4'>
            <p className='font-medium'>About Himalayas</p>
            <p className='text-muted-foreground text-xs'>
              The Great Himalayan mountain ranges in the Indian sub-continent region.{' '}
            </p>
            <Link
              className='flex w-fit text-xs hover:underline'
              href='https://en.wikipedia.org/wiki/Himalayas'
              rel='noopener noreferrer'
              target='_blank'
            >
              Read more
              <IconChevronRight className='size-4' />
            </Link>
          </div>
          <img
            alt='the himalayas'
            className='h-34 w-2/5 rounded-r-md object-cover'
            src='https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg?height=136'
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverAboutHimalayasDemo
