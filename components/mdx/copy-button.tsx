'use client'

import { IconCheck, IconClipboard } from 'hq-icons'
import { Button, type ButtonProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface CopyButtonProps extends ButtonProps {
    isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
    return (
        <Button
            aria-label='Copy'
            className='bg-zinc-600/80 hover:bg-zinc-700/80 flex size-7 items-center justify-center rounded-lg text-zinc-300 outline-hidden backdrop-blur-2xl'
            {...props}
        >
            <IconClipboard
                className={cn('size-4 scale-100 rotate-0 transition-all duration-200', isCopied && 'scale-0 rotate-90')}
            />
            <IconCheck
                className={cn(
                    'absolute size-4 scale-0 rotate-90 transition-all duration-200',
                    isCopied && 'scale-100 rotate-0'
                )}
            />
        </Button>
    )
}
