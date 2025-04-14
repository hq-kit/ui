'use client'

import type { SeparatorProps } from 'react-aria-components'
import { Separator as RACSeparator } from 'react-aria-components'

import { cn } from '@/lib/utils'

const Separator = ({ className, children, ...props }: SeparatorProps & { children?: React.ReactNode }) => {
    return children ? (
        <div
            className={cn(
                'text-sm text-muted-fg leading-6 before:border-muted after:border-muted',
                props.orientation === 'vertical'
                    ? 'h-full self-stretch mx-2 flex flex-col items-center before:mb-2 before:flex-1 before:border-l after:mt-2 after:flex-1 after:border-r'
                    : 'h-px w-full self-stretch my-2 flex items-center before:mr-2 before:flex-1 before:border-t after:ml-2 after:flex-1 after:border-t',
                className
            )}
        >
            {children}
        </div>
    ) : (
        <RACSeparator
            {...props}
            className={cn(
                'bg-border shrink-0',
                props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
                className
            )}
        />
    )
}

export { Separator }
