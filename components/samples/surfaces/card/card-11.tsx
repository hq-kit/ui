'use client'

import {
  IconCircleCheck,
  IconDots,
  IconHeart,
  IconMessage,
  IconRepeat,
  IconSend,
  IconUserPlus
} from '@tabler/icons-react'
import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const CardTweetDemo = () => {
  const [liked, setLiked] = useState<boolean>(true)

  return (
    <Card className='max-w-md'>
      <CardHeader className='flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Avatar
            alt='Hallie Richards'
            className='ring-2 ring-ring'
            fallback='PG'
            src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
          />
          <div className='flex flex-col gap-0.5'>
            <CardTitle className='flex items-center gap-1 text-sm'>
              Philip George <IconCircleCheck className='size-4 fill-sky-600 stroke-white dark:fill-sky-400' />
            </CardTitle>
            <CardDescription>@philip20</CardDescription>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Button size='sm' variant='outline'>
            <IconUserPlus />
            Follow
          </Button>
          <Button aria-label='Toggle menu' size='icon' variant='ghost'>
            <IconDots />
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6 text-sm'>
        <img
          alt='Banner'
          className='aspect-video w-full rounded-md object-cover'
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-6.png?width=350&format=auto'
        />
        <p>
          Lost in the colors of the night 🌌✨ Sometimes the blur reveals more than clarity.{' '}
          <a className='text-sky-600 dark:text-sky-400' href='#'>
            #AbstractVibes
          </a>{' '}
          <a className='text-sky-600 dark:text-sky-400' href='#'>
            #Dreamscape
          </a>{' '}
          <a className='text-sky-600 dark:text-sky-400' href='#'>
            #VisualPoetry
          </a>
        </p>
      </CardContent>
      <CardFooter className='flex items-center gap-1'>
        <Button onClick={() => setLiked(!liked)} size='sm' variant='ghost'>
          <IconHeart className={cn(liked && 'fill-destructive stroke-destructive')} />
          2.1K
        </Button>
        <Button size='sm' variant='ghost'>
          <IconMessage />
          1.4K
        </Button>
        <Button size='sm' variant='ghost'>
          <IconRepeat />
          669
        </Button>
        <Button size='sm' variant='ghost'>
          <IconSend />
          1.1K
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardTweetDemo
