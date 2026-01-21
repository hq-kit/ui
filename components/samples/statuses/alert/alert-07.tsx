'use client'

import { IconUpload, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Progress, ProgressTrack } from '@/components/ui/progress'

const AlertFileUploadDemo = () => {
  const [isActive, setIsActive] = useState(true)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isActive) return null

  return (
    <Alert className='flex justify-between'>
      <IconUpload />
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>Uploading your &apos;Img-234.png&apos;</AlertTitle>
          <AlertDescription>Please wait While we upload your image.</AlertDescription>
        </div>
        <Progress
          aria-label='Upload Progress'
          className='**:data-[slot=bar]:bg-sky-600 **:data-[slot=track]:bg-sky-600/20 dark:**:data-[slot=bar]:bg-sky-400 dark:**:data-[slot=track]:bg-sky-400/20'
          value={progress}
        >
          <ProgressTrack />
        </Progress>
        <div className='flex items-center gap-4'>
          <Button className='h-7 cursor-pointer rounded-md px-2' variant='ghost'>
            Cancel
          </Button>
          <Button
            className='h-7 cursor-pointer rounded-md px-2 text-sky-600 hover:bg-sky-600/10 hover:text-sky-600 dark:text-sky-400 dark:hover:bg-sky-400/10 dark:hover:text-sky-400'
            isDisabled
            variant='ghost'
          >
            Upload another
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

export default AlertFileUploadDemo
