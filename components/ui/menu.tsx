'use client'

import React from 'react'

import { IconCheck, IconChevronRight } from 'hq-icons'
import { motion } from 'motion/react'
import type {
    MenuItemProps,
    MenuProps,
    MenuSectionProps,
    MenuTriggerProps,
    PopoverProps,
    SeparatorProps,
    TextProps
} from 'react-aria-components'
import {
    Button,
    Collection,
    composeRenderProps,
    Header,
    MenuTrigger,
    ModalOverlay,
    Popover,
    PopoverContext,
    Menu as RACMenu,
    MenuItem as RACMenuItem,
    MenuSection as RACMenuSection,
    Modal as RACModal,
    Separator,
    SubmenuTrigger,
    Text,
    useSlottedContext
} from 'react-aria-components'

import { useMediaQuery } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const Modal = motion.create(RACModal)

const Menu = ({ ...props }: MenuTriggerProps) => <MenuTrigger {...props} />

interface MenuContentProps<T>
    extends Pick<
            PopoverProps,
            | 'placement'
            | 'offset'
            | 'crossOffset'
            | 'arrowBoundaryOffset'
            | 'triggerRef'
            | 'isOpen'
            | 'onOpenChange'
            | 'shouldFlip'
        >,
        MenuProps<T> {
    className?: string
    respectScreen?: boolean
    portal?: Element
}

const MenuContent = <T extends object>({
    className,
    respectScreen = true,
    ...props
}: MenuContentProps<T>) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const popoverContext = useSlottedContext(PopoverContext)!
    if (isMobile && respectScreen) {
        return (
            <ModalOverlay
                UNSTABLE_portalContainer={props.portal}
                className={composeRenderProps(className, (className, { isEntering, isExiting }) =>
                    cn(
                        'fixed top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-full',
                        'flex sm:block items-end justify-end bg-black/50 backdrop-blur',
                        '[--visual-viewport-vertical-padding:16px] sm:[--visual-viewport-vertical-padding:32px]',
                        isEntering && 'fade-in animate-in duration-200 ease-out',
                        isExiting && 'fade-out animate-out ease-in',
                        className
                    )
                )}
                isDismissable
            >
                {({ state }) => (
                    <Modal
                        isDismissable
                        UNSTABLE_portalContainer={props.portal}
                        className={composeRenderProps(
                            className,
                            (className, { isEntering, isExiting }) =>
                                cn(
                                    'bg-bg text-fg pt-2 rounded-t-lg fixed top-auto bottom-0 z-50 max-h-full w-full border border-b-transparent overflow-y-auto outline-hidden',
                                    isEntering &&
                                        'will-change-transform fade-in slide-in-from-bottom-56 animate-in',
                                    isExiting && 'fade-out slide-out-to-bottom-56 animate-out',
                                    className
                                )
                        )}
                        drag={'y'}
                        transition={{ duration: 0.2 }}
                        dragConstraints={{ top: 0, bottom: 0 }}
                        onDragEnd={(_, { offset, velocity }) => {
                            if (offset.y > window.innerHeight * 0.5 || velocity.y > 25) {
                                state.close()
                            }
                        }}
                    >
                        <div className='h-4 w-full'>
                            <div className='mx-auto w-12 h-1.5 rounded-full bg-muted' />
                        </div>
                        <RACMenu
                            aria-label='Menu'
                            className={cn(
                                'grid grid-cols-[auto_1fr_auto] max-h-[calc(var(--visual-viewport-height)-10rem)] sm:max-h-[inherit] overflow-auto rounded-lg p-1 outline-hidden',
                                className
                            )}
                            {...props}
                        />
                    </Modal>
                )}
            </ModalOverlay>
        )
    } else {
        const isSubmenuTrigger = popoverContext?.trigger === 'SubmenuTrigger'
        const optimalOffset = isSubmenuTrigger ? 0 : 8
        return (
            <Popover
                UNSTABLE_portalContainer={props.portal}
                isOpen={props.isOpen}
                onOpenChange={props.onOpenChange}
                shouldFlip={props.shouldFlip}
                offset={props.offset ?? optimalOffset}
                placement={props.placement}
                crossOffset={props.crossOffset}
                triggerRef={props.triggerRef}
                arrowBoundaryOffset={props.arrowBoundaryOffset}
                className={composeRenderProps(className, (className, { isEntering, isExiting }) =>
                    cn(
                        'group min-w-40 bg-bg max-w-xs sm:max-w-3xl rounded-lg border bg-clip-padding shadow transition-transform outline-hidden',
                        isEntering &&
                            'fade-in animate-in zoom-in-95 placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2',
                        isExiting &&
                            'fade-out animate-out zoom-out-95 placement-left:slide-out-to-right-2 placement-right:slide-out-to-left-2 placement-top:slide-out-to-bottom-2 placement-bottom:slide-out-to-top-2',
                        className
                    )
                )}
            >
                <RACMenu
                    className={cn(
                        'grid grid-cols-[auto_1fr_auto] max-h-[calc(var(--visual-viewport-height)-10rem)] sm:max-h-[inherit] overflow-auto rounded-lg p-1 outline-hidden',
                        className
                    )}
                    {...props}
                />
            </Popover>
        )
    }
}

const MenuItem = ({
    className,
    isDanger = false,
    children,
    ...props
}: MenuItemProps & { isDanger?: boolean }) => {
    const textValue = props.textValue || (typeof children === 'string' ? children : undefined)
    return (
        <RACMenuItem
            className={composeRenderProps(
                className,
                (className, { isOpen, isFocused, isSelected, isDisabled }) =>
                    cn(
                        'group relative grid  grid-cols-subgrid col-span-full items-center',
                        'rounded-md px-2 py-1.5 text-base sm:text-sm outline-hidden select-none',
                        '**:[svg]:size-4 *:data-[slot=icon]:mr-2',
                        isDanger
                            ? 'text-danger **:text-danger focus:bg-danger/10 open:bg-danger/10 open:text-danger focus:text-danger focus:**:text-danger'
                            : 'text-fg',
                        isOpen && 'bg-primary/10 text-primary *:[.text-muted-fg]:text-primary',
                        isFocused && 'bg-primary/10 text-primary',
                        isSelected &&
                            '**:data-avatar:hidden **:data-avatar:*:hidden **:data-[slot=icon]:hidden',
                        isDisabled && 'pointer-events-none opacity-50',
                        className
                    )
            )}
            textValue={textValue}
            {...props}
        >
            {(values) => (
                <>
                    {values.isSelected && <IconCheck className='mr-2 size-4' data-slot='checked' />}
                    {typeof children === 'function' ? children(values) : children}
                    {values.hasSubmenu && (
                        <IconChevronRight data-slot='chevron' className='ml-auto size-4' />
                    )}
                </>
            )}
        </RACMenuItem>
    )
}

const MenuHeader = ({ className, ...props }: React.ComponentProps<typeof Header>) => (
    <Header
        className={cn(
            'col-span-full px-2.5 py-2 text-base font-semibold sm:text-sm -mx-1 mb-1 border-b sm:px-3 sm:pb-2.5',
            className
        )}
        {...props}
    />
)

const MenuSection = <T extends object>({
    className,
    ...props
}: MenuSectionProps<T> & { title?: string }) => {
    return (
        <RACMenuSection
            className={cn('col-span-full grid grid-cols-[auto_1fr] mt-2', className)}
            {...props}
        >
            {'title' in props && (
                <Header className='text-muted-fg text-xs col-span-full px-2 py-1 pointer-events-none'>
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

interface MenuLabelProps extends TextProps {
    ref?: React.Ref<HTMLDivElement>
}

const MenuLabel = ({ className, ref, ...props }: MenuLabelProps) => (
    <Text slot='label' ref={ref} className={cn('col-start-2', className)} {...props} />
)

const MenuSeparator = ({ className, ...props }: SeparatorProps) => (
    <Separator
        orientation='horizontal'
        className={cn('bg-muted col-span-full -mx-1 my-1 h-px', className)}
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
