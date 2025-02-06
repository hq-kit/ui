'use client'

import React from 'react'

import { IconChevronDown } from 'hq-icons'
import {
    type SelectProps as SelectPrimitiveProps,
    type ValidationResult,
    Button,
    Group,
    Select as SelectPrimitive,
    SelectValue
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import type { Placement } from '@react-types/overlays'

import { DropdownItem, DropdownItemDetails, DropdownSection } from './dropdown'
import { Description, FieldError, Label } from './field'
import { ListBox } from './list-box'
import { Popover } from './popover'
import { cn, cr, focusStyles } from './utils'

const selectTriggerStyles = tv({
    extend: focusStyles,
    base: [
        'flex h-10 w-full cursor-default items-center gap-4 gap-x-2 rounded-lg border py-2 pr-2 pl-3 text-start transition group-data-disabled:opacity-50 **:data-[slot=icon]:size-4',
        'group-data-open:border-primary/70 data-hovered:border-primary/60 group-data-open:ring-primary/20 group-data-open:ring-4',
        'text-fg group-data-invalid:border-danger group-data-invalid:ring-danger/20'
    ],
    variants: {
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

interface SelectProps<T extends object> extends Omit<SelectPrimitiveProps<T>, 'children'> {
    label?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    items?: Iterable<T>
    children: React.ReactNode | ((item: T) => React.ReactNode)
    placement?: Placement
    prefix?: React.ReactNode
    className?: string
    portal?: Element
}

const Select = <T extends object>({
    label,
    description,
    placement,
    errorMessage,
    children,
    items,
    className,
    ...props
}: SelectProps<T>) => {
    return (
        <SelectPrimitive {...props} className={cn('group flex w-full flex-col gap-1.5', className)}>
            {label && <Label>{label}</Label>}
            <Group className='relative'>
                <Button
                    className={cr(className, (className, renderProps) =>
                        selectTriggerStyles({
                            ...renderProps,
                            className
                        })
                    )}
                >
                    {props.prefix && <span className='-mr-1'>{props.prefix}</span>}
                    <SelectValue className='data-placeholder:text-muted-fg grid flex-1 grid-cols-[auto_1fr] items-center text-base *:data-avatar:*:-mx-0.5 *:data-avatar:-mx-0.5 *:data-avatar:*:mr-2 *:data-avatar:mr-2 **:data-[slot=icon]:mr-2 sm:text-sm [&_[slot=description]]:hidden' />

                    <IconChevronDown
                        data-slot='chevron'
                        className='text-muted-fg size-4 transition group-data-open:rotate-180'
                    />
                </Button>
            </Group>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Picker
                UNSTABLE_portalContainer={props.portal}
                trigger='Select'
                placement={placement}
            >
                <ListBox.Picker aria-label='items' items={items}>
                    {children}
                </ListBox.Picker>
            </Popover.Picker>
        </SelectPrimitive>
    )
}

Select.Item = DropdownItem
Select.ItemDetails = DropdownItemDetails
Select.Section = DropdownSection

export { Select }
