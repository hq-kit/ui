'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const OutlineDestructiveSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.error('Oops, there was an error processing your request.', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'var(--destructive)',
            '--normal-border': 'var(--destructive)'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Outline Destructive Toast
    </Button>
  )
}

export default OutlineDestructiveSonnerDemo
