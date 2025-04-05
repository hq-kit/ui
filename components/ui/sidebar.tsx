'use client'

import React from 'react'

import { IconMenu, IconMinus, IconPanelLeftClose } from 'hq-icons'
import type {
    ButtonProps,
    DisclosureGroupProps,
    DisclosureProps,
    LinkProps,
    LinkRenderProps,
    SeparatorProps as SidebarSeparatorProps
} from 'react-aria-components'
import {
    composeRenderProps,
    Disclosure,
    DisclosureGroup,
    DisclosurePanel,
    Header,
    Heading,
    Link,
    Separator,
    Text,
    Button as Trigger
} from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { cn } from '@/lib/utils'

import { Badge } from './badge'
import { Button } from './button'
import { Sheet } from './sheet'
import { Tooltip } from './tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar:state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
type SidebarContextProps = {
    state: 'expanded' | 'collapsed'
    open: boolean
    setOpen: (open: boolean) => void
    isOpenOnMobile: boolean
    setIsOpenOnMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
    fixed: boolean
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
    isOpen?: boolean
    shortcut?: string
    onOpenChange?: (open: boolean) => void
    fixed?: boolean
}

const SidebarProvider = ({
    defaultOpen = true,
    isOpen: openProp,
    onOpenChange: setOpenProp,
    className,
    children,
    shortcut = 'b',
    fixed = false,
    ref,
    ...props
}: SidebarProviderProps) => {
    const isMobile = useMediaQuery('(max-width: 767px)')
    const [openMobile, setOpenMobile] = React.useState(false)

    const [internalOpenState, setInternalOpenState] = React.useState(defaultOpen)
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
            if (event.key === shortcut && (event.metaKey || event.ctrlKey) && !fixed) {
                event.preventDefault()
                toggleSidebar()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [toggleSidebar, shortcut, fixed])

    const state = open ? 'expanded' : 'collapsed'

    const contextValue = React.useMemo<SidebarContextProps>(
        () => ({
            fixed,
            state,
            open,
            setOpen,
            isMobile,
            isOpenOnMobile: openMobile,
            setIsOpenOnMobile: setOpenMobile,
            toggleSidebar
        }),
        [state, fixed, open, setOpen, isMobile, openMobile, toggleSidebar]
    )

    return (
        <SidebarContext value={contextValue}>
            <div
                className={cn(
                    '@container **:data-[slot=icon]:shrink-0',
                    '[--sidebar-width-dock:3.25rem] [--sidebar-width-mobile:18rem] [--sidebar-width:17rem]',
                    '[--sidebar-border:color-mix(in_oklch,var(--color-bg)_25%,black_6%)]',
                    'dark:[--sidebar-border:color-mix(in_oklch,var(--color-bg)_55%,white_10%)]',
                    '[--sidebar-primary:color-mix(in_oklab,var(--color-bg)_95%,black_5%)]',
                    'dark:[--sidebar-primary:color-mix(in_oklab,var(--color-bg)_90%,white_10%)]',
                    'text-fg flex min-h-svh w-full',
                    'group/sidebar-root has-data-[sidebar-variant=inset]:bg-bg',
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        </SidebarContext>
    )
}

const gap = tv({
    base: [
        'w-(--sidebar-width) group-data-[sidebar-collapsible=hidden]/sidebar-container:w-0',
        'relative h-svh bg-transparent transition-[width] duration-200 ease-linear',
        'group-data-[sidebar-side=right]/sidebar-container:rotate-180'
    ],
    variants: {
        variant: {
            default:
                'group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)',
            fleet: 'group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)',
            float: 'group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+theme(spacing.4))]',
            inset: 'group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+theme(spacing.2))]'
        }
    }
})

const sidebar = tv({
    base: [
        'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear not-has-data-sidebar-footer:pb-2 md:flex',
        'bg-bg min-h-svh',
        '**:data-[slot=disclosure]:border-0 **:data-[slot=disclosure]:px-2.5'
    ],
    variants: {
        side: {
            left: 'left-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:left-[calc(var(--sidebar-width)*-1)]',
            right: 'right-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:right-[calc(var(--sidebar-width)*-1)]'
        },
        variant: {
            float: 'bg-bg p-2 group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var+theme(spacing.4)+2px)]',
            inset: [
                'bg-bg p-2 group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+theme(spacing.2)+2px)]'
            ],
            fleet: [
                'group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)',
                '**:data-sidebar-disclosure:gap-y-0 **:data-sidebar-disclosure:px-0 **:data-sidebar-section:gap-y-0 **:data-sidebar-section:px-0',
                'group-data-[sidebar-side=left]/sidebar-container:border-r group-data-[sidebar-side=right]/sidebar-container:border-l'
            ],
            default: [
                'group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock) group-data-[sidebar-side=left]/sidebar-container:border-(--sidebar-border)',
                'group-data-[sidebar-side=left]/sidebar-container:border-r group-data-[sidebar-side=right]/sidebar-container:border-l'
            ]
        }
    }
})

interface SidebarProps extends React.ComponentProps<'div'> {
    variant?: 'default' | 'float' | 'inset' | 'fleet'
    collapsible?: 'hidden' | 'dock' | 'none'
    side?: 'left' | 'right'
    closeButton?: boolean
}

const Sidebar = ({
    closeButton = true,
    collapsible = 'hidden',
    side = 'left',
    variant = 'default',
    className,
    ...props
}: SidebarProps) => {
    const { isMobile, state, isOpenOnMobile, setIsOpenOnMobile } = useSidebar()

    if (collapsible === 'none' && !isMobile) {
        return (
            <div
                data-sidebar-variant={variant}
                data-sidebar-collapsible='none'
                className={cn(
                    'bg-bg text-fg border-muted flex h-full min-h-screen w-(--sidebar-width) flex-col border-r',
                    className
                )}
                {...props}
            />
        )
    }

    if (isMobile) {
        return (
            <Sheet isOpen={isOpenOnMobile} onOpenChange={setIsOpenOnMobile} {...props}>
                <Sheet.Content
                    closeButton={closeButton}
                    aria-label='Sidebar'
                    data-sidebar-variant='default'
                    isFloating={variant === 'float'}
                    side={side}
                >
                    <Sheet.Body className='px-0 sm:px-0'>{props.children}</Sheet.Body>
                </Sheet.Content>
            </Sheet>
        )
    }

    return (
        <div
            data-sidebar-state={state}
            data-sidebar-collapsible={state === 'collapsed' ? collapsible : ''}
            data-sidebar-variant={variant}
            data-sidebar-side={side}
            className='group/sidebar-container peer text-fg hidden md:block'
            {...props}
        >
            <div aria-hidden='true' className={gap({ variant })} />
            <div
                className={sidebar({
                    side,
                    variant,
                    className
                })}
                {...props}
            >
                <div
                    data-sidebar='default'
                    className={twJoin(
                        'text-fg flex h-full w-full flex-col',
                        'group-data-[sidebar-variant=inset]/sidebar-container:bg-bg',
                        'group-data-[sidebar-variant=float]/sidebar-container:bg-bg group-data-[sidebar-variant=float]/sidebar-container:rounded-lg group-data-[sidebar-variant=float]/sidebar-container:border group-data-[sidebar-variant=float]/sidebar-container:border-(--sidebar-border) group-data-[sidebar-variant=float]/sidebar-container:shadow-xs'
                    )}
                >
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const header = tv({
    base: 'mb-2 flex flex-col **:data-[slot=sidebar-label-mask]:hidden',
    variants: {
        collapsed: {
            false: 'px-4 py-[calc(var(--spacing)*4)]',
            true: 'mt-2 p-5 group-data-[sidebar-variant=float]/sidebar-container:mt-2 md:mx-auto md:size-9 md:items-center md:justify-center md:rounded-lg md:p-0 md:hover:bg-(--sidebar-primary)'
        }
    }
})

const SidebarHeader = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
    const { state } = React.use(SidebarContext)!
    return (
        <div
            ref={ref}
            data-sidebar-header='true'
            className={header({ collapsed: state === 'collapsed', className })}
            {...props}
        />
    )
}

const footer = tv({
    base: [
        'no-scrollbar mt-auto flex flex-col p-2',
        'in-data-[sidebar-variant=fleet]:mt-0 in-data-[sidebar-variant=fleet]:p-0',
        'in-data-[sidebar-variant=fleet]:**:data-[slot=menu-trigger]:rounded-none',
        '**:data-[slot=menu-trigger]:relative **:data-[slot=menu-trigger]:overflow-hidden',
        '**:data-[slot=menu-trigger]:rounded-lg',
        '**:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:cursor-default **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:p-2 **:data-[slot=menu-trigger]:outline-hidden sm:**:data-[slot=menu-trigger]:text-sm',
        '**:data-[slot=menu-trigger]:data-hovered:text-fg **:data-[slot=menu-trigger]:data-hovered:bg-(--sidebar-primary)'
    ],
    variants: {
        collapsed: {
            false: [
                '**:data-avatar:size-8 **:data-avatar:*:size-8 **:data-[slot=menu-trigger]:**:data-avatar:mr-2',
                '**:data-[slot=menu-trigger]:w-full **:data-[slot=menu-trigger]:data-pressed:**:data-[slot=chevron]:rotate-0'
            ],
            true: [
                '**:data-avatar:size-8 **:data-avatar:*:size-8',
                '**:data-[slot=chevron]:hidden **:data-[slot=menu-label]:hidden',
                '**:data-[slot=menu-trigger]:grid **:data-[slot=menu-trigger]:size-10 **:data-[slot=menu-trigger]:place-content-center'
            ]
        }
    }
})

const SidebarFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
    const { state, isMobile } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    return (
        <div data-sidebar-footer='true' className={footer({ collapsed, className })} {...props} />
    )
}

const SidebarContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
    const { state } = useSidebar()
    return (
        <div
            data-sidebar-content='true'
            className={cn(
                'flex max-h-[calc(100svh-9rem)] min-h-0 flex-1 scroll-mb-96 flex-col overflow-x-hidden overflow-y-scroll *:data-sidebar-section:border-l-0',
                state === 'collapsed' && 'no-scrollbar items-center',
                className
            )}
            {...props}
        />
    )
}

const SidebarSectionGroup = ({ className, ...props }: React.ComponentProps<'section'>) => {
    const { state, isMobile } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    return (
        <section
            data-sidebar-section-group='true'
            className={cn(
                'flex w-full flex-col gap-y-6',
                collapsed && 'items-center justify-center',
                className
            )}
            {...props}
        />
    )
}

const SidebarSection = ({
    className,
    ...props
}: React.ComponentProps<'div'> & { title?: string }) => {
    const { state } = useSidebar()
    return (
        <div
            data-sidebar-section='true'
            className={cn(
                'col-span-full flex flex-col gap-y-0.5 px-2 in-data-[sidebar-variant=fleet]:px-0 **:data-sidebar-section:**:gap-y-0 **:data-sidebar-section:pr-0',
                className
            )}
            {...props}
        >
            {state !== 'collapsed' && 'title' in props && (
                <Header className='text-fg/70 ring-sidebar-ring mb-1 flex shrink-0 items-center rounded-lg px-2.5 text-xs font-medium transition-[margin,opa] duration-200 ease-linear outline-none group-data-[sidebar-collapsible=dock]/sidebar-container:-mt-8 group-data-[sidebar-collapsible=dock]/sidebar-container:opacity-0 data-focus-visible:ring-2 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0'>
                    {props.title}
                </Header>
            )}
            <div className='grid grid-cols-[auto_1fr] gap-y-0.5'>{props.children}</div>
        </div>
    )
}

const sidebarItemStyles = tv({
    base: [
        'group text-fg/70 relative col-span-full cursor-pointer overflow-hidden rounded-lg px-[calc(var(--spacing)*2.3)] py-[calc(var(--spacing)*1.3)] outline-hidden sm:text-sm/6',
        '**:data-[slot=menu-trigger]:absolute **:data-[slot=menu-trigger]:right-0 **:data-[slot=menu-trigger]:-mr-1 **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:h-full **:data-[slot=menu-trigger]:w-[calc(var(--sidebar-width)-90%)] **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:justify-end **:data-[slot=menu-trigger]:pr-2.5',
        '**:data-avatar:size-4 **:data-avatar:shrink-0 **:data-avatar:*:size-4 **:data-[slot=icon]:size-4 **:data-[slot=icon]:shrink-0',
        'in-data-[sidebar-variant=fleet]:rounded-none'
    ],
    variants: {
        collapsed: {
            false: 'grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center **:data-avatar:mr-2 **:data-avatar:*:mr-2 **:data-[slot=icon]:mr-2 supports-[grid-template-columns:subgrid]:grid-cols-subgrid',
            true: 'flex size-9 items-center justify-center gap-x-0 p-0 not-has-data-[slot=icon]:hidden **:data-[slot=menu-trigger]:hidden'
        },
        isCurrent: {
            true: 'text-fg data-hovered:text-fg **:data-[slot=icon]:text-fg [&_.text-muted-fg]:text-fg/80 bg-(--sidebar-primary) data-hovered:bg-(--sidebar-primary)/90 **:data-[slot=menu-trigger]:from-(--sidebar-primary)'
        },
        isActive: {
            true: 'text-fg bg-(--sidebar-primary) **:data-[slot=menu-trigger]:flex'
        },
        isDisabled: {
            true: 'cursor-default opacity-50'
        }
    }
})

interface SidebarItemProps extends Omit<React.ComponentProps<typeof Link>, 'children'> {
    isCurrent?: boolean
    tooltip?: React.ReactNode | string
    children?:
        | React.ReactNode
        | ((
              values: LinkRenderProps & { defaultChildren: React.ReactNode; isCollapsed: boolean }
          ) => React.ReactNode)
    badge?: string | number | undefined
}

const SidebarItem = ({
    isCurrent,
    tooltip,
    children,
    badge,
    className,
    ref,
    ...props
}: SidebarItemProps) => {
    const { state, isMobile } = useSidebar()
    const isCollapsed = state === 'collapsed' && !isMobile
    const link = (
        <Link
            ref={ref}
            data-sidebar-item='true'
            aria-current={isCurrent ? 'page' : undefined}
            className={composeRenderProps(className, (className, renderProps) =>
                sidebarItemStyles({
                    ...renderProps,
                    isCurrent,
                    collapsed: isCollapsed,
                    isActive:
                        renderProps.isPressed ||
                        renderProps.isFocusVisible ||
                        renderProps.isHovered,
                    className: className
                })
            )}
            {...props}
        >
            {(values) => (
                <>
                    {typeof children === 'function'
                        ? children({ ...values, isCollapsed })
                        : children}

                    {badge &&
                        (state !== 'collapsed' ? (
                            <Badge
                                shape='square'
                                variant='primary'
                                data-slot='sidebar-badge'
                                className='inset-ring-primary/20 absolute inset-y-1/2 right-1.5 h-5.5 w-auto -translate-y-1/2 text-[10px] inset-ring-1 transition-colors group-data-current:inset-ring-transparent'
                            >
                                {badge}
                            </Badge>
                        ) : (
                            <div
                                aria-hidden
                                className='bg-primary absolute top-1 right-1 size-1.5 rounded-full'
                            />
                        ))}
                </>
            )}
        </Link>
    )

    return isCollapsed && tooltip ? (
        <Tooltip delay={0}>
            {link}
            <Tooltip.Content
                isInverse
                className='**:data-[slot=icon]:hidden **:data-[slot=sidebar-label-mask]:hidden'
                showArrow={false}
                placement='right'
            >
                {tooltip}
            </Tooltip.Content>
        </Tooltip>
    ) : (
        link
    )
}

const sidebarLink = tv({
    base: 'col-span-full items-center focus:outline-hidden',
    variants: {
        collapsed: {
            false: 'grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid',
            true: 'absolute inset-0 flex size-full justify-center'
        }
    }
})

interface SidebarLinkProps extends LinkProps {
    ref?: React.Ref<HTMLAnchorElement>
}
const SidebarLink = ({ className, ref, ...props }: SidebarLinkProps) => {
    const { state, isMobile } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    return (
        <Link
            ref={ref}
            className={composeRenderProps(className, (className, renderProps) =>
                sidebarLink({
                    ...renderProps,
                    collapsed,
                    className
                })
            )}
            {...props}
        />
    )
}

const SidebarInset = ({ className, ref, ...props }: React.ComponentProps<'main'>) => {
    return (
        <main
            ref={ref}
            className={cn(
                'relative flex min-h-svh w-full flex-1 flex-col peer-data-[sidebar-variant=inset]:border peer-data-[sidebar-variant=inset]:border-(--sidebar-border)',
                'bg-bg dark:peer-data-[sidebar-variant=inset]:bg-bg peer-data-[sidebar-variant=inset]:overflow-hidden',
                'peer-data-[sidebar-variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[sidebar-variant=inset]:m-2 md:peer-data-[sidebar-variant=inset]:ml-0 md:peer-data-[sidebar-variant=inset]:rounded-lg md:peer-data-[sidebar-variant=inset]:shadow-xs md:peer-data-[sidebar-state=collapsed]:peer-data-[sidebar-variant=inset]:ml-2',
                className
            )}
            {...props}
        />
    )
}

type SidebarDisclosureGroupProps = DisclosureGroupProps
const SidebarDisclosureGroup = ({
    allowsMultipleExpanded = true,
    className,
    ...props
}: SidebarDisclosureGroupProps) => {
    return (
        <DisclosureGroup
            data-sidebar-disclosure-group='true'
            allowsMultipleExpanded={allowsMultipleExpanded}
            className={composeRenderProps(className, (className) =>
                cn('col-span-full flex flex-col gap-y-6', className)
            )}
            {...props}
        />
    )
}

interface SidebarDisclosureProps extends DisclosureProps {
    ref?: React.Ref<HTMLDivElement>
}
const SidebarDisclosure = ({ className, ref, ...props }: SidebarDisclosureProps) => {
    const { state } = useSidebar()
    return (
        <Disclosure
            ref={ref}
            data-sidebar-disclosure='true'
            className={composeRenderProps(className, (className) =>
                cn(
                    'px-2.5 in-data-[sidebar-variant=fleet]:px-0',
                    state !== 'collapsed' && 'col-span-full',
                    className
                )
            )}
            {...props}
        />
    )
}

const sidebarDisclosureTrigger = tv({
    base: [
        'group text-fg/70 relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-[calc(var(--spacing)*2.3)] py-[calc(var(--spacing)*1.3)] outline-hidden aria-expanded:**:data-[slot=chevron]:rotate-0 sm:text-sm/6',
        'in-data-[sidebar-variant=fleet]:rounded-none in-data-[sidebar-variant=fleet]:py-2 in-data-[sidebar-variant=fleet]:**:data-[slot=chevron]:hidden'
    ],
    variants: {
        collapsed: {
            false: 'col-span-full **:data-[slot=icon]:mr-2',
            true: 'size-9 justify-center p-0'
        },
        isActive: {
            true: 'text-fg bg-(--sidebar-primary)'
        },
        isDisabled: {
            true: 'cursor-default opacity-50'
        }
    }
})

interface SidebarDisclosureTriggerProps extends ButtonProps {
    ref?: React.Ref<HTMLButtonElement>
}
const SidebarDisclosureTrigger = ({ className, ref, ...props }: SidebarDisclosureTriggerProps) => {
    const { state, isMobile } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    return (
        <Heading level={3}>
            <Trigger
                ref={ref}
                slot='trigger'
                className={composeRenderProps(className, (className, renderProps) =>
                    sidebarDisclosureTrigger({
                        ...renderProps,
                        collapsed,
                        isActive:
                            renderProps.isPressed ||
                            renderProps.isFocusVisible ||
                            renderProps.isHovered,
                        className
                    })
                )}
                {...props}
            >
                {(values) => (
                    <>
                        {typeof props.children === 'function'
                            ? props.children(values)
                            : props.children}
                        {state !== 'collapsed' && <Indicator slot='chevron' className='ml-auto' />}
                    </>
                )}
            </Trigger>
        </Heading>
    )
}

const SidebarDisclosurePanel = (props: React.ComponentProps<typeof DisclosurePanel>) => {
    return (
        <DisclosurePanel
            data-sidebar-disclosure-panel='true'
            className='col-span-full grid grid-cols-[auto_1fr] gap-y-0.5'
            {...props}
        />
    )
}

const SidebarSeparator = ({ className, ...props }: SidebarSeparatorProps) => {
    return (
        <Separator
            orientation='horizontal'
            className={cn(
                'bg-border col-span-full mx-auto my-2.5 h-px w-[calc(var(--sidebar-width)-theme(spacing.6))]',
                className
            )}
            {...props}
        />
    )
}

const SidebarTrigger = ({ onPress, children, ...props }: React.ComponentProps<typeof Button>) => {
    const { toggleSidebar, open, fixed, isMobile } = useSidebar()
    return (
        <>
            <Button
                aria-label={props['aria-label'] || 'Toggle Sidebar'}
                data-sidebar-trigger='true'
                variant={props.variant || 'ghost'}
                size={props.size || 'icon'}
                onPress={(event) => {
                    onPress?.(event)
                    toggleSidebar()
                }}
                className={cn('-ml-2', props.className)}
                style={{ display: fixed && !isMobile ? 'none' : 'inline-flex' }}
                {...props}
            >
                {children || (
                    <>
                        <IconPanelLeftClose
                            className={cn(
                                'hidden size-4 transition-transform md:inline',
                                !open && 'rotate-180'
                            )}
                        />
                        <IconMenu className='inline md:hidden' />
                        <span className='sr-only'>Toggle Sidebar</span>
                    </>
                )}
            </Button>
        </>
    )
}

const SidebarRail = ({ className, ref, ...props }: React.ComponentProps<'button'>) => {
    const { toggleSidebar } = useSidebar()

    return (
        <button
            ref={ref}
            data-sidebar='rail'
            aria-label='Toggle Sidebar'
            title='Toggle Sidebar'
            tabIndex={-1}
            onClick={toggleSidebar}
            className={cn(
                'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 outline-hidden transition-all ease-linear group-data-[sidebar-side=left]/sidebar-container:-right-4 group-data-[sidebar-side=right]/sidebar-container:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] data-hovered:after:bg-transparent sm:flex',
                'in-data-[sidebar-side=left]:cursor-w-resize in-data-[sidebar-side=right]:cursor-e-resize',
                '[[data-sidebar-side=left][data-sidebar-state=collapsed]_&]:cursor-e-resize [[data-sidebar-side=right][data-sidebar-state=collapsed]_&]:cursor-w-resize',
                'group-data-[sidebar-collapsible=hidden]/sidebar-container:hover:bg-muted group-data-[sidebar-collapsible=hidden]/sidebar-container:translate-x-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:after:left-full',
                '[[data-sidebar-side=left][data-sidebar-collapsible=hidden]_&]:-right-2 [[data-sidebar-side=right][data-sidebar-collapsible=hidden]_&]:-left-2',
                className
            )}
            {...props}
        />
    )
}

type SidebarLabelProps = React.ComponentProps<typeof Text>

const SidebarLabel = ({ className, ref, ...props }: SidebarLabelProps) => {
    const { state, isMobile } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    if (!collapsed) {
        return (
            <Text
                ref={ref}
                slot='label'
                className={cn('col-start-2 overflow-hidden whitespace-nowrap', className)}
                {...props}
            >
                {props.children}
            </Text>
        )
    }
    return null
}

const nav = tv({
    base: [
        'text-navbar-fg isolate flex h-[3.2rem] items-center justify-between gap-x-2 px-4 sm:justify-start md:w-full',
        'group-has-data-[sidebar-variant=default]/sidebar-root:bg-bg group-has-data-[sidebar-variant=default]/sidebar-root:border-b group-has-data-[sidebar-variant=fleet]/sidebar-root:border-b'
    ],
    variants: {
        isSticky: {
            true: 'static top-0 z-40 group-has-data-[sidebar-variant=default]/sidebar-root:sticky'
        }
    }
})

interface SidebarNavProps extends React.ComponentProps<'nav'> {
    isSticky?: boolean
}

const SidebarNav = ({ isSticky = false, className, ...props }: SidebarNavProps) => {
    return <nav data-slot='sidebar-nav' {...props} className={nav({ isSticky, className })} />
}

const Indicator = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        data-slot='chevron'
        className={cn(
            className,
            'relative inline-flex size-5 -rotate-90 items-center justify-center transition-transform duration-300'
        )}
        {...props}
    >
        <IconMinus data-slot='indicator-passive' className='absolute size-3.5' />
        <IconMinus
            data-slot='chevron'
            className='absolute size-3.5 -rotate-90 transition-transform duration-300'
        />
    </div>
)

Sidebar.Content = SidebarContent
Sidebar.Disclosure = SidebarDisclosure
Sidebar.DisclosureGroup = SidebarDisclosureGroup
Sidebar.DisclosurePanel = SidebarDisclosurePanel
Sidebar.DisclosureTrigger = SidebarDisclosureTrigger
Sidebar.Footer = SidebarFooter
Sidebar.Header = SidebarHeader
Sidebar.Item = SidebarItem
Sidebar.Label = SidebarLabel
Sidebar.Link = SidebarLink
Sidebar.Nav = SidebarNav
Sidebar.Rail = SidebarRail
Sidebar.Section = SidebarSection
Sidebar.SectionGroup = SidebarSectionGroup
Sidebar.Separator = SidebarSeparator
Sidebar.Trigger = SidebarTrigger

export type {
    SidebarDisclosureGroupProps,
    SidebarDisclosureProps,
    SidebarDisclosureTriggerProps,
    SidebarItemProps,
    SidebarLabelProps,
    SidebarLinkProps,
    SidebarNavProps,
    SidebarProps,
    SidebarProviderProps,
    SidebarSeparatorProps
}

export { Sidebar, SidebarInset, SidebarProvider, useSidebar }
