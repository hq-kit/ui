'use client'

import { IconAlertTriangle } from '@tabler/icons-react'
import { type FormEvent, useState } from 'react'
import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'

const Example = () => {
  const [isConfirming, setIsConfirming] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsConfirming(true)
    // Simulate transaction confirmation
    setTimeout(() => {
      setIsConfirming(false)
      toast.success('Transaction confirmed successfully!')
    }, 1500)
  }

  return (
    <div className='w-full max-w-sm space-y-6'>
      <div className='space-y-2 text-center'>
        <h2 className='font-semibold text-2xl'>Confirm Transaction</h2>
        <p className='text-muted-foreground text-sm'>You're about to send $1,250.00 to John Doe</p>
      </div>
      <Alert>
        <IconAlertTriangle className='h-4 w-4' />
        <AlertTitle>Security Check</AlertTitle>
        <AlertDescription>
          For your security, please enter the confirmation code sent to your registered email address.
        </AlertDescription>
      </Alert>
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
        <div className='flex gap-2'>
          <Button
            className='flex-1'
            onClick={() => toast.info('Transaction cancelled')}
            type='button'
            variant='outline'
          >
            Cancel
          </Button>
          <Button className='flex-1' isPending={isConfirming} type='submit'>
            {isConfirming ? 'Confirming...' : 'Confirm Transaction'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Example
