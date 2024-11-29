'use client'

import React from 'react'

import { IconCheck, IconMenu } from 'hq-icons'
import {
    ListBoxItem as ListBoxItemPrimitive,
    ListBox as ListBoxPrimitive,
    type ListBoxItemProps as ListBoxItemPrimitiveProps,
    type ListBoxProps as ListBoxPrimitiveProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { DropdownItemDetails, DropdownSection } from './dropdown'
import { cn, cr } from './utils'

const listBoxStyles = tv({
    base: 'flex max-h-96 w-full gap-y-1 min-w-72 flex-col overflow-y-auto rounded-lg border p-1 shadow-lg outline-none'
})

interface ListBoxProps<T> extends ListBoxPrimitiveProps<T> {
    className?: string
}

const ListBox = <T extends object>({ children, className, ...props }: ListBoxProps<T>) => (
    <ListBoxPrimitive {...props} className={listBoxStyles({ className })}>
        {children}
    </ListBoxPrimitive>
)
const listBoxItemStyles = tv({
    base: 'lbi cursor-pointer relative rounded-[calc(var(--radius)-1px)] p-2 text-base outline-none lg:text-sm',
    variants: {
        isFocusVisible: {
            true: 'bg-secondary [&:focus-visible_[slot=label]]:text-primary-foreground [&:focus-visible_[slot=description]]:text-primary-foreground/70 text-secondary-foreground'
        },
        isHovered: {
            true: 'bg-primary [&:hover_[slot=label]]:text-primary-foreground [&:hover_[slot=description]]:text-primary-foreground/70 text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/80'
        },
        isFocused: {
            true: '[&_svg]:text-primary-foreground [&_[data-slot=label]]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/80 bg-primary text-primary-foreground'
        },
        isSelected: {
            true: '[&_svg]:text-primary-foreground [&_[data-slot=label]]:text-primary-foreground [&_.text-muted-foreground]:text-primary-foreground/80 bg-primary text-primary-foreground'
        },
        isDragging: { true: 'cursor-grabbing bg-secondary text-secondary-foreground' },
        isDisabled: {
            true: 'opacity-70 cursor-default text-muted-foreground'
        }
    }
})
interface ListBoxItemProps<T extends object> extends ListBoxItemPrimitiveProps<T> {
    className?: string
}

const ListBoxItem = <T extends object>({ children, className, ...props }: ListBoxItemProps<T>) => {
    const textValue = typeof children === 'string' ? children : undefined

    return (
        <ListBoxItemPrimitive
            textValue={textValue}
            {...props}
            className={cr(className, (className, renderProps) =>
                listBoxItemStyles({
                    ...renderProps,
                    className
                })
            )}
        >
            {(values) => (
                <div className='flex items-center gap-2'>
                    <>
                        {values.allowsDragging && (
                            <IconMenu
                                className={cn(
                                    'size-4 shrink-0 text-muted-foreground transition',
                                    values.isFocused && 'text-foreground',
                                    values.isDragging && 'text-foreground',
                                    values.isSelected && 'text-primary-foreground/70'
                                )}
                            />
                        )}
                        <div className='flex flex-col'>
                            {typeof children === 'function' ? children(values) : children}

                            {values.isSelected && (
                                <span className='animate-in absolute right-2 top-3 lg:top-2.5'>
                                    <IconCheck />
                                </span>
                            )}
                        </div>
                    </>
                </div>
            )}
        </ListBoxItemPrimitive>
    )
}

type ListBoxPickerProps<T> = ListBoxProps<T>

const ListBoxPicker = <T extends object>({ className, ...props }: ListBoxPickerProps<T>) => {
    return (
        <ListBoxPrimitive
            className={cn('max-h-72 overflow-auto p-1 outline-none', className)}
            {...props}
        />
    )
}

const Section = ({ className, ...props }: React.ComponentProps<typeof DropdownSection>) => {
    return (
        <DropdownSection
            className={cn(className, '[&_.lbi:last-child]:-mb-1.5 gap-y-1')}
            {...props}
        />
    )
}

ListBox.Section = Section
ListBox.ItemDetails = DropdownItemDetails
ListBox.Item = ListBoxItem
ListBox.Picker = ListBoxPicker

export { ListBox, listBoxStyles, type ListBoxPickerProps }
