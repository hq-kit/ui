'use client'

import React from 'react'

import { IconChevronRight, IconPanelBottomClose, IconPanelLeftOpen } from 'hq-icons'
import type {
    ButtonProps,
    DisclosureGroupProps,
    DisclosurePanelProps,
    DisclosureProps,
    LinkProps,
    TextProps
} from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    DialogTrigger,
    Disclosure,
    DisclosureGroup,
    DisclosurePanel,
    Header,
    Link,
    OverlayArrow,
    Popover,
    Text
} from 'react-aria-components'

import { useMediaQuery } from '@/lib/hooks'
import { cn } from '@/lib/utils'

import { Sheet } from './sheet'

const SIDEBAR_COOKIE_NAME = 'sidebar:state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const WIDTH = '16rem'
const WIDTH_DOCK = '3rem'
const WIDTH_FLOAT_DOCK = '4rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
    state: 'expanded' | 'collapsed'
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
    side: 'left' | 'right'
    variant: 'default' | 'float' | 'inset'
    collapsible: 'dock' | 'hidden' | 'none'
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

const useSidebar = () => {
    const context = React.use(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within a Sidebar.')
    }
    return context
}

interface SidebarProviderProps extends React.ComponentProps<'div'> {
    defaultOpen?: boolean
    shortcut?: string
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
    side?: 'left' | 'right'
    variant?: 'default' | 'float' | 'inset'
    collapsible?: 'dock' | 'hidden' | 'none'
}

