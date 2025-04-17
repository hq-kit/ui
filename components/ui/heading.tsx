import type React from 'react'

import { cn } from '@/lib/utils'

type HeadingType = { level?: 1 | 2 | 3 | 4 } & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4'>

interface HeadingProps extends HeadingType {
    tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
    className?: string | undefined
}

const Heading = ({ className, tracking = 'normal', level = 1, ...props }: HeadingProps) => {
    const Element: `h${typeof level}` = `h${level}`
    return (
        <Element
            className={cn(
                'font-sans text-fg',
                level === 1 && 'font-bold text-xl sm:text-2xl',
                level === 2 && 'font-semibold text-lg sm:text-xl',
                level === 3 && 'font-semibold text-base sm:text-lg',
                level === 4 && 'font-semibold text-base',
                tracking === 'tighter' && 'tracking-tighter',
                tracking === 'tight' && 'tracking-tight',
                tracking === 'normal' && 'tracking-normal',
                tracking === 'wide' && 'tracking-wide',
                tracking === 'wider' && 'tracking-wider',
                tracking === 'widest' && 'tracking-widest',
                className
            )}
            {...props}
        />
    )
}

export { Heading }
