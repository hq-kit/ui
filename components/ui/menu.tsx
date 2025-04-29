'use client'

import { IconCheck, IconChevronRight } from 'hq-icons'
import type { CSSProperties, ComponentPropsWithRef } from 'react'
import type {
    MenuProps,
    MenuSectionProps,
    MenuTriggerProps,
    PopoverProps,
    MenuItemProps as RACMenuItemProps,
    SeparatorProps,
    TextProps
} from 'react-aria-components'
import {
    Button,
    Collection,
    Header,
    MenuTrigger,
    PopoverContext,
    Menu as RACMenu,
    MenuItem as RACMenuItem,
    MenuSection as RACMenuSection,
    Separator,
    SubmenuTrigger,
    Text,
    composeRenderProps,
    useSlottedContext
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import { PopoverContent } from './popover'

const Menu = ({ ...props }: MenuTriggerProps) => <MenuTrigger {...props} />

interface MenuContentProps<T>
    extends MenuProps<T>,
        Pick<
            PopoverProps,
            | 'placement'
            | 'offset'
            | 'crossOffset'
            | 'arrowBoundaryOffset'
            | 'triggerRef'
            | 'isOpen'
            | 'onOpenChange'
            | 'shouldFlip'
        > {
    className?: string
    style?: CSSProperties
    respectScreen?: boolean
}

const MenuContent = <T extends object>({ className, respectScreen = true, ...props }: MenuContentProps<T>) => {
    const popoverContext = useSlottedContext(PopoverContext)!
    const isSubmenuTrigger = popoverContext?.trigger === 'SubmenuTrigger'
    const optimalOffset = isSubmenuTrigger ? 0 : 8
    return (
        <PopoverContent respectScreen={respectScreen} offset={props.offset ?? optimalOffset} {...props}>
            <RACMenu
                className={cn(
                    'grid max-h-[calc(var(--visual-viewport-height)-10rem)] grid-cols-[auto_1fr_auto] overflow-auto rounded-lg p-1 outline-hidden sm:max-h-[inherit] sm:min-w-40',
                    className
                )}
                {...props}
            />
        </PopoverContent>
    )
}

interface MenuItemProps extends RACMenuItemProps {
    isDanger?: boolean
}

const MenuItem = ({ className, isDanger = false, children, ...props }: MenuItemProps) => {
    const textValue = props.textValue || (typeof children === 'string' ? children : undefined)
    return (
        <RACMenuItem
            className={composeRenderProps(className, (className, { isOpen, isFocused, isSelected, isDisabled }) =>
                cn(
                    'group relative col-span-full grid grid-cols-subgrid items-center has-data-[slot=item-details]:items-start',
                    'select-none rounded-md px-2 py-1.5 text-base outline-hidden sm:text-sm',
                    '**:data-[slot=icon]:mr-2 **:data-avatar:mr-2 **:data-avatar:size-6 **:[svg]:size-3.5 has-data-[slot=item-details]:**:[svg]:my-1',
                    isDanger
                        ? 'text-danger **:text-danger open:bg-danger/10 open:text-danger focus:bg-danger/10 focus:text-danger focus:**:text-danger'
                        : 'text-fg',
                    isOpen && 'bg-primary/10 text-primary *:[.text-muted-fg]:text-primary',
                    isFocused && 'bg-primary/10 text-primary',
                    isSelected && '**:data-avatar:*:hidden **:data-[slot=icon]:hidden **:data-avatar:hidden',
                    isDisabled && 'pointer-events-none opacity-50',
                    className
                )
            )}
            textValue={textValue}
            {...props}
        >
            {(values) => (
                <>
                    {values.isSelected && <IconCheck className='mr-2 text-success' data-slot='checked' />}
                    {typeof children === 'function' ? children(values) : children}
                    {values.hasSubmenu && <IconChevronRight data-slot='chevron' className='ml-auto' />}
                </>
            )}
        </RACMenuItem>
    )
}

const MenuHeader = ({ className, ...props }: ComponentPropsWithRef<typeof Header>) => (
    <Header
        className={cn(
            '-mx-1 col-span-full mb-1 touch-none border-b px-2.5 py-2 font-semibold text-base sm:px-3 sm:pb-2.5 sm:text-sm',
            className
        )}
        {...props}
    />
)

const MenuSection = <T extends object>({ className, ...props }: MenuSectionProps<T> & { title?: string }) => {
    return (
        <RACMenuSection className={cn('col-span-full mt-2 grid grid-cols-[auto_1fr]', className)} {...props}>
            {'title' in props && (
                <Header className='pointer-events-none col-span-full px-2 py-1 text-muted-fg text-xs'>
                    {props.title}
                </Header>
            )}
            <Collection items={props.items}>{props.children}</Collection>
        </RACMenuSection>
    )
}

interface DropdownItemDetailProps extends TextProps {
    label?: TextProps['children']
    description?: TextProps['children']
}

const MenuDetails = ({ label, description, ...props }: DropdownItemDetailProps) => {
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

const MenuLabel = ({ className, ...props }: ComponentPropsWithRef<typeof Text>) => (
    <Text slot='label' className={cn('col-start-2', className)} {...props} />
)

const MenuSeparator = ({ className, ...props }: SeparatorProps) => (
    <Separator
        orientation='horizontal'
        className={cn('-mx-1 col-span-full my-1 h-px bg-muted', className)}
        {...props}
    />
)

Menu.Trigger = Button
Menu.Submenu = SubmenuTrigger
Menu.Item = MenuItem
Menu.Content = MenuContent
Menu.Header = MenuHeader
Menu.Section = MenuSection
Menu.Details = MenuDetails
Menu.Label = MenuLabel
Menu.Separator = MenuSeparator

export { Menu }