const Sidebar = ({
    defaultOpen = true,
    isOpen: openProp,
    onOpenChange: setOpenProp,
    className,
    children,
    shortcut = SIDEBAR_KEYBOARD_SHORTCUT,
    side = 'left',
    variant = 'default',
    collapsible = 'hidden',
    ...props
}: SidebarProviderProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const [openMobile, setOpenMobile] = React.useState<boolean>(false)
    const [internalOpenState, setInternalOpenState] = React.useState<boolean>(defaultOpen)

    const open = openProp ?? internalOpenState
    const setOpen = React.useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === 'function' ? value(open) : value
            if (setOpenProp) {
                setOpenProp(openState)
            } else {
                setInternalOpenState(openState)
            }
            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
        },
        [setOpenProp, open]
    )

    const toggleSidebar = React.useCallback(() => {
        return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
    }, [isMobile, setOpen])

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === shortcut &&
                collapsible !== 'none' &&
                (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault()
                toggleSidebar()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [toggleSidebar, shortcut, collapsible])

    const state = open ? 'expanded' : 'collapsed'

    const contextValue = React.useMemo<SidebarContextProps>(
        () => ({
            state,
            open,
            setOpen,
            isMobile,
            openMobile: openMobile,
            setOpenMobile: setOpenMobile,
            toggleSidebar,
            side,
            variant,
            collapsible
        }),
        [state, open, setOpen, isMobile, openMobile, toggleSidebar, side, variant, collapsible]
    )

    const collapsedHidden = state === 'collapsed' && collapsible === 'hidden'
    const collapsedDock = state === 'collapsed' && collapsible === 'dock' && variant === 'default'
    const collapsedFloatDock =
        state === 'collapsed' && variant === 'float' && collapsible === 'dock'
    const collapsedInsetDock =
        state === 'collapsed' && variant === 'inset' && collapsible === 'dock'

    return (
        <SidebarContext value={contextValue}>
            {collapsible === 'none' && !isMobile ? (
                <div
                    style={{ width: WIDTH }}
                    className={cn(
                        'flex h-full min-h-screen flex-col border-r bg-bg text-fg',
                        className
                    )}
                >
                    {children}
                </div>
            ) : isMobile ? (
                <Sheet isOpen={openMobile} onOpenChange={setOpenMobile} {...props}>
                    <Sheet.Trigger
                        className={({ isPressed, isHovered, isFocusVisible }) =>
                            cn(
                                'bg-bg z-50 top-1/2 absolute shrink-0 border inline-flex size-10 items-center justify-center rounded-md text-muted-fg outline-hidden',
                                isHovered && 'bg-muted/40',
                                isFocusVisible && 'ring-4 ring-primary/20 border-primary',
                                isPressed && 'bg-muted/50',
                                side === 'left' ? '-left-2 ' : '-right-2'
                            )
                        }
                    >
                        <IconPanelLeftOpen className='size-6' />
                    </Sheet.Trigger>
                    <Sheet.Content
                        aria-label='Sidebar'
                        isFloating={variant === 'float'}
                        side={side}
                    >
                        <Sheet.Body className='px-0 sm:px-0'>{children}</Sheet.Body>
                    </Sheet.Content>
                </Sheet>
            ) : (
                <div
                    data-variant={variant}
                    data-side={side}
                    className='peer z-20 [--visual-viewport-vertical-padding:32px] text-fg hidden md:block **:data-[slot=icon]:shrink-0'
                >
                    <div
                        style={{
                            width: collapsedDock
                                ? WIDTH_DOCK
                                : collapsedFloatDock
                                  ? WIDTH_FLOAT_DOCK
                                  : collapsedHidden
                                    ? 0
                                    : collapsedInsetDock
                                      ? WIDTH_FLOAT_DOCK
                                      : WIDTH
                        }}
                        className={cn(
                            'hidden backdrop-blur transition-[left,right,width] duration-200 ease-linear md:flex',
                            `${side}-0`,
                            variant === 'float' && 'p-2',
                            variant === `inset` && 'p-2 bg-primary/5',
                            variant === 'default' && 'border-r',
                            collapsedHidden && 'p-0'
                        )}
                    >
                        <div
                            data-sidebar='default'
                            className={cn(
                                'text-fg flex min-h-svh size-full flex-col',
                                variant === 'inset' && 'min-h-[calc(100vh-1rem)]',
                                variant === 'float' &&
                                    'bg-primary/5 rounded-lg border min-h-[calc(100vh-1rem)]',
                                className
                            )}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </SidebarContext>
    )
}

const SidebarHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
    const { state, variant, collapsible } = useSidebar()
    const collapsed = state === 'collapsed'
    return (
        <div
            data-sidebar-header='true'
            className={cn(
                'flex items-center p-4 gap-x-3 *:[svg]:size-5 font-semibold',
                collapsed && variant === 'float' && 'mt-1',
                collapsed && 'justify-center mt-10 *:[[slot=label]]:hidden',
                collapsed && collapsible === 'hidden' && 'hidden',
                className
            )}
            {...props}
        />
    )
}

const SidebarFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
    const { state, isMobile, collapsible } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    const hidden = collapsed && collapsible === 'hidden'
    return (
        <div
            data-sidebar-footer='true'
            className={cn(
                'mt-auto flex flex-col p-2 overflow-hidden',
                '**:data-avatar:size-8 **:data-avatar:shrink-0',
                collapsed && '**:data-user:hidden **:data-[slot=icon]:hidden **:[button]:p-0',
                hidden && 'hidden',
                className
            )}
            {...props}
        />
    )
}

const SidebarBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        slot='body'
        className={cn(
            'isolate will-change-scroll py-2 flex flex-col space-y-4 overflow-y-auto overflow-x-hidden max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))]',
            className
        )}
        {...props}
    />
)

const SidebarSection = ({ className, ...props }: DisclosureGroupProps & { title?: string }) => {
    const { state } = useSidebar()
    return (
        <section
            data-section
            className={cn('col-span-full flex flex-col gap-y-0.5 px-2', className)}
        >
            {state !== 'collapsed' && 'title' in props && (
                <Header className='text-muted-fg flex shrink-0 items-center rounded-lg px-2 text-xs font-medium transition-[margin,opa] duration-200 ease-linear outline-hidden'>
                    {props.title}
                </Header>
            )}
            <DisclosureGroup
                {...props}
                data-section
                allowsMultipleExpanded
                className='grid grid-cols-[auto_1fr_auto] gap-y-0.5 group'
            >
                {props.children}
            </DisclosureGroup>
        </section>
    )
}

