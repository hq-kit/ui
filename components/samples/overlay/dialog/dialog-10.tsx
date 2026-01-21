'use client'

import { IconCheck, IconMail } from '@tabler/icons-react'
import { OTPInput, type SlotProps } from 'input-otp'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

const CORRECT_CODE = '11208'

const DialogOTPVerificationDemo = () => {
  const [value, setValue] = useState('')
  const [hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined)
  const inputRef = useRef<HTMLInputElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus()
    }
  }, [hasGuessed])

  async function onSubmit(e?: React.FormEvent<HTMLFormElement>) {
    e?.preventDefault?.()

    inputRef.current?.select()
    await new Promise((r) => setTimeout(r, 1_00))

    setHasGuessed(value === CORRECT_CODE)

    setValue('')
    setTimeout(() => {
      inputRef.current?.blur()
    }, 20)
  }

  return (
    <Dialog>
      <Button variant='outline'>OTP code</Button>
      <DialogContent className='sm:max-w-md'>
        <div className='flex flex-col items-center gap-2 pt-6'>
          <div
            aria-hidden='true'
            className={cn(
              'flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-600/10 dark:bg-sky-400',
              { 'bg-green-600/10 dark:bg-green-400/10': hasGuessed }
            )}
          >
            {hasGuessed ? (
              <IconCheck className='text-green-600 dark:text-green-400' strokeWidth={1} />
            ) : (
              <IconMail className='text-sky-600 dark:text-sky-400' strokeWidth={1} />
            )}
          </div>
          <DialogHeader className='pt-0'>
            <DialogTitle className='sm:text-center'>
              {hasGuessed ? 'Account verified!' : 'Check Your Email'}
            </DialogTitle>
            <DialogDescription className='sm:text-center'>
              {hasGuessed ? (
                <span>
                  Congratulations! your email account <strong>exa**le@gmail.com</strong> has been verified
                </span>
              ) : (
                <span>
                  We have sent a verification code to <strong>exa**le@gmail.com</strong>. Please check your inbox and
                  input the code below to activate your account. Try {CORRECT_CODE}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
        </div>

        {hasGuessed ? (
          <div className='text-center'>
            <Button ref={closeButtonRef} slot='close' type='button'>
              Continue
            </Button>
          </div>
        ) : (
          <div className='space-y-4'>
            <div className='flex justify-center'>
              <OTPInput
                containerClassName='flex items-center gap-3 has-disabled:opacity-50'
                id='confirmation-code'
                maxLength={5}
                onChange={setValue}
                onComplete={onSubmit}
                onFocus={() => setHasGuessed(undefined)}
                ref={inputRef}
                render={({ slots }) => (
                  <div className='flex gap-2'>
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                )}
                value={value}
              />
            </div>
            {hasGuessed === false && (
              <p aria-live='polite' className='text-center text-muted-foreground text-xs' role='alert'>
                Invalid code. Please try again.
              </p>
            )}
            <p className='text-center text-sm'>
              Didn&apos;t get a code?{' '}
              <a className='text-sky-600 hover:underline dark:text-sky-400' href='#'>
                Resend
              </a>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        'flex size-9 items-center justify-center rounded-md border border-input bg-background font-medium text-foreground shadow-xs transition-[color,box-shadow]',
        { 'z-10 border-ring ring-[3px] ring-ring/50': props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  )
}

export default DialogOTPVerificationDemo
