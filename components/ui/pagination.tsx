'use client'

import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight,
    IconEllipsis
} from 'hq-icons'
import type {
    ListBoxItemProps,
    ListBoxProps,
    ListBoxSectionProps,
    TextProps
} from 'react-aria-components'
import {
    composeRenderProps,
    ListBox,
    ListBoxItem,
    ListBoxSection,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'

interface PaginationProps<T> extends ListBoxProps<T> {
    ref?: React.RefObject<HTMLDivElement>
    shape?: 'square' | 'circle'
}
const Pagination = <T extends object>({
    className,
    shape = 'square',
    ref,
    ...props
}: PaginationProps<T>) => {
    return (
        <ListBox
            ref={ref}
            orientation='horizontal'
            aria-label={props['aria-label'] || 'Pagination'}
            layout='grid'
            data-shape={shape}
            className={composeRenderProps(className, (className) =>
                cn('group flex gap-1.5', className)
            )}
            {...props}
        />
    )
}

interface PaginationPagesProps<T> extends ListBoxSectionProps<T> {
    ref?: React.RefObject<HTMLElement>
}
const PaginationPages = <T extends object>({
    className,
    ref,
    ...props
}: PaginationPagesProps<T>) => (
    <ListBoxSection ref={ref} {...props} className={cn('flex gap-1.5', className)} />
)

interface PaginationItemProps extends ListBoxItemProps {
    children?: React.ReactNode
    className?: string
    isCurrent?: boolean
    role?: 'ellipsis' | 'page' | 'last' | 'first' | 'previous' | 'next'
}
const PaginationItem = ({
    role = 'page',
    className,
    isCurrent,
    children,
    ...props
}: PaginationItemProps) => {
    const textValue = role === 'page' ? children?.toString() : role
    return (
        <ListBoxItem
            isDisabled={props.isDisabled || role === 'ellipsis'}
            textValue={textValue}
            className={composeRenderProps(
                className,
                (className, { isHovered, isPressed, isSelected, isDisabled, isFocusVisible }) =>
                    cn(
                        'inline-flex size-10 text-sm items-center justify-center gap-x-2 font-medium whitespace-nowrap transition outline-hidden',
                        'group-data-[shape=circle]:rounded-full group-data-[shape=square]:rounded-lg',
                        isHovered && 'bg-primary/10 text-primary',
                        isPressed && 'bg-primary/20 text-primary',
                        isFocusVisible && 'ring-4 border-primary ring-primary/20',
                        {
                            'bg-primary text-primary-fg pointer-events-none':
                                isCurrent || isSelected
                        },
                        isDisabled ? 'cursor-default opacity-50' : 'cursor-pointer',
                        role !== 'ellipsis' && 'border',
                        className
                    )
            )}
            {...props}
        >
            {role === 'ellipsis' ? (
                <IconEllipsis />
            ) : role === 'first' ? (
                <IconChevronsLeft />
            ) : role === 'last' ? (
                <IconChevronsRight />
            ) : role === 'previous' ? (
                <IconChevronLeft />
            ) : role === 'next' ? (
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
            'inline-flex select-none px-4 h-10 text-sm items-center text-muted-fg justify-center gap-x-2 font-medium whitespace-nowrap transition outline-hidden',
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