interface SidebarItemProps
    extends DisclosureProps,
        Pick<LinkProps, 'href' | 'routerOptions' | 'onPress'> {
    isCurrent?: boolean
    tooltip?: React.ReactNode | string
    badge?: string | number | undefined
    style?: React.CSSProperties
}

const SidebarItem = ({ className, isCurrent, ...props }: SidebarItemProps) => {
    const { state, collapsible } = useSidebar()
    const collapsedDock = state === 'collapsed' && collapsible === 'dock'
    return 'href' in props ? (
        <Link
            className={({ isHovered, isPressed, isFocused, isFocusVisible, isDisabled }) =>
                cn(
                    'col-span-full relative text-sm cursor-pointer items-center outline-hidden rounded-lg',
                    {
                        'bg-primary/10 text-primary':
                            isHovered || isPressed || isFocused || isCurrent
                    },
                    isFocusVisible && 'ring-2 ring-offset-2 ring-primary',
                    isDisabled && 'cursor-default opacity-50',
                    collapsedDock
                        ? 'size-8 p-0 flex justify-center'
                        : 'px-2.5 py-2 grid grid-cols-subgrid gap-x-3',
                    state === 'collapsed' && 'group-data-section:*:[[slot=label]]:hidden',
                    className
                )
            }
            {...props}
        >
            {props.children as React.ReactNode}
        </Link>
    ) : state === 'expanded' ? (
        <Disclosure
            isExpanded
            className={composeRenderProps(className, (className, { isDisabled, isExpanded }) =>
                cn(
                    'relative outline-hidden gap-y-0.5 grid grid-cols-subgrid col-span-full gap-x-3 rounded-lg text-sm items-center',
                    isExpanded && '*:[button]:data-[slot=indicator]:rotate-90',
                    isDisabled && 'opacity-50',
                    className
                )
            )}
            {...props}
        />
    ) : (
        <DialogTrigger>{props.children as React.ReactNode}</DialogTrigger>
    )
}

const SidebarLabel = ({ className, ...props }: TextProps) => {
    return (
        <Text
            slot='label'
            className={cn('col-start-2 line-clamp-1 text-left', className)}
            {...props}
        />
    )
}

const SidebarSubItemTrigger = ({ children, className, ...props }: ButtonProps) => {
    const { state, collapsible } = useSidebar()
    const collapsedDock = state === 'collapsed' && collapsible === 'dock'
    return (
        <Button
            slot='trigger'
            {...props}
            className={({ isHovered, isPressed, isFocused, isFocusVisible }) =>
                cn(
                    'col-span-full cursor-pointer items-center outline-hidden rounded-lg',
                    {
                        'bg-primary/10 text-primary': isHovered || isPressed || isFocused
                    },
                    collapsedDock
                        ? 'p-0 size-8 flex justify-center'
                        : 'grid grid-cols-subgrid px-2.5 py-2 text-left',
                    isFocusVisible && 'ring-2 ring-offset-2 ring-primary',
                    'aria-expanded:*:data-[slot=indicator]:rotate-90',
                    state === 'collapsed' && '*:[[slot=label]]:hidden',
                    className
                )
            }
        >
            {(values) => (
                <>
                    {typeof children === 'function' ? children(values) : children}
                    {!collapsedDock && (
                        <IconChevronRight
                            data-slot='indicator'
                            className={cn('transition-transform size-3.5 text-muted-fg ml-auto')}
                        />
                    )}
                </>
            )}
        </Button>
    )
}

