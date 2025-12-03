'use client'

import { Separator as RACSeparator, type SeparatorProps } from 'react-aria-components'
import { cn } from '@/lib/utils'

function Separator({ className, orientation = 'horizontal', ...props }: SeparatorProps) {
    return (
        <RACSeparator
            className={cn(
                'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
                className
            )}
            data-slot='separator'
            orientation={orientation}
            {...props}
        />
    )
}

export { Separator }
