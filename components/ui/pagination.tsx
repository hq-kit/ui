'use client'

import type { ReactNode, RefObject } from 'react'
import type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps, TextProps } from 'react-aria-components'
import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconDots } from '@tabler/icons-react'
import { composeRenderProps, ListBox, ListBoxItem, ListBoxSection, Text } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/utils'

interface PaginationProps<T> extends ListBoxProps<T> {
    ref?: RefObject<HTMLDivElement>
}

const paginationVariants = tv({
    base: 'group flex',
    variants: {
        gap: {
            true: 'space-x-1 *:rounded-lg',
            false: '-space-x-px *:first:rounded-l-lg *:last:rounded-r-lg'
        }
    },
    defaultVariants: {
        gap: true
    }
})

const Pagination = <T extends object>({
    className,
    gap,
    ref,
    ...props
}: PaginationProps<T> & VariantProps<typeof paginationVariants>) => {
    return (
        <ListBox
            aria-label={props['aria-label'] || 'Pagination'}
            className={composeRenderProps(className, (className) => cn(paginationVariants({ gap }), className))}
            layout='grid'
            orientation='horizontal'
            ref={ref}
            {...props}
        />
    )
}

interface PaginationPagesProps<T> extends ListBoxSectionProps<T> {
    ref?: RefObject<HTMLElement>
}

const PaginationPages = <T extends object>({ className, ref, ...props }: PaginationPagesProps<T>) => (
    <ListBoxSection
        ref={ref}
        {...props}
        className={cn('-space-x-px flex only:*:last:rounded-r-lg only:*:first:rounded-l-lg', className)}
    />
)

interface PaginationItemProps extends ListBoxItemProps {
    children?: ReactNode
    className?: string
    isCurrent?: boolean
    slot?: 'ellipsis' | 'page' | 'last' | 'first' | 'previous' | 'next'
}

const PaginationItem = ({ slot = 'page', className, isCurrent, children, ...props }: PaginationItemProps) => {
    const textValue = slot === 'page' ? children?.toString() : slot
    return (
        <ListBoxItem
            className={composeRenderProps(className, (className) =>
                cn(
                    'inline-flex size-9 cursor-pointer items-center justify-center gap-x-2 whitespace-nowrap border font-medium text-sm outline-hidden transition',
                    'hover:bg-accent hover:text-accent-foreground data-pressed:bg-accent/80 data-pressed:text-accent-foreground',
                    'focus-visible:z-10 focus-visible:border-primary/70 focus-visible:ring-4 focus-visible:ring-ring/50',
                    "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
                    isCurrent
                        ? 'pointer-events-none bg-primary text-primary-foreground'
                        : 'data-disabled:pointer-events-none data-disabled:*:text-muted-foreground',
                    className
                )
            )}
            isDisabled={props.isDisabled || slot === 'ellipsis'}
            textValue={textValue}
            {...props}
        >
            {slot === 'ellipsis' ? (
                <IconDots />
            ) : slot === 'first' ? (
                <IconChevronsLeft />
            ) : slot === 'last' ? (
                <IconChevronsRight />
            ) : slot === 'previous' ? (
                <IconChevronLeft />
            ) : slot === 'next' ? (
                <IconChevronRight />
            ) : (
                children
            )}
        </ListBoxItem>
    )
}

interface PaginationLabelProps extends Omit<TextProps, 'onClick'> {
    current: number | string
    total?: number | string
}

const PaginationLabel = ({ className, current, total, ...props }: PaginationLabelProps) => (
    <ListBoxItem
        className={cn(
            'inline-flex h-9 select-none items-center justify-center gap-x-2 whitespace-nowrap border px-4 font-medium text-muted-foreground text-sm outline-hidden transition',
            className
        )}
        isDisabled
        textValue={`${String(current)}/${String(total)}`}
        {...props}
    >
        <Text className='text-primary'>{current}</Text>
        {total && (
            <>
                <span>/</span>
                <Text>{total}</Text>
            </>
        )}
    </ListBoxItem>
)

Pagination.Item = PaginationItem
Pagination.Pages = PaginationPages
Pagination.Label = PaginationLabel

export { Pagination }
