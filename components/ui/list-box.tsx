'use client'

import { IconCheck, IconGripVertical } from 'hq-icons'
import type {
    ListBoxItemProps,
    ListBoxProps,
    ListBoxSectionProps,
    TextProps
} from 'react-aria-components'
import {
    Collection,
    composeRenderProps,
    Header,
    ListBox as RACListBox,
    ListBoxItem as RACListBoxItem,
    ListBoxSection as RACListBoxSection,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
    <RACListBox
        {...props}
        className={composeRenderProps(className, (className) =>
            cn(
                'grid outline-hidden w-full grid-cols-[auto_1fr_1.5rem_0.5rem_auto] gap-y-1 overflow-y-auto rounded-lg border p-1',
                className
            )
        )}
    />
)

const ListBoxItem = ({ children, className, ...props }: ListBoxItemProps) => {
    const textValue = typeof children === 'string' ? children : undefined

    return (
        <RACListBoxItem
            textValue={textValue}
            {...props}
            className={composeRenderProps(
                className,
                (
                    className,
                    { isHovered, isFocused, isDragging, isSelected, isDisabled, isFocusVisible }
                ) =>
                    cn(
                        'group relative grid grid-cols-subgrid col-span-full items-center',
                        'rounded-md px-2 py-1.5 text-base sm:text-sm/6 select-none',
                        '**:[svg]:size-4 *:data-[slot=icon]:mr-2',
                        {
                            'bg-primary/10 text-primary *:[.text-muted-fg]:text-primary':
                                isFocused || isFocusVisible || isHovered
                        },
                        isSelected && '**:data-[slot=icon]:hidden',
                        isDragging && 'cursor-grabbing outline outline-primary',
                        isDisabled && 'pointer-events-none opacity-50',
                        className
                    )
            )}
        >
            {({ allowsDragging, isSelected, isFocused, isDragging }) => (
                <>
                    {allowsDragging && (
                        <IconGripVertical
                            className={cn(
                                'size-4 shrink-0 text-muted-fg transition',
                                isFocused && 'text-fg',
                                isDragging && 'text-muted-fg',
                                isSelected && 'text-primary-fg/70'
                            )}
                        />
                    )}
                    {isSelected && <IconCheck className='mr-2 size-4' data-slot='checked' />}
                    {typeof children === 'string' ? (
                        <Text slot='label' className='col-start-2'>
                            {children}
                        </Text>
                    ) : (
                        children
                    )}
                </>
            )}
        </RACListBoxItem>
    )
}

const ListBoxSection = <T extends object>({
    className,
    ...props
}: ListBoxSectionProps<T> & { title?: string }) => (
    <RACListBoxSection
        className={cn('col-span-full text-sm grid grid-cols-[auto_1fr] mt-2', className)}
    >
        {'title' in props && (
            <Header className='text-muted-fg text-xs py-1 px-2.5 col-span-full pointer-events-none'>
                {props.title}
            </Header>
        )}
        <Collection items={props.items}>{props.children}</Collection>
    </RACListBoxSection>
)

interface ListBoxDetailsProps extends TextProps {
    label?: TextProps['children']
    description?: TextProps['children']
}

const ListBoxDetails = ({ label, description, ...props }: ListBoxDetailsProps) => {
    const { children, title, ...restProps } = props

    return (
        <div data-slot='item-details' className='col-start-2 flex flex-col gap-y-1' {...restProps}>
            {label && (
                <Text slot='label' className='font-medium sm:text-sm'>
                    {label}
                </Text>
            )}
            {description && (
                <Text slot='description' className='text-muted-fg text-xs' {...restProps}>
                    {description}
                </Text>
            )}
            {!title && children}
        </div>
    )
}

ListBox.Section = ListBoxSection
ListBox.Details = ListBoxDetails
ListBox.Item = ListBoxItem

export { ListBox }
