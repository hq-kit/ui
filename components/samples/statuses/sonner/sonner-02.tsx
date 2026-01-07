'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SonnerWithDescriptionDemo = () => {
  return (
    <Button
      onPress={() =>
        toast('Event is created', {
          description: 'Friday, August 15, 2025 at 9:00 AM'
        })
      }
      variant='outline'
    >
      Toast with description
    </Button>
  )
}

export default SonnerWithDescriptionDemo
