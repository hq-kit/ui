'use client'

import { cn } from './utils'

const dots = 'mx-[1px] inline-block size-[0.3125rem] animate-blink rounded-lg'

export const LoadingDots = ({ className }: { className: string }) => {
    return (
        <span className='mx-2 inline-flex items-center'>
            <span className={cn(dots, className)} />
            <span className={cn(dots, 'animation-delay-[200ms]', className)} />
            <span className={cn(dots, 'animation-delay-[400ms]', className)} />
        </span>
    )
}
