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
        <dt className={cn('col-start-1 border-t pt-3 text-muted-fg first:border-none sm:py-3', className)} {...props} />
    )
}

const DD = ({ className, ...props }: React.HTMLAttributes<HTMLDetailsElement>) => {
    return <dd className={cn('pt-1 pb-3 text-fg sm:border-t sm:nth-2:border-none sm:py-3', className)} {...props} />
}

DL.T = DT
DL.D = DD
export { DL }
