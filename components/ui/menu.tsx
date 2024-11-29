'use client'

import React from 'react'

import { IconCheck, IconChevronRight, IconCircleCheck } from 'hq-icons'
import {
    Button,
    Collection,
    Header,
    MenuItem,
    Menu as MenuPrimitive,
    MenuSection,
    MenuTrigger as MenuTriggerPrimitive,
    Separator,
    SubmenuTrigger as SubmenuTriggerPrimitive,
    type ButtonProps,
    type MenuItemProps as MenuItemPrimitiveProps,
    type MenuProps as MenuPrimitiveProps,
    type MenuSectionProps,
    type MenuTriggerProps as MenuTriggerPrimitiveProps,
    type PopoverProps,
    type SeparatorProps
} from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { DropdownItemDetails, dropdownItemStyles, dropdownSectionStyles } from './dropdown'
import { Keyboard } from './keyboard'
import { Popover } from './popover'
import { cn, cr } from './utils'

interface MenuContextProps {
    respectScreen: boolean
}

const MenuContext = React.createContext<MenuContextProps>({ respectScreen: true })

interface MenuProps extends MenuTriggerPrimitiveProps {
    respectScreen?: boolean
}

const Menu = ({ respectScreen = true, ...props }: MenuProps) => {
    return (
        <MenuContext.Provider value={{ respectScreen }}>
            <MenuTriggerPrimitive {...props}>{props.children}</MenuTriggerPrimitive>
        </MenuContext.Provider>
    )
}

const SubMenu = ({ delay = 0, ...props }) => (
    <SubmenuTriggerPrimitive {...props} delay={delay}>
        {props.children}
    </SubmenuTriggerPrimitive>
)

const menuStyles = tv({
    slots: {
        menu: 'max-h-[calc(var(--visual-viewport-height)-10rem)] sm:max-h-[inherit] overflow-auto rounded-lg p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]',
        popover: 'z-50 min-w-40 p-0 outline-none shadow-sm',
        trigger: [
            'inline relative text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary pressed:outline-none'
        ]
    }
})

const { menu, popover, trigger } = menuStyles()

interface MenuTriggerProps extends ButtonProps {
    className?: string
}

const Trigger = ({ className, ...props }: MenuTriggerProps) => (
    <Button className={trigger({ className })} {...props}>
        {(values) => (
            <>{typeof props.children === 'function' ? props.children(values) : props.children}</>
        )}
    </Button>
)

interface MenuContentProps<T>
    extends Omit<PopoverProps, 'children' | 'style'>,
        MenuPrimitiveProps<T> {
    className?: string
    popoverClassName?: string
    showArrow?: boolean
    respectScreen?: boolean
    portal?: Element
}

const Content = <T extends object>({
    className,
    showArrow = false,
    popoverClassName,
    ...props
}: MenuContentProps<T>) => {
    const { respectScreen } = React.useContext(MenuContext)
    return (
        <Popover.Content
            UNSTABLE_portalContainer={props.portal}
            respectScreen={respectScreen}
            showArrow={showArrow}
            className={popover({
                className: cn([
                    showArrow && 'placement-left:mt-[-0.38rem] placement-right:mt-[-0.38rem]',
                    popoverClassName
                ])
            })}
            {...props}
        >
            <MenuPrimitive className={menu({ className })} {...props} />
        </Popover.Content>
    )
}

interface MenuItemProps
    extends Omit<MenuItemPrimitiveProps, 'isDanger'>,
        VariantProps<typeof dropdownItemStyles> {
    isDanger?: boolean
}

const Item = ({ className, isDanger = false, children, ...props }: MenuItemProps) => {
    const textValue = props.textValue || (typeof children === 'string' ? children : undefined)
    return (
        <MenuItem
            className={cr(className, (className, renderProps) =>
                dropdownItemStyles({
                    ...renderProps,
                    className
                })
            )}
            textValue={textValue}
            data-danger={isDanger ? 'true' : undefined}
            {...props}
        >
            {(values) => (
                <>
                    {typeof children === 'function' ? children(values) : children}
                    {values.hasSubmenu && <IconChevronRight className='gpfw ml-auto size-3.5' />}
                </>
            )}
        </MenuItem>
    )
}

export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
    separator?: boolean
}

const MenuHeader = ({ className, separator = false, ...props }: MenuHeaderProps) => (
    <Header
        className={cn(
            'p-2 text-base font-semibold sm:text-sm',
            separator && '-mx-1 border-b px-3 pb-2 mb-1',
            className
        )}
        {...props}
    />
)

const MenuSeparator = ({ className, ...props }: SeparatorProps) => (
    <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
)

const Checkbox = ({ className, children, ...props }: MenuItemProps) => (
    <Item className={cn('relative pr-8', className)} {...props}>
        {(values) => (
            <>
                {typeof children === 'function' ? children(values) : children}
                {values.isSelected && (
                    <span className='absolute right-2 flex size-4 shrink-0 items-center animate-in justify-center'>
                        <IconCheck />
                    </span>
                )}
            </>
        )}
    </Item>
)

const Radio = ({ className, children, ...props }: MenuItemProps) => (
    <Item className={cn('relative', className)} {...props}>
        {(values) => (
            <>
                {typeof children === 'function' ? children(values) : children}

                {values.isSelected && (
                    <span
                        data-slot='menu-radio'
                        className='absolute right-3 flex items-center animate-in justify-center'
                    >
                        <IconCircleCheck />
                    </span>
                )}
            </>
        )}
    </Item>
)

const { section, header } = dropdownSectionStyles()

interface SectionProps<T> extends MenuSectionProps<T> {
    title?: string
}

const Section = <T extends object>({ className, ...props }: SectionProps<T>) => {
    return (
        <MenuSection className={section({ className })} {...props}>
            {'title' in props && <Header className={header()}>{props.title}</Header>}
            <Collection items={props.items}>{props.children}</Collection>
        </MenuSection>
    )
}

Menu.Primitive = MenuPrimitive
Menu.Content = Content
Menu.Header = MenuHeader
Menu.Item = Item
Menu.Content = Content
Menu.Keyboard = Keyboard
Menu.Checkbox = Checkbox
Menu.Radio = Radio
Menu.Section = Section
Menu.Separator = MenuSeparator
Menu.Trigger = Trigger
Menu.ItemDetails = DropdownItemDetails
Menu.Submenu = SubMenu

export { Menu, type MenuContentProps }
