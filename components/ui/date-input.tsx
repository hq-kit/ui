'use client'

import { composeRenderProps, type DateInputProps, DateSegment, DateInput as RACDateInput } from 'react-aria-components'
import { cn } from '@/lib/utils'

const DateInput = ({ className, ...props }: Omit<DateInputProps, 'children'>) => {
    return (
        <RACDateInput
            className={composeRenderProps(className, (className) =>
                cn(
                    'inline-flex items-center justify-start',
                    'h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
                    'data-focus-within:border-ring data-focus-within:ring-[3px] data-focus-within:ring-ring/50',
                    'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
                    className
                )
            )}
            {...props}
        >
            {(segment) => (
                <DateSegment
                    className='rounded-sm px-1 data-focused:bg-primary data-[type=literal]:p-0 data-focused:text-primary-foreground data-focused:outline-hidden'
                    segment={segment}
                />
            )}
        </RACDateInput>
    )
}

export { DateInput }
