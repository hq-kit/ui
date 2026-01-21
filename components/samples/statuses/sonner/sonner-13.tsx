'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const OutlineInfoSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.info('This is for your information, please note.', {
          style: {
            '--normal-bg': 'var(--background)',
            '--normal-text': 'light-dark(var(--color-sky-600), var(--color-sky-400))',
            '--normal-border': 'light-dark(var(--color-sky-600), var(--color-sky-400))'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Outline Info Toast
    </Button>
  )
}

export default OutlineInfoSonnerDemo
