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
            className='flex size-7 items-center justify-center rounded-md bg-zinc-600/80 text-zinc-300 outline-hidden backdrop-blur-2xl hover:bg-zinc-700/80'
            {...props}
        >
            <IconClipboard
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
