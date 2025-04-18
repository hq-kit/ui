'use client'

import { IconGripVertical } from 'hq-icons'
import type { GridListItemProps, GridListProps as RACGridListProps } from 'react-aria-components'
import {
    Button,
    GridList as RACGridList,
    GridListItem as RACGridListItem,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Checkbox } from './checkbox'

interface GridListProps<T extends object> extends Omit<RACGridListProps<T>, 'layout'> {
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto'
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

const GridList = <T extends object>({ children, className, columns = 1, gap = 0, ...props }: GridListProps<T>) => (
    <RACGridList
        layout={columns === 1 && gap === 0 ? 'stack' : 'grid'}
        className={composeRenderProps(className, (className, { layout }) =>
            cn(
                layout === 'stack'
                    ? 'grid grid-cols-1 gap-0 *:rounded-none *:first:rounded-t-lg *:last:rounded-b-lg'
                    : `${columns === 'auto' ? 'flex grow flex-wrap' : `grid grid-cols-${columns}`}`,
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
                        'flex select-none items-center gap-2 rounded-lg border px-3 py-2 text-fg outline-hidden transition sm:text-sm',
                        isHovered && 'bg-primary/10',
                        {
                            'border-primary/70 bg-primary/10 text-primary': isSelected || isFocusVisible
                        },
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
                            className={cn('cursor-grab text-muted-fg', isDragging && 'cursor-grabbing')}
                        >
                            <IconGripVertical />
                        </Button>
                    )}
                    {selectionMode === 'multiple' && selectionBehavior === 'toggle' && <Checkbox slot='selection' />}
                    {children}
                </>
            )}
        </RACGridListItem>
    )
}

GridList.Item = GridListItem

export { GridList }
