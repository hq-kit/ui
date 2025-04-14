import { cn } from '@/lib/utils'

const DL = ({ className, ...props }: React.HTMLAttributes<HTMLDListElement>) => {
    return (
        <dl
            className={cn(
                'grid grid-cols-1 text-base/6 sm:grid-cols-[min(50%,calc(var(--spacing)*80))_auto] sm:text-sm/6',
                className
            )}
            {...props}
        />
    )
}

const DT = ({ className, ...props }: React.HTMLAttributes<HTMLDetailsElement>) => {
    return (
        <dt className={cn('text-muted-fg col-start-1 border-t pt-3 first:border-none sm:py-3', className)} {...props} />
    )
}

const DD = ({ className, ...props }: React.HTMLAttributes<HTMLDetailsElement>) => {
    return <dd className={cn('text-fg pt-1 pb-3 sm:border-t sm:py-3 sm:nth-2:border-none', className)} {...props} />
}

DL.T = DT
DL.D = DD
export { DL }
