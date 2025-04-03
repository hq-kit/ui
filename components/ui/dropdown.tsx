'use client'

import { IconCheck } from 'hq-icons'
import {
    Collection,
    Header,
    type ListBoxItemProps,
    ListBoxSection,
    ListBoxItem as RACListBoxItem,
    type SectionProps,
    Separator,
    type SeparatorProps,
    Text,
    type TextProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Keyboard } from './keyboard'
import { cn, compose, cr } from './utils'

const itemStyles = tv({
    base: [
        'group relative grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] *:grid-cols-subgrid col-span-full items-center',
        'rounded-md px-2 py-1.5 text-base sm:text-sm/6 outline-hidden select-none',
        '**:[svg]:size-4 *:data-[slot=icon]:mr-2'
    ],
    variants: {
        isDanger: {
            true: 'text-danger **:text-danger focus:bg-danger/20',
            false: 'text-fg **:text-fg'
        },
        isOpen: { true: 'bg-accent text-accent-fg *:[.text-muted-fg]:text-accent-fg' },
        isFocused: { true: 'bg-accent text-accent-fg' },
        isSelected: {
            true: '**:data-avatar:hidden **:data-avatar:*:hidden **:data-[slot=icon]:hidden'
        },
        isDisabled: {
            true: 'pointer-events-none opacity-50'
        }
    }
})

const sectionStyles = tv({
    base: 'col-span-full grid grid-cols-[auto_1fr] mt-2 *:[header]:text-muted-fg *:[header]:col-span-full *:[header]:px-2 *:[header]:pointer-events-none'
})

interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string
}

const DropdownSection = <T extends object>({
    className,
    ...props
}: SectionProps<T> & { title?: string }) => {
    return (
        <ListBoxSection className={sectionStyles({ className })}>
            {'title' in props && <Header>{props.title}</Header>}
            <Collection items={props.items}>{props.children}</Collection>
        </ListBoxSection>
    )
}

type DropdownItemProps = ListBoxItemProps

const DropdownItem = ({ className, ...props }: DropdownItemProps) => {
    const textValue =
        props.textValue || (typeof props.children === 'string' ? props.children : undefined)
    return (
        <RACListBoxItem
            textValue={textValue}
            className={compose(className, itemStyles())}
            {...props}
        >
            {cr(props.children, (children, { isSelected }) => (
                <>
                    {isSelected && <IconCheck role='checked' className='mr-2 size-4' />}
                    {typeof children === 'string' ? (
                        <DropdownLabel>{children}</DropdownLabel>
                    ) : (
                        children
                    )}
                </>
            ))}
        </RACListBoxItem>
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
        <div data-slot='item-details' className='col-start-2 flex flex-col gap-y-1' {...restProps}>
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
    DropdownKeyboard,
    DropdownLabel,
    DropdownSection,
    DropdownSeparator,
    itemStyles,
    sectionStyles
}
export type { DropdownItemDetailProps, DropdownItemProps, DropdownSectionProps }
