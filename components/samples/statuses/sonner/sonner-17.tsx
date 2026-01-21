'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const SolidInfoSonnerDemo = () => {
  return (
    <Button
      onPress={() =>
        toast.info('This is for your information, please note.', {
          style: {
            '--normal-bg': 'light-dark(var(--color-sky-600), var(--color-sky-400))',
            '--normal-text': 'var(--color-white)',
            '--normal-border': 'light-dark(var(--color-sky-600), var(--color-sky-400))'
          } as React.CSSProperties
        })
      }
      variant='outline'
    >
      Solid Info Toast
    </Button>
  )
}

export default SolidInfoSonnerDemo
