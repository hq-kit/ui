'use client'

import { IconCheck, IconClipboard } from 'hq-icons'
import { Button, type ButtonProps } from 'react-aria-components'

import { cn } from '@/components/ui'

interface CopyButtonProps extends ButtonProps {
    isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
    return (
        <Button
            aria-label='Copy'
            className='size-7 outline-none focus:outline-none flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-white backdrop-blur hover:bg-zinc-700'
            {...props}
        >
            <IconClipboard
                className={cn(
                    'size-[1rem] rotate-0 scale-100 transition-all',
                    isCopied && 'rotate-90 scale-0'
                )}
            />
            <IconCheck
                className={cn(
                    'absolute size-[1rem] rotate-90 scale-0 transition-all',
                    isCopied && 'rotate-0 scale-100'
                )}
            />
        </Button>
    )
}
