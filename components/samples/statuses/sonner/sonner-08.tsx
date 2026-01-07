'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SonnerPositionDemo = () => {
  return (
    <div className='grid grid-cols-3 gap-1'>
      <Button
        onPress={() =>
          toast('Action completed successfully!', {
            position: 'top-left'
          })
        }
        variant='outline'
      >
        Top Left
      </Button>
      <Button
        onPress={() =>
          toast('Action completed successfully!', {
            position: 'top-center'
          })
        }
        variant='outline'
      >
        Top Center
      </Button>
      <Button
        onPress={() =>
          toast('Action completed successfully!', {
            position: 'top-right'
          })
        }
        variant='outline'
      >
        Top Right
      </Button>
      <Button
        onPress={() =>
          toast('Action completed successfully!', {
            position: 'bottom-left'
          })
        }
        variant='outline'
      >
        Bottom Left
      </Button>
      <Button
        onPress={() =>
          toast('Action completed successfully!', {
            position: 'bottom-center'
          })
        }
        variant='outline'
      >
        Bottom Center
      </Button>
      <Button
        onPress={() =>
          toast('Action completed successfully!', {
            position: 'bottom-right'
          })
        }
        variant='outline'
      >
        Bottom Right
      </Button>
    </div>
  )
}

export default SonnerPositionDemo
