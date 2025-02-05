'use client'

import React from 'react'

import { IconChevronDown, IconX } from 'hq-icons'
import {
    Button,
    ComboBox as ComboboxPrimitive,
    type ComboBoxProps as ComboboxPrimitiveProps,
    ComboBoxStateContext,
    type ValidationResult
} from 'react-aria-components'

import { DropdownItem, DropdownSection } from './dropdown'
import { Description, FieldError, FieldGroup, Input, Label } from './field'
import { ListBox } from './list-box'
import { Popover } from './popover'
import { cn } from './utils'

interface ComboBoxProps<T extends object> extends Omit<ComboboxPrimitiveProps<T>, 'children'> {
    label?: string
    placeholder?: string
    description?: string | null
    errorMessage?: string | ((validation: ValidationResult) => string)
    children: React.ReactNode | ((item: T) => React.ReactNode)
    portal?: Element
}

const ComboBox = <T extends object>({
    label,
    description,
    errorMessage,
    children,
    placeholder,
    className,
    items,
    ...props
}: ComboBoxProps<T>) => {
    return (
        <ComboboxPrimitive
            menuTrigger='focus'
            {...props}
            className={cn('group flex w-full flex-col gap-1.5', className)}
        >
            <Label>{label}</Label>
            <FieldGroup className='relative pl-0'>
                <Input className='pl-2.5' placeholder={placeholder} />
                <Button className='text-muted-fg size-7 rounded-lg outline-offset-0 active:bg-transparent data-hovered:bg-transparent data-pressed:bg-transparent'>
                    {!props?.inputValue && (
                        <IconChevronDown
                            aria-hidden
                            className='text-muted-fg group-open:text-fg transition group-data-open:rotate-180'
                        />
                    )}
                </Button>
                {props?.inputValue && <ComboBoxClearButton />}
            </FieldGroup>
            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
            <Popover.Picker UNSTABLE_portalContainer={props.portal}>
                <ListBox.Picker items={items}>{children}</ListBox.Picker>
            </Popover.Picker>
        </ComboboxPrimitive>
    )
}

const ComboBoxClearButton = () => {
    const state = React.use(ComboBoxStateContext)

    return (
        <Button
            className='text-muted-fg data-hovered:text-fg absolute inset-y-0 right-0 flex items-center pr-2.5 focus:outline-none'
            slot={null}
            aria-label='Clear'
            onPress={() => {
                state?.setSelectedKey(null)
                state?.open()
            }}
        >
            <IconX className='size-4' />
        </Button>
    )
}

const ComboBoxItem = DropdownItem
const ComboBoxSection = DropdownSection

ComboBox.Item = ComboBoxItem
ComboBox.Section = ComboBoxSection

export { ComboBox, type ComboBoxProps }
