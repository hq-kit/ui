import React from 'react'

import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    shape?: 'square' | 'circle'
}
const Skeleton = ({ shape, className, ...props }: SkeletonProps) => {
    return (
        <div
            className={cn(
                'shrink-0 animate-pulse bg-muted/50',
                shape === 'circle' ? 'rounded-full' : 'rounded-lg',
                className
            )}
            {...props}
        />
    )
}

export { Skeleton }
