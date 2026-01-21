'use client'

import { IconAlertCircle, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

const AlertMultipleActionDemo = () => {
  const [isActive, setIsActive] = useState(true)

  if (!isActive) return null

  return (
    <Alert className='flex justify-between border-none bg-primary text-primary-foreground'>
      <IconAlertCircle />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>A new update is available</AlertTitle>
          <AlertDescription className='text-primary-foreground/80'>
            Includes the at new dashboard View. Pages end exports will now load taster
          </AlertDescription>
        </div>
        <div className='flex items-center gap-4'>
          <Button className='h-7 cursor-pointer rounded-md bg-secondary/10 px-2 hover:bg-secondary/20 focus-visible:bg-secondary/20'>
            Skip this update
          </Button>
          <Button className='h-7 cursor-pointer rounded-md px-2' variant='secondary'>
            Install now
          </Button>
        </div>
      </div>
      <button className='size-5 cursor-pointer' onClick={() => setIsActive(false)} type='button'>
        <IconX className='size-5' />
        <span className='sr-only'>Close</span>
      </button>
    </Alert>
  )
}

export default AlertMultipleActionDemo
