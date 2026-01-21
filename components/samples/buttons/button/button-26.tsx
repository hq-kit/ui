'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ButtonPromiseDemo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<undefined | string>(undefined)

  const handleClick = async () => {
    setIsLoading(true)
    setStatus(undefined)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus(Math.random() > 0.5 ? 'Submitted!' : 'Rejected!')
    } catch (error) {
      setStatus('Rejected!')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      className={cn('cursor-pointer hover:no-underline', {
        'text-green-600 dark:text-green-400': status === 'Submitted!',
        'text-destructive': status === 'Rejected!'
      })}
      isPending={isLoading}
      onPress={handleClick}
      variant='link'
    >
      {status ? status : 'Click me'}
    </Button>
  )
}

export default ButtonPromiseDemo
