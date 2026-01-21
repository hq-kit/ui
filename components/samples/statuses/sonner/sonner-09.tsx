'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SoftInfoSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.info('This is for your information, please note.', {
          style: {
            '--normal-bg':
              'color-mix(in oklab, light-dark(var(--color-sky-600), var(--color-sky-400)) 10%, var(--background))',
            '--normal-text': 'light-dark(var(--color-sky-600), var(--color-sky-400))',
            '--normal-border': 'light-dark(var(--color-sky-600), var(--color-sky-400))'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Soft Info Toast
    </Button>
  )
}

export default SoftInfoSonnerDemo
