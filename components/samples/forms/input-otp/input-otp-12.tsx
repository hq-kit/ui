'use client'

import { IconKey, IconShield } from '@tabler/icons-react'
import { type FormEvent, useState } from 'react'
import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { FieldDescription, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { TextField } from '@/components/ui/text-field'

const Example = () => {
  const [useBackupCode, setUseBackupCode] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const code = formData.get('code') as string
    const backupCode = formData.get('backupCode') as string

    if (useBackupCode) {
      toast.success(`Authenticated with backup code: ${backupCode}`)
    } else {
      toast.success(`Authenticated with code: ${code}`)
    }
  }

  return (
    <div className='w-full max-w-sm space-y-6'>
      <div className='flex flex-col items-center space-y-2 text-center'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
          <IconShield className='h-6 w-6 text-primary' />
        </div>
        <h2 className='font-semibold text-2xl'>Two-Factor Authentication</h2>
        <p className='text-muted-foreground text-sm'>Enter the code from your authenticator app</p>
      </div>
      <Form className='space-y-6' onSubmit={onSubmit}>
        {useBackupCode ? (
          <TextField name='backupCode'>
            <Label>Backup Code</Label>
            <Input className='bg-background' placeholder='Enter backup code' />
            <FieldDescription>Enter one of your backup codes.</FieldDescription>
            <FieldError />
          </TextField>
        ) : (
          <InputOTP maxLength={6}>
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
        )}
        <Button className='w-full' type='submit'>
          Verify
        </Button>
      </Form>
      <div className='text-center'>
        <Button
          className='h-auto p-0 text-sm'
          onClick={() => setUseBackupCode(!useBackupCode)}
          type='button'
          variant='link'
        >
          <IconKey className='mr-2 h-3 w-3' />
          {useBackupCode ? 'Use authenticator code' : 'Use backup code instead'}
        </Button>
      </div>
    </div>
  )
}

export default Example
