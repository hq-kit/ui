'use client'

import { use } from 'react'

import { IconCircle } from 'hq-icons'
import { OTPInput, OTPInputContext } from 'input-otp'

import { cn } from './utils'

type OTPInputProps = React.ComponentProps<typeof OTPInput>
const OTP = ({ className, autoFocus = true, containerClassName, ref, ...props }: OTPInputProps) => (
    <OTPInput
        data-1p-ignore
        ref={ref}
        autoFocus={autoFocus}
        containerClassName={cn(
            'flex items-center gap-2 has-disabled:opacity-50',
            containerClassName
        )}
        className={cn('bg-danger mt-auto h-[2.5rem] disabled:cursor-not-allowed', className)}
        {...props}
    />
)

type OTPGroupProps = React.ComponentProps<'div'>
const OTPGroup = ({ className, ref, ...props }: OTPGroupProps) => (
    <div ref={ref} className={cn('flex items-center gap-x-1.5', className)} {...props} />
)

interface OTPSlotProps extends React.ComponentProps<'div'> {
    index: number
}

const OTPSlot = ({ index, className, ref, ...props }: OTPSlotProps) => {
    const OTPContext = use(OTPInputContext)
    const slot = OTPContext.slots[index]

    if (!slot) {
        throw new Error('Slot not found')
    }

    const { char, hasFakeCaret, isActive } = slot

    return (
        <div
            ref={ref}
            className={cn(
                'border-muted relative flex size-10 items-center justify-center rounded-md border text-sm tabular-nums transition-all',
                isActive && 'border-primary/70 ring-primary/20 z-10 ring-4',
                className
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                    <div className='animate-caret-blink bg-fg h-4 w-px duration-1000' />
                </div>
            )}
        </div>
    )
}

type OTPSeparatorProps = React.ComponentProps<'div'>
const OTPSeparator = ({ ref, ...props }: OTPSeparatorProps) => (
    <div ref={ref} {...props}>
        <IconCircle className='fill-fg size-2' />
    </div>
)

OTP.Group = OTPGroup
OTP.Slot = OTPSlot
OTP.Separator = OTPSeparator

export { OTP }
export type { OTPGroupProps, OTPSeparatorProps, OTPSlotProps }
