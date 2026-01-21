'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SoftDestructiveSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.error('Oops, there was an error processing your request.', {
          style: {
            '--normal-bg': 'color-mix(in oklab, var(--destructive) 10%, var(--background))',
            '--normal-text': 'var(--destructive)',
            '--normal-border': 'var(--destructive)'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Soft Destructive Toast
    </Button>
  )
}

export default SoftDestructiveSonnerDemo
