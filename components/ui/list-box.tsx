'use client'

import { IconCheck, IconGripVertical } from 'hq-icons'
import type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps, TextProps } from 'react-aria-components'
import {
    Collection,
    Header,
    ListBox as RACListBox,
    ListBoxItem as RACListBoxItem,
    ListBoxSection as RACListBoxSection,
    Text,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const ListBox = <T extends object>({ className, ...props }: ListBoxProps<T>) => (
    <RACListBox
        {...props}
        className={composeRenderProps(className, (className) =>
            cn(
                'grid w-full grid-cols-[auto_1fr_auto] gap-y-1 overflow-y-auto rounded-lg border p-1 outline-hidden',
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
                (className, { isHovered, isFocused, isDragging, isSelected, isDisabled, isFocusVisible }) =>
                    cn(
                        'group relative col-span-full grid grid-cols-subgrid items-center outline-hidden has-data-[slot=item-details]:items-start',
                        'select-none rounded-md px-2 py-1.5 text-base sm:text-sm/6',
                        '**:data-[slot=icon]:mr-2 **:[svg]:size-3.5 has-data-[slot=item-details]:**:[svg]:my-1',
                        {
                            'bg-primary/10 text-primary *:[.text-muted-fg]:text-primary':
                                isFocused || isFocusVisible || isHovered
                        },
                        isSelected && '**:data-[slot=checked]:mr-2 **:data-[slot=icon]:hidden',
                        isDragging && 'cursor-grabbing outline outline-primary',
                        isDisabled && 'pointer-events-none opacity-50',
                        className
                    )
            )}
        >
            {({ allowsDragging, isSelected, isDragging }) => (
                <>
                    {allowsDragging && (
                        <IconGripVertical
                            className={cn('size-4 shrink-0 text-muted-fg transition', isDragging && 'text-primary')}
                        />
                    )}
                    {isSelected && <IconCheck className='text-success' data-slot='checked' />}
                    {typeof children === 'string' ? (
                        <Text slot='label' className='col-start-2'>
                            {children as ReactNode}
                        </Text>
                    ) : (
                        (children as ReactNode)
                    )}
                </>
            )}
        </RACListBoxItem>
    )
}

const ListBoxSection = <T extends object>({ className, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
    <RACListBoxSection className={cn('col-span-full mt-2 grid grid-cols-[auto_1fr] text-sm', className)}>
        {'title' in props && (
            <Header className='pointer-events-none col-span-full px-2.5 py-1 text-muted-fg text-xs'>
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

export { ListBox, ListBoxSection, ListBoxDetails, ListBoxItem }
