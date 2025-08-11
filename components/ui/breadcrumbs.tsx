'use client'

import type { BreadcrumbProps, BreadcrumbsProps } from 'react-aria-components'
import { IconChevronRight, IconMinus, IconPointFilled, IconSlash } from '@tabler/icons-react'
import { createContext, type ReactNode, use } from 'react'
import { Breadcrumb, composeRenderProps, Link, Breadcrumbs as RACBreadcrumbs } from 'react-aria-components'
import { cn } from '@/lib/utils'

type BreadcrumbsContextProps = {
    separator?: 'chevron' | 'slash' | 'dash' | 'dot'
}

const BreadcrumbsContext = createContext<BreadcrumbsContextProps>({
    separator: 'chevron'
})

const Breadcrumbs = <T extends object>({ className, ...props }: BreadcrumbsProps<T> & BreadcrumbsContextProps) => {
    return (
        <BreadcrumbsContext.Provider value={{ separator: props.separator }}>
            <RACBreadcrumbs {...props} className={cn('flex items-center gap-1.5 **:[svg]:size-3.5', className)} />
        </BreadcrumbsContext.Provider>
    )
}

interface BreadcrumbsItemProps extends BreadcrumbProps {
    href?: string
}

const BreadcrumbsItem = ({ href, className, ...props }: BreadcrumbsItemProps) => {
    const { separator } = use(BreadcrumbsContext)

    return (
        <Breadcrumb
            {...props}
            className={composeRenderProps(className, (className) =>
                cn(
                    'inline-flex items-center gap-2 text-muted-foreground text-sm data-current:text-foreground',
                    className
                )
            )}
        >
            {(values) => (
                <>
                    {href ? (
                        <Link
                            className='inline-flex items-center gap-2 transition-colors hover:text-foreground'
                            href={href}
                        >
                            {props.children}
                        </Link>
                    ) : (
                        (props.children as ReactNode)
                    )}
                    {!values.isCurrent && <Separator separator={separator} />}
                </>
            )}
        </Breadcrumb>
    )
}

const Separator = ({ separator = 'chevron' }: { separator?: BreadcrumbsContextProps['separator'] }) => {
    return (
        <span className='select-none *:text-muted-foreground'>
            {separator === 'chevron' && <IconChevronRight />}
            {separator === 'slash' && <IconSlash />}
            {separator === 'dash' && <IconMinus />}
            {separator === 'dot' && <IconPointFilled />}
        </span>
    )
}

Breadcrumbs.Item = BreadcrumbsItem

export { Breadcrumbs }
