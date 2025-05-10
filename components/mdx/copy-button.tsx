'use client'

import { IconCheck, IconCopy } from 'hq-icons'
import { Button, type ButtonProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface CopyButtonProps extends ButtonProps {
    isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
    return (
        <Button
            aria-label='Copy'
            className='flex size-7 cursor-pointer items-center justify-center rounded-md text-zinc-300 outline-hidden backdrop-blur-2xl hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-ring'
            {...props}
        >
            <IconCopy
                className={cn('size-4 rotate-0 scale-100 transition-all duration-200', isCopied && 'rotate-90 scale-0')}
            />
            <IconCheck
                className={cn(
                    'absolute size-4 rotate-90 scale-0 transition-all duration-200',
                    isCopied && 'rotate-0 scale-100'
                )}
            />
        </Button>
    )
}
