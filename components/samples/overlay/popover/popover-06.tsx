'use client'

import { IconDownload } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

const PopoverDownloadDemo = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isCanceled, setIsCanceled] = useState(false)
  const [value, setValue] = useState(0)
  const [open, setOpen] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (open && !hasStarted && !isCanceled) {
      setHasStarted(true)
    }
  }, [open, hasStarted, isCanceled])

  useEffect(() => {
    if (!hasStarted || isPaused || isCanceled) return

    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev < 100) {
          return Math.min(100, prev + Math.floor(Math.random() * 10) + 1)
        } else {
          clearInterval(timer)

          return prev
        }
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [open, isPaused, isCanceled, hasStarted])

  const getText = () => {
    if (isCanceled) return 'Download Canceled'
    if (isPaused) return 'Download Paused'
    if (value === 100) return 'Download Complete'

    return 'Downloading File'
  }

  return (
    <Popover isOpen={open} onOpenChange={setOpen}>
      <Button size='icon' variant='outline'>
        <IconDownload />
        <span className='sr-only'>Download File</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='flex items-center gap-2'>
            <div className='relative flex size-6 items-center justify-center'>
              <span
                className={cn('absolute inset-0 rounded-full border border-primary border-dashed', {
                  'animation-duration-[3s] animate-spin': value < 100 && !isPaused && !isCanceled
                })}
              />
              <IconDownload className='z-1 size-3' />
            </div>
            <span className='flex-1 font-medium text-sm'>{getText()}</span>
            {!isCanceled && <span className='font-semibold text-sm'>{`${value}%`}</span>}
          </div>
          <Progress className='w-full' value={value}>
            <Progress.Track />
          </Progress>
          <div className='grid grid-cols-2 gap-2'>
            <Button isDisabled={value === 100 || isCanceled} onClick={() => setIsPaused(!isPaused)} size='sm'>
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button
              onClick={() => {
                if (value < 100) {
                  setValue(0)
                  setIsCanceled(true)
                  setHasStarted(false)
                }

                setOpen(false)
              }}
              size='sm'
              variant='secondary'
            >
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverDownloadDemo
