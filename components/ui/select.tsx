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
import { cn, cr } from './utils'

const selectTriggerStyles = tv({
    base: [
        'outline-none group-disabled:bg-muted group-disabled:opacity-50 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 group-open:border-primary group-open:ring-4 group-open:ring-primary/20 flex h-10 w-full cursor-default items-center gap-4 rounded-lg border border-muted bg-background py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition dark:shadow-none'
    ],
    variants: {
        isDisabled: {
            false: 'text-foreground group-invalid:border-danger group-invalid:ring-danger/20',
            true: 'bg-muted text-muted-foreground'
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
        <SelectPrimitive {...props} className={cn('group flex w-full flex-col gap-1', className)}>
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
                    <SelectValue className='flex-1 [&_[slot=description]]:hidden text-base placeholder-shown:text-muted-foreground lg:text-sm' />

                    <IconChevronDown
                        aria-hidden
                        className='size-4 text-muted-foreground group-open:rotate-180 group-open:text-foreground group-disabled:opacity-50'
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
