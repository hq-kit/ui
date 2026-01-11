'use client'

import { IconDeviceMobile } from '@tabler/icons-react'
import { type FormEvent, startTransition, useEffect, useState } from 'react'
import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

const Example = () => {
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      startTransition(() => {
        setCanResend(true)
      })
    }
  }, [countdown])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success('Phone number verified successfully!')
  }

  const handleResend = () => {
    setCountdown(60)
    setCanResend(false)
    toast.info('Verification code resent')
  }

  return (
    <div className='w-full max-w-sm space-y-6'>
      <div className='flex flex-col items-center space-y-2 text-center'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
          <IconDeviceMobile className='h-6 w-6 text-primary' />
        </div>
        <h2 className='font-semibold text-2xl'>Verify your phone</h2>
        <p className='text-muted-foreground text-sm'>
          We sent a code to <span className='font-medium'>+1 (555) 123-4567</span>
        </p>
      </div>
      <Form className='space-y-6' onSubmit={onSubmit}>
        <InputOTP maxLength={6} name='code'>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button className='w-full' type='submit'>
          Verify Phone Number
        </Button>
      </Form>
      <div className='text-center text-muted-foreground text-sm'>
        {canResend ? (
          <>
            Didn't receive a code?{' '}
            <Button className='h-auto p-0 font-normal' onPress={handleResend} type='button' variant='link'>
              Resend code
            </Button>
          </>
        ) : (
          <span>Resend code in {countdown}s</span>
        )}
      </div>
    </div>
  )
}

export default Example
