'use client'

import { IconCheck, IconMenu } from 'hq-icons'
import type {
    ListBoxItemProps as ListBoxItemPrimitiveProps,
    ListBoxProps
} from 'react-aria-components'
import {
    ListBoxItem as ListBoxItemPrimitive,
    ListBox as ListBoxPrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { DropdownItemDetails, DropdownSection } from './dropdown'
import { cn, cr, ctr } from './utils'

const listBoxStyles = tv({
    base: 'flex max-h-96 w-full min-w-56 flex-col gap-y-1 overflow-y-auto rounded-lg border p-1 outline-hidden *:[[role=group]+[role=group]]:mt-4'
})

const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
    <ListBoxPrimitive
        {...props}
        className={cr(className, (className, renderProps) =>
            listBoxStyles({ ...renderProps, className })
        )}
    />
)

const listBoxItemStyles = tv({
    base: 'lbi relative cursor-pointer rounded-[calc(var(--radius-lg)-1px)] p-2 text-base outline-hidden sm:text-sm',
    variants: {
        isFocusVisible: {
            true: 'bg-primary/5 text-primary-fg inset-ring-primary/60 inset-ring'
        },
        isHovered: {
            true: 'bg-primary/5 text-primary [&:hover_[slot=description]]:text-primary/80 [&:hover_[slot=label]]:text-primary/90 [&_.text-muted-fg]:text-primary/80'
        },
        isFocused: {
            true: 'bg-primary/5 text-primary **:data-[slot=icon]:text-primary **:data-[slot=label]:text-primary [&_.text-muted-fg]:text-primary/80'
        },
        isSelected: {
            true: 'bg-primary/10 text-primary **:data-[slot=icon]:text-primary **:data-[slot=label]:text-primary [&_.text-muted-fg]:text-primary/80'
        },
        isDragging: { true: 'bg-primary/5 text-secondary-fg cursor-grabbing' },
        isDisabled: {
            true: 'text-muted-fg cursor-default opacity-70'
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
                                    'text-muted-fg size-4 shrink-0 transition',
                                    values.isFocused && 'text-fg',
                                    values.isDragging && 'text-fg',
                                    values.isSelected && 'text-primary-fg/70'
                                )}
                            />
                        )}
                        <div className='flex flex-col'>
                            {typeof children === 'function' ? children(values) : children}

                            {values.isSelected && (
                                <span className='animate-in absolute top-3 right-2 lg:top-2.5'>
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
            className={ctr(
                className,
                "grid max-h-72 grid-cols-[auto_1fr] overflow-auto p-1 outline-hidden *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1"
            )}
            {...props}
        />
    )
}

const ListBoxSection = ({ className, ...props }: React.ComponentProps<typeof DropdownSection>) => {
    return <DropdownSection className={cn(className, 'grid grid-cols-1 gap-y-1')} {...props} />
}

const ListBoxItemDetails = DropdownItemDetails

ListBox.Section = ListBoxSection
ListBox.ItemDetails = ListBoxItemDetails
ListBox.Item = ListBoxItem
ListBox.Picker = ListBoxPicker

export { ListBox, ListBoxPicker, listBoxStyles }
export type { ListBoxItemProps, ListBoxPickerProps }
