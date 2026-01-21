'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SoftWarningSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.warning('Warning: Please check the entered data.', {
          style: {
            '--normal-bg':
              'color-mix(in oklab, light-dark(var(--color-amber-600), var(--color-amber-400)) 10%, var(--background))',
            '--normal-text': 'light-dark(var(--color-amber-600), var(--color-amber-400))',
            '--normal-border': 'light-dark(var(--color-amber-600), var(--color-amber-400))'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Soft Warning Toast
    </Button>
  )
}

export default SoftWarningSonnerDemo
