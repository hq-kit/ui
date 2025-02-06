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
            className='bg-fg dark:bg-bg flex size-7 items-center justify-center rounded-lg border text-white backdrop-blur outline-none focus:outline-none'
            {...props}
        >
            <IconClipboard
                className={cn(
                    'size-4 scale-100 rotate-0 transition-all duration-200',
                    isCopied && 'scale-0 rotate-90'
                )}
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
