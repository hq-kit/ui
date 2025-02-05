'use client'

import { IconCheck } from 'hq-icons'
import {
    Collection,
    Header,
    ListBoxItem as ListBoxItemPrimitive,
    type ListBoxItemProps,
    ListBoxSection,
    type SectionProps,
    Separator,
    type SeparatorProps,
    Text,
    type TextProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Keyboard } from './keyboard'
import { cn, cr } from './utils'

const dropdownItemStyles = tv({
    base: [
        'col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] not-has-data-[slot=dropdown-item-details]:items-center has-data-[slot=dropdown-item-details]:**:data-[slot=checked-icon]:mt-[1.5px] supports-[grid-template-columns:subgrid]:grid-cols-subgrid',
        'group text-fg relative cursor-default rounded-[calc(var(--radius-lg)-1px)] px-[calc(var(--spacing)*2.3)] py-[calc(var(--spacing)*1.3)] text-base outline-0 select-none sm:text-sm/6',
        '**:data-avatar:mr-2 **:data-avatar:size-6 **:data-avatar:*:mr-2 **:data-avatar:*:size-6 sm:**:data-avatar:size-5 sm:**:data-avatar:*:size-5',
        'data-danger:**:data-[slot=icon]:text-danger/60 **:data-[slot=icon]:text-muted-fg data-focused:data-danger:**:data-[slot=icon]:text-danger **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0',
        '*:data-[slot=icon]:mr-2 data-[slot=menu-radio]:*:data-[slot=icon]:size-4',
        '[&>[slot=label]+[data-slot=icon]]:absolute [&>[slot=label]+[data-slot=icon]]:right-0'
    ],
    variants: {
        isDisabled: {
            true: 'text-muted-fg'
        },
        isSelected: {
            true: '**:data-avatar:hidden **:data-avatar:*:hidden **:data-[slot=icon]:hidden'
        },
        isFocused: {
            false: 'data-danger:text-danger',
            true: [
                '**:data-[slot=icon]:text-primary-fg **:[kbd]:text-primary-fg',
                'bg-primary text-primary-fg',
                'data-danger:bg-danger/10 data-danger:text-danger',
                'data-[slot=description]:text-primary-fg data-[slot=label]:text-primary-fg [&_.text-muted-fg]:text-primary-fg/80'
            ]
        }
    }
})

const dropdownSectionStyles = tv({
    slots: {
        section: 'sect col-span-full grid grid-cols-[auto_1fr]',
        header: 'text-muted-fg col-span-full px-2.5 py-1 text-sm font-medium sm:text-xs'
    }
})

const { section, header } = dropdownSectionStyles()

interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string
}

const DropdownSection = <T extends object>({ className, ...props }: DropdownSectionProps<T>) => {
    return (
        <ListBoxSection className={section({ className })}>
            {'title' in props && <Header className={header()}>{props.title}</Header>}
            <Collection items={props.items}>{props.children}</Collection>
        </ListBoxSection>
    )
}

type DropdownItemProps = ListBoxItemProps

const DropdownItem = ({ className, ...props }: DropdownItemProps) => {
    const textValue =
        props.textValue || (typeof props.children === 'string' ? props.children : undefined)
    return (
        <ListBoxItemPrimitive
            textValue={textValue}
            className={cr(className, (className, renderProps) =>
                dropdownItemStyles({ ...renderProps, className })
            )}
            {...props}
        >
            {cr(props.children, (children, { isSelected }) => (
                <>
                    {isSelected && <IconCheck data-slot='checked-icon' className='-mx-0.5 mr-2' />}
                    {typeof children === 'string' ? (
                        <DropdownLabel>{children}</DropdownLabel>
                    ) : (
                        children
                    )}
                </>
            ))}
        </ListBoxItemPrimitive>
    )
}

interface DropdownItemDetailProps extends TextProps {
    label?: TextProps['children']
    description?: TextProps['children']
    classNames?: {
        label?: TextProps['className']
        description?: TextProps['className']
    }
}

const DropdownItemDetails = ({
    label,
    description,
    classNames,
    ...props
}: DropdownItemDetailProps) => {
    const { slot, children, title, ...restProps } = props

    return (
        <div
            data-slot='dropdown-item-details'
            className='col-start-2 flex flex-col gap-y-1'
            {...restProps}
        >
            {label && (
                <Text
                    slot={slot ?? 'label'}
                    className={cn('font-medium sm:text-sm', classNames?.label)}
                    {...restProps}
                >
                    {label}
                </Text>
            )}
            {description && (
                <Text
                    slot={slot ?? 'description'}
                    className={cn('text-muted-fg text-xs', classNames?.description)}
                    {...restProps}
                >
                    {description}
                </Text>
            )}
            {!title && children}
        </div>
    )
}

interface MenuLabelProps extends TextProps {
    ref?: React.Ref<HTMLDivElement>
}

const DropdownLabel = ({ className, ref, ...props }: MenuLabelProps) => (
    <Text slot='label' ref={ref} className={cn('col-start-2', className)} {...props} />
)

const DropdownSeparator = ({ className, ...props }: SeparatorProps) => (
    <Separator
        orientation='horizontal'
        className={cn('bg-muted col-span-full -mx-1 my-1 h-px', className)}
        {...props}
    />
)

const DropdownKeyboard = ({ className, ...props }: React.ComponentProps<typeof Keyboard>) => {
    return <Keyboard className={cn('absolute right-2 pl-2', className)} {...props} />
}

export {
    DropdownItem,
    DropdownItemDetails,
    dropdownItemStyles,
    DropdownKeyboard,
    DropdownLabel,
    DropdownSection,
    dropdownSectionStyles,
    DropdownSeparator
}
export type { DropdownItemDetailProps, DropdownItemProps, DropdownSectionProps }
