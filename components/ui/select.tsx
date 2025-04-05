'use client'

import React from 'react'

import { IconCheck, IconChevronDown } from 'hq-icons'
import type {
    ListBoxItemProps,
    ListBoxSectionProps,
    SelectProps as RACSelectProps,
    TextProps
} from 'react-aria-components'
import {
    Button,
    Collection,
    composeRenderProps,
    Header,
    ListBox,
    ListBoxItem,
    ListBoxSection,
    Popover,
    Select as RACSelect,
    SelectValue,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import type { Placement } from '@react-types/overlays'

import { Description, FieldError, FieldProps, Label } from './field'

interface SelectProps<T extends object> extends Omit<RACSelectProps<T>, 'children'>, FieldProps {
    className?: string
    items?: Iterable<T>
    children: React.ReactNode | ((item: T) => React.ReactNode)
    placement?: Placement
    prefix?: React.ReactNode
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
        <RACSelect
            className={composeRenderProps(className, (className) =>
                cn('group flex flex-col gap-y-1.5 **:data-placeholder:text-muted-fg', className)
            )}
            {...props}
        >
            {({ isInvalid, isDisabled, isOpen, isFocusVisible, isFocused }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid || !!errorMessage} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <Button
                        className={composeRenderProps(className, (className, { isHovered }) =>
                            cn(
                                'flex h-10 w-full cursor-default items-center gap-4 gap-x-2 rounded-lg border p-2 transition outline-hidden',
                                {
                                    'border-primary/70 ring-primary/20 ring-4':
                                        isFocusVisible || isOpen || isFocused
                                },
                                isHovered && 'border-primary/70 invalid:border-danger/70',
                                isInvalid && 'border-danger/70 ring-danger/20',
                                isDisabled && 'opacity-50',
                                className
                            )
                        )}
                    >
                        {props.prefix ? (
                            <span className='ml-2 has-[button]:ml-0 text-muted-fg'>
                                {props.prefix}
                            </span>
                        ) : null}
                        <SelectValue className='grid grid-cols-[auto_1fr] items-center text-base **:data-avatar:-mx-0.5 **:data-avatar:mr-2 **:data-avatar:size-6 **:data-[slot=icon]:mr-2 sm:text-sm **:data-[slot=description]:hidden' />
                        <IconChevronDown
                            data-slot='chevron'
                            className={cn(
                                'text-muted-fg size-4 transition ml-auto',
                                isOpen && '-rotate-180'
                            )}
                        />
                    </Button>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <Popover
                        trigger='Select'
                        UNSTABLE_portalContainer={props.portal}
                        placement={placement}
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
                            className='grid outline-hidden w-full grid-cols-[auto_1fr] gap-y-1 overflow-y-auto rounded-lg'
                        >
                            {children}
                        </ListBox>
                    </Popover>
                </>
            )}
        </RACSelect>
    )
}

const SelectItem = ({ className, children, ...props }: ListBoxItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined

    return (
        <ListBoxItem
            textValue={textValue}
            {...props}
            className={composeRenderProps(
                className,
                (className, { isHovered, isFocused, isSelected, isDisabled, isFocusVisible }) =>
                    cn(
                        'group relative grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid col-span-full',
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

const SelectSection = <T extends object>({
    className,
    ...props
}: ListBoxSectionProps<T> & { title?: string }) => (
    <ListBoxSection
        className={cn('col-span-full text-sm grid grid-cols-[auto_1fr] mt-2', className)}
    >
        {'title' in props && (
            <Header className='text-muted-fg text-xs py-1 px-2 col-span-full pointer-events-none'>
                {props.title}
            </Header>
        )}
        <Collection items={props.items}>{props.children}</Collection>
    </ListBoxSection>
)

interface SelectDetailsProps extends TextProps {
    label?: TextProps['children']
    description?: TextProps['children']
}

const SelectDetails = ({ label, description, ...props }: SelectDetailsProps) => {
    const { children, title, ...restProps } = props
    return (
        <div data-slot='item-details' className='col-start-2 flex flex-col gap-y-1' {...restProps}>
            {label && (
                <Text data-slot='label' className='font-medium sm:text-sm'>
                    {label}
                </Text>
            )}
            {description && (
                <Text data-slot='description' className='text-muted-fg text-xs' {...restProps}>
                    {description}
                </Text>
            )}
            {!title && children}
        </div>
    )
}

Select.Item = SelectItem
Select.Details = SelectDetails
Select.Section = SelectSection

export { Select }
