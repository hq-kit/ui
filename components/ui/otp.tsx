'use client'

import { IconCircle } from 'hq-icons'
import { OTPInput, OTPInputContext } from 'input-otp'
import { type ComponentProps, use } from 'react'

import { cn } from '@/lib/utils'

type OTPInputProps = ComponentProps<typeof OTPInput>
const OTP = ({ className, autoFocus = false, containerClassName, ref, ...props }: OTPInputProps) => (
    <OTPInput
        data-1p-ignore
        ref={ref}
        autoFocus={autoFocus}
        containerClassName={cn('flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
        className={cn('mt-auto h-[2.5rem] bg-destructive disabled:cursor-not-allowed', className)}
        {...props}
    />
)

type OTPGroupProps = ComponentProps<'div'>
const OTPGroup = ({ className, ref, ...props }: OTPGroupProps) => (
    <div ref={ref} className={cn('flex items-center gap-x-1.5', className)} {...props} />
)

interface OTPSlotProps extends ComponentProps<'div'> {
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
                'relative flex size-9 items-center justify-center rounded-lg border bg-transparent text-sm tabular-nums shadow-xs transition-all dark:bg-input/30',
                isActive && 'z-10 border-primary/70 ring-4 ring-ring/50',
                className
            )}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                    <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />
                </div>
            )}
        </div>
    )
}

type OTPSeparatorProps = ComponentProps<'div'>
const OTPSeparator = ({ ref, ...props }: OTPSeparatorProps) => (
    <div ref={ref} {...props}>
        <IconCircle className='size-2 fill-foreground' />
    </div>
)

OTP.Group = OTPGroup
OTP.Slot = OTPSlot
OTP.Separator = OTPSeparator

export { OTP }
export type { OTPGroupProps, OTPSeparatorProps, OTPSlotProps }
