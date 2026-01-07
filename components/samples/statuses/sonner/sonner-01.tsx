'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SonnerDemo = () => {
  return (
    <Button onClick={() => toast('Action completed successfully!')} variant='outline'>
      Default Toast
    </Button>
  )
}

export default SonnerDemo
