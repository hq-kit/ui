'use client'

import { useEffect, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar } from '@/components/ui/avatar'
import { Progress, ProgressTrack } from '@/components/ui/progress'

const AlertTaskDemo = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Alert className='flex gap-3'>
      <Avatar
        alt='Hallie Richards'
        className='rounded-sm'
        fallback='HR'
        src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
      />
      <div className='flex flex-1 flex-col gap-2'>
        <div className='flex-1 flex-col justify-center gap-1'>
          <AlertTitle>@Rocky</AlertTitle>
          <AlertDescription>this projects task is remaining, deadline is near.</AlertDescription>
        </div>
        <Progress
          aria-label='Task progress'
          className='**:data-[slot=bar]:bg-amber-600 **:data-[slot=track]:bg-amber-600/20 dark:**:data-[slot=bar]:bg-amber-400 dark:**:data-[slot=track]:bg-amber-400/20'
          value={progress}
        >
          <ProgressTrack />
        </Progress>
      </div>
    </Alert>
  )
}

export default AlertTaskDemo
