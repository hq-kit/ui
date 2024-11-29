'use client'

import React from 'react'

import { IconMenu } from 'hq-icons'
import type { GridListItemProps, GridListProps } from 'react-aria-components'
import { Button, GridListItem, GridList as GridListPrimitive } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'
import { cr, ctr } from './utils'

const gridListStyles = tv({
    base: 'relative [&>[data-drop-target]]:border [&>[data-drop-target]]:border-primary [&::-webkit-scrollbar]:size-0.5 [scrollbar-width:thin] max-h-96 overflow-auto rounded-lg border'
})

const GridList = <T extends object>({ children, className, ...props }: GridListProps<T>) => (
    <GridListPrimitive className={ctr(className, gridListStyles())} {...props}>
        {children}
    </GridListPrimitive>
)

const itemStyles = tv({
    base: 'relative group transition outline-none flex cursor-default select-none gap-3 border-y px-3 -mb-px py-2 lg:text-sm text-foreground -outline-offset-2 first:rounded-t-lg first:border-t-0 last:mb-0 last:rounded-b-lg last:border-b-0',
    variants: {
        isHovered: { true: 'bg-primary/10' },
        isSelected: {
            true: 'bg-primary/20 z-20 border-muted/50'
        },
        isFocused: {
            true: 'outline-none'
        },
        isFocusVisible: {
            true: 'ring-1 ring-primary outline-none'
        },
        isDisabled: {
            true: 'text-muted-foreground'
        }
    }
})

const Item = ({ className, ...props }: GridListItemProps) => {
    const textValue = typeof props.children === 'string' ? props.children : undefined
    return (
        <GridListItem
            textValue={textValue}
            {...props}
            className={cr(className, (className, renderProps) =>
                itemStyles({ ...renderProps, className })
            )}
        >
            {({ selectionMode, selectionBehavior, allowsDragging }) => (
                <>
                    {allowsDragging && (
                        <Button
                            slot='drag'
                            className='cursor-grab dragging:cursor-grabbing [&>[data-slot=icon]]:text-muted-foreground'
                        >
                            <IconMenu />
                        </Button>
                    )}

                    <span
                        aria-hidden
                        className='absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block'
                    />
                    {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
                        <Checkbox className='-mr-2' slot='selection' />
                    )}
                    {props.children as React.ReactNode}
                </>
            )}
        </GridListItem>
    )
}

const EmptyState = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div className='p-6' {...props} />
)

GridList.Item = Item
GridList.EmptyState = EmptyState

export { GridList }
