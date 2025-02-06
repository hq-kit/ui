'use client'

import type React from 'react'

import { IconMenu } from 'hq-icons'
import type { GridListItemProps, GridListProps } from 'react-aria-components'
import {
    Button,
    GridListItem as GridListItemPrimitive,
    GridList as GridListPrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Checkbox } from './checkbox'
import { cn, cr, ctr } from './utils'

const gridListStyles = tv({
    base: '*:data-drop-target:border-primary relative max-h-96 overflow-auto rounded-lg border *:data-drop-target:border'
})

const GridList = <T extends object>({ children, className, ...props }: GridListProps<T>) => (
    <GridListPrimitive className={ctr(className, gridListStyles())} {...props}>
        {children}
    </GridListPrimitive>
)

const itemStyles = tv({
    base: 'group text-fg relative -mb-px flex cursor-default gap-3 border-y px-3 py-2 outline-hidden -outline-offset-2 transition select-none first:rounded-t-md first:border-t-0 last:mb-0 last:rounded-b-md last:border-b-0 sm:text-sm',
    variants: {
        isHovered: { true: 'bg-primary/5' },
        isSelected: {
            true: 'border-primary/50 bg-primary/10 data-hovered:bg-primary/5 z-20'
        },
        isFocused: {
            true: 'outline-hidden'
        },
        isFocusVisible: {
            true: 'ring-primary bg-primary/10 data-hovered:bg-primary/5 data-selected:bg-primary/10 ring-1 outline-hidden'
        },
        isDisabled: {
            true: 'text-muted-fg/70'
        }
    }
})

const GridListItem = ({ className, ...props }: GridListItemProps) => {
    const textValue = typeof props.children === 'string' ? props.children : undefined
    return (
        <GridListItemPrimitive
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
                            className='*:data-[slot=icon]:text-muted-fg cursor-grab data-dragging:cursor-grabbing'
                        >
                            <IconMenu />
                        </Button>
                    )}

                    <span
                        aria-hidden
                        className='bg-primary absolute inset-y-0 left-0 hidden h-full w-0.5 group-data-selected:block'
                    />
                    {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
                        <Checkbox className='-mr-2' slot='selection' />
                    )}
                    {props.children as React.ReactNode}
                </>
            )}
        </GridListItemPrimitive>
    )
}

const GridEmptyState = ({ ref, className, ...props }: React.ComponentProps<'div'>) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
)

GridList.Item = GridListItem
GridList.EmptyState = GridEmptyState

export { GridList }
export type { GridListItemProps, GridListProps }
