'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SolidDestructiveSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.error('Oops, there was an error processing your request.', {
          style: {
            '--normal-bg':
              'light-dark(var(--destructive), color-mix(in oklab, var(--destructive) 60%, var(--background)))',
            '--normal-text': 'var(--color-white)',
            '--normal-border': 'transparent'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Solid Destructive Toast
    </Button>
  )
}

export default SolidDestructiveSonnerDemo
