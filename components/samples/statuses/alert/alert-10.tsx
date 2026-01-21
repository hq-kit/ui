'use client'

import { IconAlertCircle, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertGradientDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='flex justify-between border-accent-foreground/20 bg-linear-to-b from-accent to-60% to-transparent text-accent-foreground'>
      <IconAlertCircle />
      <div className='flex flex-1 flex-col gap-1'>
        <AlertTitle>Verify your email to activate your account</AlertTitle>
        <AlertDescription className='text-accent-foreground/60'>
          We&apos;ve sent a confirmation link to your inbox. Check your email to complete the sign-up.
        </AlertDescription>
      </div>
      <button className='cursor-pointer' onClick={() => setIsActive(false)} type='button'>
        <IconX className='size-5' />
        <span className='sr-only'>Close</span>
      </button>
    </Alert>
  )
}

export default AlertGradientDemo