const SidebarSubItem = ({ children, className, ...props }: DisclosurePanelProps) => {
    const { state, isMobile } = useSidebar()
    return state === 'expanded' || isMobile ? (
        <DisclosurePanel
            className={cn('grid grid-cols-subgrid gap-y-0.5 col-span-full', className)}
            {...props}
        >
            {children}
        </DisclosurePanel>
    ) : (
        <Popover
            placement='right top'
            className='group **:line-clamp-none **:size-fit border rounded-lg p-1 bg-bg **:[a]:px-3 **:[a]:py-0.5'
        >
            <OverlayArrow className='group'>
                <svg
                    width={12}
                    height={12}
                    viewBox='0 0 12 12'
                    className='block fill-bg stroke-muted group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180'
                >
                    <path d='M0 0 L6 6 L12 0' />
                </svg>
            </OverlayArrow>
            {children}
        </Popover>
    )
}

const SidebarInset = ({ ...props }: React.ComponentProps<'main'>) => {
    return (
        <div className='peer-data-[variant=inset]:bg-primary/5 relative flex w-full flex-1 p-1.5 peer-data-[variant=default]:*:border-0 peer-data-[variant=default]:p-0 peer-data-[variant=float]:peer-data-[side=right]:pr-0 peer-data-[variant=inset]:peer-data-[side=right]:pr-0 peer-data-[variant=float]:peer-data-[side=left]:pl-0 peer-data-[variant=inset]:peer-data-[side=left]:pl-0 flex-col min-h-[calc(100svh-theme(spacing.4))] '>
            <main className='bg-bg h-full overflow-auto rounded-lg border' {...props} />
        </div>
    )
}

const SidebarTrigger = ({ children, ...props }: React.ComponentProps<typeof Button>) => {
    const { toggleSidebar, open, variant, isMobile, side } = useSidebar()
    return (
        !isMobile && (
            <Button
                aria-label='Toggle Sidebar'
                onPress={toggleSidebar}
                className={({ isPressed, isHovered, isFocusVisible }) =>
                    cn(
                        'bg-bg absolute shrink-0 border inline-flex size-8 items-center justify-center rounded-md text-muted-fg outline-hidden',
                        isHovered && 'bg-muted/40',
                        isFocusVisible && 'ring-4 ring-primary/20 border-primary',
                        isPressed && 'bg-muted/50',
                        variant === 'default' ? 'top-2 right-2' : 'top-4 right-4'
                    )
                }
                {...props}
            >
                {children || (
                    <IconPanelBottomClose
                        className={cn(
                            'size-4 transition-transform',
                            side === 'right' && `-rotate-90 ${!open && 'rotate-90'}`,
                            side === 'left' && `rotate-90 ${!open && '-rotate-90'}`
                        )}
                    />
                )}
            </Button>
        )
    )
}

const SidebarRail = ({ className, ...props }: ButtonProps) => {
    const { toggleSidebar, state, side } = useSidebar()
    return (
        <Button
            data-rail
            slot={null}
            aria-label='Toggle Sidebar'
            excludeFromTabOrder
            onPress={toggleSidebar}
            className={composeRenderProps(className, (className, { isHovered, isPressed }) =>
                cn(
                    'fixed h-[calc(100svh-theme(spacing.4))] max-h-full w-4 transition bg-transparent',
                    side === 'left' ? 'right-0' : 'left-0',
                    state === 'collapsed' ? 'cursor-e-resize' : 'cursor-w-resize',
                    (isHovered || isPressed) &&
                        `${side === 'left' ? 'border-r-2' : 'border-l-2'} border-primary`,
                    className
                )
            )}
            {...props}
        />
    )
}

Sidebar.Content = SidebarBody
Sidebar.Footer = SidebarFooter
Sidebar.Header = SidebarHeader
Sidebar.Item = SidebarItem
Sidebar.SubItem = SidebarSubItem
Sidebar.Label = SidebarLabel
Sidebar.SubItemTrigger = SidebarSubItemTrigger
Sidebar.Rail = SidebarRail
Sidebar.Section = SidebarSection
Sidebar.Trigger = SidebarTrigger

export { Sidebar, SidebarInset }
