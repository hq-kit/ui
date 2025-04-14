'use client'

import type { DropZoneProps } from 'react-aria-components'
import { composeRenderProps, DropZone as RACDropZone } from 'react-aria-components'

import { cn } from '@/lib/utils'

const DropZone = ({ className, ...props }: DropZoneProps) => (
    <RACDropZone
        className={composeRenderProps(className, (className, { isDropTarget, isFocused, isFocusVisible }) =>
            cn(
                'group flex max-h-[200px] max-w-xl outline-hidden flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-sm transition duration-200 has-[[slot=description]]:text-center',
                isDropTarget &&
                    'border-primary bg-primary/10 ring-primary/20 [&_.text-muted-fg]:text-primary border-solid ring-4',
                isFocused &&
                    'ring-primary/20 invalid:ring-danger/20 ring-4 outline-hidden border-primary/70 invalid:border-danger/70',
                isFocusVisible && 'ring-primary/20 ring-4',
                className
            )
        )}
        {...props}
    />
)
export { DropZone }
