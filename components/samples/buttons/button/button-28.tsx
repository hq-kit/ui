'use client'

import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ButtonCopyStateDemo = () => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('Thank you for using Shadcn Studio!')
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Button className='relative disabled:opacity-100' isDisabled={copied} onPress={handleCopy} variant='outline'>
      <span className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <IconCheck className='stroke-green-600 dark:stroke-green-400' />
      </span>
      <span className={cn('absolute left-4 transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <IconCopy />
      </span>
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  )
}

export default ButtonCopyStateDemo
