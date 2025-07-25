'use client'

import { Tooltip } from '@/components/ui'
import { cn } from '@/lib/utils'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { Button, type ButtonProps } from 'react-aria-components'

interface CopyButtonProps extends ButtonProps {
    isCopied?: boolean
}

export const CopyButton = ({ isCopied, ...props }: CopyButtonProps) => {
    return (
        <Tooltip>
            <Button
                aria-label='Copy'
                className='flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md pressed:bg-zinc-700 text-zinc-300 outline-hidden backdrop-blur-2xl hover:bg-zinc-800 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-ring'
                {...props}
            >
                <IconCopy
                    className={cn(
                        'size-4 rotate-0 scale-100 transition-all duration-200',
                        isCopied && 'rotate-90 scale-0'
                    )}
                />
                <IconCheck
                    className={cn(
                        'absolute size-4 rotate-90 scale-0 transition-all duration-200',
                        isCopied && 'rotate-0 scale-100'
                    )}
                />
            </Button>
            <Tooltip.Content>Copy to clipboard</Tooltip.Content>
        </Tooltip>
    )
}
