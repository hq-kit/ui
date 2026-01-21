'use client'

import { IconHeartFilled } from '@tabler/icons-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const CardProductDemo = () => {
  const [liked, setLiked] = useState<boolean>(false)

  return (
    <div className='relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg'>
      <div className='flex h-60 items-center justify-center'>
        <img
          alt='Shoes'
          className='w-75'
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-11.png?width=300&format=auto'
        />
      </div>
      <Button
        className='absolute top-4 right-4 rounded-full bg-primary/10 hover:bg-primary/20'
        onClick={() => setLiked(!liked)}
        size='icon'
      >
        <IconHeartFilled className={cn(liked ? 'fill-destructive stroke-destructive' : 'stroke-white')} />
        <span className='sr-only'>Like</span>
      </Button>
      <Card className='border-none'>
        <CardHeader>
          <CardTitle>Nike Jordan Air Rev</CardTitle>
          <CardDescription className='flex items-center gap-2'>
            <Badge className='rounded-sm' variant='outline'>
              EU38
            </Badge>
            <Badge className='rounded-sm' variant='outline'>
              Black and White
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Crossing hardwood comfort with off-court flair. &apos;80s-Inspired construction, bold details and
            nothin&apos;-but-net style.
          </p>
        </CardContent>
        <CardFooter className='justify-between gap-3 max-sm:flex-col max-sm:items-stretch'>
          <div className='flex flex-col'>
            <span className='font-medium text-sm uppercase'>Price</span>
            <span className='font-semibold text-xl'>$69.99</span>
          </div>
          <Button size='lg'>Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardProductDemo
