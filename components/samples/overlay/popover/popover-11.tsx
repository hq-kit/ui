'use client'

import { IconBell, IconCircle } from '@tabler/icons-react'
import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

const notifications = [
  {
    id: 1,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    message: 'Harry assigned you task of New API implementation',
    fallback: 'HL',
    time: '15 Minutes'
  },
  {
    id: 2,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    message: 'Jerry joined team',
    fallback: 'OS',
    time: '35 Minutes'
  },
  {
    id: 3,
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    message: 'Congratulate ruby for married life',
    fallback: 'HR',
    time: '3 days'
  }
]

const PopoverNotificationsDemo = () => {
  const [readMessages, setReadMessages] = useState([3])

  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconBell />
        <span className='sr-only'>Notifications</span>
      </Button>
      <PopoverContent className='w-80 p-0'>
        <div className='grid'>
          <div className='flex items-center justify-between gap-2 px-4 py-2.5'>
            <span className='font-medium'>Notifications</span>
            <Button
              className='h-7 rounded-full px-2 py-1 text-xs'
              onClick={() => setReadMessages(notifications.map((item) => item.id))}
              variant='secondary'
            >
              Mark as all read
            </Button>
          </div>
          <Separator className='' />
          <ul className='grid gap-4 p-2'>
            {notifications.map((item) => (
              <li
                className='flex items-start gap-2 rounded-lg px-2 py-1.5 hover:bg-accent'
                key={item.id}
                onClick={() => setReadMessages([...readMessages, item.id])}
                onKeyDown={(e) => e.key === 'Enter' && setReadMessages([...readMessages, item.id])}
                onKeyUp={(e) => e.key === 'Enter' && setReadMessages([...readMessages, item.id])}
              >
                <Avatar alt={item.fallback} className='rounded-lg' fallback={item.fallback} src={item.image} />
                <div className='flex-1 space-y-1'>
                  <div className='font-medium text-sm'>{item.message}</div>
                  <p className='text-muted-foreground text-xs'>{`${item.time} ago`}</p>
                </div>
                {!readMessages.includes(item.id) && (
                  <IconCircle className='size-2 self-center fill-primary text-primary' />
                )}
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverNotificationsDemo
