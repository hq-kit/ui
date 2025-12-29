'use client'

import { IconPointFilled } from '@tabler/icons-react'
import { useId } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

const InputOTPCustomSeparatorDemo = () => {
  const id = useId()

  return (
    <div className='space-y-3'>
      <Label htmlFor={id}>Input OTP Custom Separator</Label>
      <InputOTP id={id} maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <div className='text-muted-foreground'>
          <IconPointFilled />
        </div>
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default InputOTPCustomSeparatorDemo
