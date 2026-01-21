'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SonnerWithActionDemo = () => {
  return (
    <Button
      onPress={() =>
        toast('Action completed successfully!', {
          action: {
            label: 'Undo',
            onClick: () => alert('Undo')
          }
        })
      }
      variant='outline'
    >
      Toast with action
    </Button>
  )
}

export default SonnerWithActionDemo
