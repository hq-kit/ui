'use client'

import { IconGripVertical } from 'hq-icons'
import type { GridListItemProps, GridListProps as RACGridListProps } from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    GridList as RACGridList,
    GridListItem as RACGridListItem
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Checkbox } from './checkbox'

interface GridListProps<T extends object> extends Omit<RACGridListProps<T>, 'layout'> {
    columns?: number
    gap?: number
}

const GridList = <T extends object>({
    children,
    className,
    columns = 1,
    gap = 0,
    ...props
}: GridListProps<T>) => (
    <RACGridList
        layout={columns === 1 && gap === 0 ? 'stack' : 'grid'}
        className={composeRenderProps(className, (className, { layout }) =>
            cn(
                'grid',
                layout === 'stack'
                    ? 'grid-cols-1 gap-0 *:rounded-none *:first:rounded-t-lg *:last:rounded-b-lg'
                    : `grid-cols-${columns}`,
                `gap-${gap}`,
                className
            )
        )}
        {...props}
    >
        {children}
    </RACGridList>
)

const GridListItem = ({ className, children, ...props }: GridListItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined
    return (
        <RACGridListItem
            textValue={textValue}
            {...props}
            className={composeRenderProps(
                className,
                (className, { isHovered, isSelected, isFocusVisible, isDisabled }) =>
                    cn(
                        'flex items-center text-fg gap-2 border px-3 py-2 outline-hidden transition select-none sm:text-sm rounded-lg',
                        isHovered && 'bg-accent/40',
                        { 'border-accent bg-accent text-accent-fg': isSelected || isFocusVisible },
                        isDisabled && 'opacity-50',
                        className
                    )
            )}
        >
            {({ selectionMode, selectionBehavior, allowsDragging, isDragging }) => (
                <>
                    {allowsDragging && (
                        <Button
                            slot='drag'
                            className={cn(
                                'text-muted-fg cursor-grab',
                                isDragging && 'cursor-grabbing'
                            )}
                        >
                            <IconGripVertical />
                        </Button>
                    )}
                    {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
                        <Checkbox slot='selection' />
                    )}
                    {children}
                </>
            )}
        </RACGridListItem>
    )
}

GridList.Item = GridListItem

export { GridList }
