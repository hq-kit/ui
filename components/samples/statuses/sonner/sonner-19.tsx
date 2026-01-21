'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SolidWarningSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.warning('Warning: Please check the entered data.', {
          style: {
            '--normal-bg': 'light-dark(var(--color-amber-600), var(--color-amber-400))',
            '--normal-text': 'var(--color-white)',
            '--normal-border': 'light-dark(var(--color-amber-600), var(--color-amber-400))'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Solid Warning Toast
    </Button>
  )
}

export default SolidWarningSonnerDemo
