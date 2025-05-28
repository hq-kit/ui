'use client'

import { type ReactNode, type Ref, use } from 'react'

import { IconChevronDown, IconLoader, IconX } from 'hq-icons'
import type { ComboBoxProps as RACComboboxProps } from 'react-aria-components'
import {
    Button,
    ComboBoxStateContext,
    ListBox,
    ComboBox as RACCombobox,
    composeRenderProps
} from 'react-aria-components'

import { cn, fuzzyMatch } from '@/lib/utils'
import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from './form'
import { ListBoxDetails, ListBoxItem, ListBoxSection } from './list-box'
import { PopoverContent } from './popover'

interface ComboBoxProps<T extends object> extends Omit<RACComboboxProps<T>, 'children'>, FieldProps {
    children: ReactNode | ((item: T) => ReactNode)
    prefix?: ReactNode
    isPending?: boolean
    placeholder?: string
    ref?: Ref<HTMLDivElement>
}

const ComboBox = <T extends object>({
    label,
    description,
    errorMessage,
    children,
    placeholder,
    isPending,
    className,
    items,
    ref,
    ...props
}: ComboBoxProps<T>) => (
    <RACCombobox
        defaultFilter={fuzzyMatch}
        menuTrigger='focus'
        className={composeRenderProps(className, (className) => cn('group/field flex flex-col gap-1.5', className))}
        ref={ref}
        {...props}
    >
        {label && <Label>{label}</Label>}
        <FieldGroup isInvalid={props.isInvalid || !!errorMessage}>
            {isPending ? (
                <IconLoader className='ml-2 size-4 shrink-0 animate-spin text-muted-fg' />
            ) : props.prefix ? (
                <span className='ml-2 shrink-0 text-muted-fg has-[button]:ml-0 **:data-avatar:size-6'>
                    {props.prefix}
                </span>
            ) : null}
            <Input placeholder={placeholder ?? 'Choose an option or Input value'} />
            {props.inputValue ? (
                <ClearButton />
            ) : (
                <Button
                    aria-label='Chevron'
                    className='inline-flex items-center justify-center rounded-md text-muted-fg outline-hidden'
                >
                    <IconChevronDown className='group-open/field:-rotate-180 mr-2 size-4 transition' />
                </Button>
            )}
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        <PopoverContent respectScreen={false} showArrow={false} trigger='focus' isPicker>
            <ListBox
                aria-label='items'
                items={items}
                className='grid w-full grid-cols-[auto_1fr_1.5rem] gap-y-1 overflow-y-auto rounded-md outline-hidden'
            >
                {children}
            </ListBox>
        </PopoverContent>
    </RACCombobox>
)

const ClearButton = () => {
    const state = use(ComboBoxStateContext)!
    return (
        <Button
            className='inline-flex cursor-pointer items-center justify-center rounded-md text-muted-fg outline-hidden hover:text-fg'
            slot={null}
            aria-label='Clear'
            onPress={() => {
                state.setInputValue('')
                state.setSelectedKey(null)
                state.open()
            }}
        >
            <IconX className='mr-2 size-4' />
        </Button>
    )
}

ComboBox.Item = ListBoxItem
ComboBox.Section = ListBoxSection
ComboBox.ItemDetails = ListBoxDetails

export { ComboBox }
