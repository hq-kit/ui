'use client'

import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight, IconEllipsis } from 'hq-icons'
import type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps, TextProps } from 'react-aria-components'
import { ListBox, ListBoxItem, ListBoxSection, Text, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface PaginationProps<T> extends ListBoxProps<T> {
    ref?: React.RefObject<HTMLDivElement>
    shape?: 'square' | 'circle'
}
const Pagination = <T extends object>({ className, shape = 'square', ref, ...props }: PaginationProps<T>) => {
    return (
        <ListBox
            ref={ref}
            orientation='horizontal'
            aria-label={props['aria-label'] || 'Pagination'}
            layout='grid'
            data-shape={shape}
            className={composeRenderProps(className, (className) => cn('group flex gap-1.5', className))}
            {...props}
        />
    )
}

interface PaginationPagesProps<T> extends ListBoxSectionProps<T> {
    ref?: React.RefObject<HTMLElement>
}
const PaginationPages = <T extends object>({ className, ref, ...props }: PaginationPagesProps<T>) => (
    <ListBoxSection ref={ref} {...props} className={cn('flex gap-1.5', className)} />
)

interface PaginationItemProps extends ListBoxItemProps {
    children?: React.ReactNode
    className?: string
    isCurrent?: boolean
    slot?: 'ellipsis' | 'page' | 'last' | 'first' | 'previous' | 'next'
}
const PaginationItem = ({ slot = 'page', className, isCurrent, children, ...props }: PaginationItemProps) => {
    const textValue = slot === 'page' ? children?.toString() : slot
    return (
        <ListBoxItem
            isDisabled={props.isDisabled || slot === 'ellipsis'}
            textValue={textValue}
            className={composeRenderProps(
                className,
                (className, { isHovered, isPressed, isSelected, isDisabled, isFocusVisible }) =>
                    cn(
                        'inline-flex size-10 items-center justify-center gap-x-2 whitespace-nowrap font-medium text-sm outline-hidden transition',
                        'group-data-[shape=circle]:rounded-full group-data-[shape=square]:rounded-lg',
                        isHovered && 'bg-primary/10 text-primary',
                        isPressed && 'bg-primary/20 text-primary',
                        isFocusVisible && 'border-primary ring-4 ring-primary/20',
                        {
                            'pointer-events-none bg-primary text-primary-fg': isCurrent || isSelected
                        },
                        isDisabled ? 'cursor-default opacity-50' : 'cursor-pointer',
                        slot !== 'ellipsis' && 'border',
                        className
                    )
            )}
            {...props}
        >
            {slot === 'ellipsis' ? (
                <IconEllipsis />
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

interface PaginationLabelProps extends TextProps {
    current: number | string
    total?: number | string
}
const PaginationLabel = ({ className, current, total, ...props }: PaginationLabelProps) => (
    <ListBoxItem
        textValue={`${String(current)}/${String(total)}`}
        isDisabled
        className={cn(
            'inline-flex h-10 select-none items-center justify-center gap-x-2 whitespace-nowrap px-4 font-medium text-muted-fg text-sm outline-hidden transition',
            className
        )}
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
