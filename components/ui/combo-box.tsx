'use client'

import React from 'react'

import { IconCheck, IconChevronDown, IconLoader, IconX } from 'hq-icons'
import type { ComboBoxProps as RACComboboxProps, ListBoxItemProps, ListBoxSectionProps } from 'react-aria-components'
import {
    Button,
    Collection,
    ComboBox as RACCombobox,
    ComboBoxStateContext,
    composeRenderProps,
    Header,
    ListBox,
    ListBoxItem,
    ListBoxSection,
    Popover,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Description, FieldError, FieldGroup, FieldProps, Input, Label } from './field'

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
                            <IconLoader className='animate-spin ml-2 size-4 shrink-0 text-muted-fg' />
                        ) : props.prefix ? (
                            <span className='ml-2 has-[button]:ml-0 text-muted-fg'>{props.prefix}</span>
                        ) : null}
                        <Input placeholder={placeholder ?? 'Choose an option or Input value'} />
                        {props.inputValue ? (
                            <ClearButton />
                        ) : (
                            <Button
                                aria-label='Chevron'
                                className='rounded-lg outline-hidden inline-flex items-center justify-center text-muted-fg'
                            >
                                <IconChevronDown className={cn('transition size-4 mr-2', isOpen && '-rotate-180')} />
                            </Button>
                        )}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <Popover
                        trigger='Select'
                        className={({ isEntering, isExiting }) =>
                            cn(
                                'group max-h-72 overflow-y-auto border p-1 shadow bg-bg w-full max-w-(--trigger-width) rounded-lg transition outline-hidden',
                                isEntering &&
                                    'fade-in animate-in zoom-in-95 placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2',
                                isExiting &&
                                    'fade-out animate-out zoom-out-95 placement-left:slide-out-to-right-2 placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2'
                            )
                        }
                    >
                        <ListBox
                            aria-label='items'
                            items={items}
                            className='grid outline-hidden w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-lg'
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
            className='rounded-lg cursor-pointer outline-hidden inline-flex items-center justify-center text-muted-fg hover:text-fg'
            slot={null}
            aria-label='Clear'
            onPress={() => {
                state.setInputValue('')
                state.setSelectedKey(null)
                state.open()
            }}
        >
            <IconX className='size-4 mr-2' />
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
                        'group relative grid grid-cols-subgrid col-span-full',
                        'rounded-md px-2 py-1.5 text-base sm:text-sm/6 select-none',
                        '**:[svg]:size-4 *:[svg]:mr-2 *:[svg]:my-1 *:data-avatar:mr-2 *:data-avatar:size-6',
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
    <ListBoxSection className={cn('col-span-full text-sm grid grid-cols-[auto_1fr] mt-2', className)}>
        {'title' in props && (
            <Header className='text-muted-fg text-xs py-1 px-2 col-span-full pointer-events-none'>{props.title}</Header>
        )}
        <Collection items={props.items}>{props.children}</Collection>
    </ListBoxSection>
)

ComboBox.Item = ComboBoxItem
ComboBox.Section = ComboBoxSection

export { ComboBox }
