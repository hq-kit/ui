'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const ClosableSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast('Action completed successfully!', {
          closeButton: true
        })
      }
      variant='outline'
    >
      Closable Toast
    </Button>
  )
}

export default ClosableSonnerDemo
