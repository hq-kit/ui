'use client'

import type { Placement } from '@react-types/overlays'
import { IconChevronDown, IconLoader, IconSearch, IconX } from 'hq-icons'
import type { ReactNode, Ref } from 'react'
import type { SelectProps as RACSelectProps } from 'react-aria-components'
import {
    Autocomplete,
    Button,
    Group,
    Input,
    ListBox,
    Select as RACSelect,
    SearchField,
    SelectValue,
    composeRenderProps
} from 'react-aria-components'

import { cn, fuzzyMatch } from '@/lib/utils'
import { Description, FieldError, type FieldProps, Label } from './form'
import { ListBoxDetails, ListBoxItem, ListBoxLabel, ListBoxSection } from './list-box'
import { PopoverContent } from './popover'

interface SelectProps<T extends object> extends Omit<RACSelectProps<T>, 'children'>, FieldProps {
    className?: string
    items?: Iterable<T>
    children: ReactNode | ((item: T) => ReactNode)
    prefix?: ReactNode
    searchable?: boolean
    isPending?: boolean
    placement?: Placement
    ref?: Ref<HTMLDivElement>
}

const Select = <T extends object>({
    label,
    description,
    errorMessage,
    children,
    items,
    searchable = false,
    className,
    placement,
    ref,
    ...props
}: SelectProps<T>) => {
    const renderOptions = (
        <ListBox
            renderEmptyState={() => <div className='col-span-full p-4 text-center text-muted-fg'>No results found</div>}
            aria-label='items'
            items={items}
            className='grid w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-lg outline-hidden'
        >
            {children}
        </ListBox>
    )

    return (
        <RACSelect
            className={composeRenderProps(className, (className) =>
                cn('group flex flex-col gap-y-1.5 **:data-placeholder:text-muted-fg', className)
            )}
            ref={ref}
            {...props}
        >
            {({ isInvalid, isDisabled, isOpen }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid || !!errorMessage} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <Button
                        className={composeRenderProps(className, (className) =>
                            cn(
                                'flex h-9 w-full cursor-default items-center gap-4 gap-x-2 rounded-lg border p-2 outline-hidden transition',
                                'group-focus-visible:border-primary/70 group-focus-visible:ring-4 group-focus-visible:ring-ring',
                                'group-focus:border-primary/70 group-focus:ring-4 group-focus:ring-ring',
                                'group-open:border-primary/70 group-open:ring-4 group-open:ring-ring',
                                'group-hover:border-primary/70 group-hover:invalid:border-danger/70',
                                'group-invalid:border-danger/70 group-invalid:ring-invalid',
                                'group-disabled:opacity-50',
                                className
                            )
                        )}
                    >
                        {props.prefix ? (
                            <span className='ml-2 text-muted-fg has-[button]:ml-0'>{props.prefix}</span>
                        ) : null}
                        <SelectValue className='**:data-avatar:-mx-0.5 grid grid-cols-[auto_1fr] items-center text-base **:data-[slot=icon]:mr-2 **:data-avatar:mr-2 **:data-[slot=description]:hidden **:data-avatar:size-6 sm:text-sm' />
                        <IconChevronDown
                            data-slot='chevron'
                            className={cn('ml-auto size-4 text-muted-fg transition', isOpen && '-rotate-180')}
                        />
                    </Button>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <PopoverContent
                        respectScreen={false}
                        placement={placement ?? 'bottom'}
                        trigger='Select'
                        isPicker
                        showArrow={false}
                    >
                        {searchable ? (
                            <Autocomplete filter={fuzzyMatch}>
                                <SearchField autoFocus className='-mx-1 -mt-1 mb-1 border-b' aria-label='Search'>
                                    {({ isEmpty }) => (
                                        <Group className='flex items-center px-2'>
                                            {props.isPending ? (
                                                <IconLoader className='size-4 shrink-0 animate-spin text-muted-fg' />
                                            ) : (
                                                <IconSearch className='size-4 shrink-0 text-muted-fg' />
                                            )}
                                            <Input
                                                className='w-full p-2 text-sm outline-hidden [&::-webkit-search-cancel-button]:hidden'
                                                placeholder='Search...'
                                            />
                                            {!isEmpty && (
                                                <Button
                                                    type='button'
                                                    aria-label='Clear'
                                                    className='mr-2 inline-flex items-center justify-center rounded-lg text-muted-fg outline-offset-4'
                                                >
                                                    <IconX aria-hidden />
                                                </Button>
                                            )}
                                        </Group>
                                    )}
                                </SearchField>
                                {renderOptions}
                            </Autocomplete>
                        ) : (
                            renderOptions
                        )}
                    </PopoverContent>
                </>
            )}
        </RACSelect>
    )
}

Select.Item = ListBoxItem
Select.Details = ListBoxDetails
Select.Section = ListBoxSection
Select.Label = ListBoxLabel

export { Select }
