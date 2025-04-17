'use client'

import React from 'react'

import { IconCheck, IconChevronDown, IconLoader, IconX } from 'hq-icons'
import type { ListBoxItemProps, ListBoxSectionProps, ComboBoxProps as RACComboboxProps } from 'react-aria-components'
import {
    Button,
    Collection,
    ComboBoxStateContext,
    Header,
    ListBox,
    ListBoxItem,
    ListBoxSection,
    Popover,
    ComboBox as RACCombobox,
    Text,
    composeRenderProps
} from 'react-aria-components'

import { cn, fuzzyMatch } from '@/lib/utils'

import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from './field'

interface ComboBoxProps<T extends object> extends Omit<RACComboboxProps<T>, 'children'>, FieldProps {
    children: React.ReactNode | ((item: T) => React.ReactNode)
    prefix?: React.ReactNode
    isPending?: boolean
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
    ...props
}: ComboBoxProps<T>) => {
    return (
        <RACCombobox
            defaultFilter={fuzzyMatch}
            menuTrigger='focus'
            className={composeRenderProps(className, (className) =>
                cn('group flex flex-col gap-1.5 **:data-placeholder:text-muted-fg', className)
            )}
            {...props}
        >
            {({ isInvalid, isDisabled, isOpen }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid || !!errorMessage} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <FieldGroup>
                        {isPending ? (
                            <IconLoader className='ml-2 size-4 shrink-0 animate-spin text-muted-fg' />
                        ) : props.prefix ? (
                            <span className='ml-2 text-muted-fg has-[button]:ml-0'>{props.prefix}</span>
                        ) : null}
                        <Input placeholder={placeholder ?? 'Choose an option or Input value'} />
                        {props.inputValue ? (
                            <ClearButton />
                        ) : (
                            <Button
                                aria-label='Chevron'
                                className='inline-flex items-center justify-center rounded-lg text-muted-fg outline-hidden'
                            >
                                <IconChevronDown className={cn('mr-2 size-4 transition', isOpen && '-rotate-180')} />
                            </Button>
                        )}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <Popover
                        trigger='Select'
                        className={({ isEntering, isExiting }) =>
                            cn(
                                'group max-h-72 w-full max-w-(--trigger-width) overflow-y-auto rounded-lg border bg-bg p-1 shadow outline-hidden transition',
                                isEntering &&
                                    'fade-in zoom-in-95 placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 animate-in',
                                isExiting &&
                                    'fade-out zoom-out-95 placement-left:slide-out-to-right-2 placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2 animate-out'
                            )
                        }
                    >
                        <ListBox
                            aria-label='items'
                            items={items}
                            className='grid w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-lg outline-hidden'
                        >
                            {children}
                        </ListBox>
                    </Popover>
                </>
            )}
        </RACCombobox>
    )
}

const ClearButton = () => {
    const state = React.use(ComboBoxStateContext)!
    return (
        <Button
            className='inline-flex cursor-pointer items-center justify-center rounded-lg text-muted-fg outline-hidden hover:text-fg'
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

const ComboBoxItem = ({ className, children, ...props }: ListBoxItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined

    return (
        <ListBoxItem
            textValue={textValue}
            {...props}
            className={composeRenderProps(
                className,
                (className, { isHovered, isFocused, isSelected, isDisabled, isFocusVisible }) =>
                    cn(
                        'group relative col-span-full grid grid-cols-subgrid',
                        'select-none rounded-md px-2 py-1.5 text-base sm:text-sm/6',
                        '*:data-avatar:mr-2 *:data-avatar:size-6 *:[svg]:my-1 *:[svg]:mr-2 **:[svg]:size-4',
                        { 'bg-primary text-primary-fg': isFocused || isFocusVisible || isHovered },
                        isSelected && '**:data-[slot=icon]:hidden **:data-avatar:hidden',
                        isDisabled && 'pointer-events-none opacity-50',
                        className
                    )
            )}
        >
            {({ isSelected }) => (
                <>
                    {isSelected && <IconCheck data-slot='checked' />}
                    {typeof children === 'string' ? (
                        <Text slot='label' className='col-start-2'>
                            {children}
                        </Text>
                    ) : (
                        children
                    )}
                </>
            )}
        </ListBoxItem>
    )
}

const ComboBoxSection = <T extends object>({ className, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
    <ListBoxSection className={cn('col-span-full mt-2 grid grid-cols-[auto_1fr] text-sm', className)}>
        {'title' in props && (
            <Header className='pointer-events-none col-span-full px-2 py-1 text-muted-fg text-xs'>{props.title}</Header>
        )}
        <Collection items={props.items}>{props.children}</Collection>
    </ListBoxSection>
)

ComboBox.Item = ComboBoxItem
ComboBox.Section = ComboBoxSection

export { ComboBox }
