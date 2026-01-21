'use client'

import { IconTruck } from '@tabler/icons-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SonnerWithIconDemo = () => {
  return (
    <Button
      onPress={() =>
        toast(
          <div className='flex items-center gap-2'>
            <IconTruck className='size-5.5 shrink-0' />
            Your order has been successfully placed, and your parcel is on its way.
          </div>
        )
      }
      variant='outline'
    >
      Toast with icon
    </Button>
  )
}

export default SonnerWithIconDemo
