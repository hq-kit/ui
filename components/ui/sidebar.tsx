'use client'

import type {
    ButtonProps,
    DisclosureGroupProps,
    DisclosurePanelProps,
    DisclosureProps,
    LinkProps,
    TextProps
} from 'react-aria-components'
import { IconChevronRight, IconMenu } from '@tabler/icons-react'
import {
    type ComponentProps,
    type ComponentPropsWithRef,
    type CSSProperties,
    createContext,
    type HTMLAttributes,
    type ReactNode,
    use,
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react'
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
import { useIsMobile } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { Sheet } from './sheet'
import { Tooltip } from './tooltip'

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
    isMobile: boolean
    toggleSidebar: () => void
    variant: 'default' | 'float' | 'inset'
    collapsible: 'dock' | 'hidden' | 'none'
    isInverse?: boolean
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

const useSidebar = () => {
    const context = use(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within a Sidebar.')
    }
    return context
}

interface SidebarProviderProps extends ComponentProps<'div'> {
    defaultOpen?: boolean
    shortcut?: string
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
    isMobileOpen?: boolean
    onMobileOpenChange?: (isMobileOpen: boolean) => void
    variant?: 'default' | 'float' | 'inset'
    collapsible?: 'dock' | 'hidden' | 'none'
    isInverse?: boolean
}

const Sidebar = ({
    defaultOpen = true,
    isOpen: openProp,
    onOpenChange: setOpenProp,
    isMobileOpen,
    onMobileOpenChange,
    className,
    children,
    shortcut = SIDEBAR_KEYBOARD_SHORTCUT,
    variant = 'default',
    collapsible = 'hidden',
    isInverse = false,
    ...props
}: SidebarProviderProps) => {
    const isMobile = useIsMobile()
    const [internalOpenState, setInternalOpenState] = useState<boolean>(defaultOpen)

    const open = openProp ?? internalOpenState
    const setOpen = useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === 'function' ? value(open) : value
            if (setOpenProp) {
                setOpenProp(openState)
            } else {
                setInternalOpenState(openState)
            }
            cookieStore.set({
                name: SIDEBAR_COOKIE_NAME,
                value: String(openState),
                expires: SIDEBAR_COOKIE_MAX_AGE,
                path: '/'
            })
        },
        [setOpenProp, open]
    )

    const toggleSidebar = useCallback(() => {
        return isMobile ? onMobileOpenChange?.(!isMobileOpen) : setOpen((open) => !open)
    }, [isMobile, setOpen, isMobileOpen, onMobileOpenChange])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === shortcut && collapsible !== 'none' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault()
                toggleSidebar()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [toggleSidebar, shortcut, collapsible])

    const state = open ? 'expanded' : 'collapsed'

    const contextValue = useMemo<SidebarContextProps>(
        () => ({
            state,
            open,
            setOpen,
            isMobile,
            isMobileOpen,
            onMobileOpenChange,
            toggleSidebar,
            variant,
            collapsible
        }),
        [state, open, setOpen, isMobile, isMobileOpen, onMobileOpenChange, toggleSidebar, variant, collapsible]
    )

    const collapsedHidden = state === 'collapsed' && collapsible === 'hidden'
    const collapsedDock = state === 'collapsed' && collapsible === 'dock' && variant === 'default'
    const collapsedFloatDock = state === 'collapsed' && variant === 'float' && collapsible === 'dock'
    const collapsedInsetDock = state === 'collapsed' && variant === 'inset' && collapsible === 'dock'

    return (
        <SidebarContext value={contextValue}>
            {collapsible === 'none' && !isMobile ? (
                <div
                    className={cn(
                        'flex h-full min-h-screen flex-col border-r bg-sidebar text-sidebar-foreground',
                        isInverse && 'dark',
                        className
                    )}
                    style={{ width: WIDTH }}
                >
                    {children}
                </div>
            ) : isMobile ? (
                <Sheet isOpen={isMobileOpen} onOpenChange={onMobileOpenChange} {...props}>
                    <Sheet.Trigger className='absolute top-2 left-2.5 z-50 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-sidebar pressed:bg-accent/80 text-muted-foreground outline-hidden hover:bg-accent focus-visible:border-sidebar-ring focus-visible:ring-4 focus-visible:ring-sidebar-ring/50'>
                        <IconMenu />
                    </Sheet.Trigger>
                    <Sheet.Content aria-label='Sidebar' className={isInverse ? 'dark' : ''} side='left'>
                        {children}
                    </Sheet.Content>
                </Sheet>
            ) : (
                <div
                    className={cn(
                        'peer z-20 hidden bg-sidebar text-sidebar-foreground [--visual-viewport-vertical-padding:32px] md:block **:[svg]:shrink-0',
                        isInverse && 'dark **:dark'
                    )}
                    data-open={open}
                    data-variant={variant}
                >
                    <div
                        className={cn(
                            'sticky top-0 left-0 hidden backdrop-blur transition-[left,right,width] duration-200 ease-linear md:flex',
                            variant === 'float' && 'p-2',
                            variant === 'inset' && 'bg-sidebar p-2',
                            variant === 'default' && !collapsedHidden && 'border-r',
                            collapsedHidden && 'p-0'
                        )}
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
                    >
                        <div
                            className={cn(
                                'flex size-full min-h-svh flex-col text-sidebar-foreground',
                                variant === 'inset' && 'min-h-[calc(100vh-1rem)]',
                                variant === 'float' &&
                                    'min-h-[calc(100vh-1rem)] rounded-lg border border-sidebar-border bg-sidebar',
                                className
                            )}
                            data-sidebar='default'
                        >
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </SidebarContext>
    )
}

const SidebarHeader = ({ className, ...props }: ComponentProps<'div'>) => {
    const { state, variant, collapsible } = useSidebar()
    const collapsed = state === 'collapsed'
    return (
        <div
            className={cn(
                'flex items-center gap-x-3 p-3 font-semibold *:[svg]:size-5',
                collapsed && variant === 'float' && 'mt-1',
                collapsed && 'mt-0.5 justify-center *:[[slot=label]]:hidden',
                collapsed && collapsible === 'hidden' && 'hidden',
                className
            )}
            data-sidebar-header='true'
            {...props}
        />
    )
}

const SidebarFooter = ({ className, ...props }: ComponentProps<'div'>) => {
    const { state, isMobile, collapsible } = useSidebar()
    const collapsed = state === 'collapsed' && !isMobile
    const hidden = collapsed && collapsible === 'hidden'
    return (
        <div
            className={cn(
                'mt-auto flex flex-col overflow-hidden p-2',
                '**:data-avatar:size-8 **:data-avatar:shrink-0',
                collapsed && '**:data-user:hidden **:[button]:p-0 **:[svg]:hidden',
                hidden && 'hidden',
                className
            )}
            data-sidebar-footer='true'
            {...props}
        />
    )
}

const SidebarBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col space-y-4 overflow-y-auto overflow-x-hidden py-2 will-change-scroll',
            className
        )}
        slot='body'
        {...props}
    />
)

const SidebarSection = ({ className, ...props }: DisclosureGroupProps & { title?: string }) => {
    const { state } = useSidebar()
    return (
        <section className={cn('col-span-full flex flex-col gap-y-1 px-2', className)} data-section={true}>
            {state !== 'collapsed' && 'title' in props && (
                <Header className='flex shrink-0 items-center rounded-lg px-2 font-medium text-sidebar-accent-foreground text-xs outline-hidden transition-[margin,opa] duration-200 ease-linear'>
                    {props.title}
                </Header>
            )}
            <DisclosureGroup
                {...props}
                allowsMultipleExpanded
                className='group grid grid-cols-[auto_1fr_auto] gap-y-0.5'
                data-section
            >
                {props.children}
            </DisclosureGroup>
        </section>
    )
}

interface SidebarItemProps
    extends Omit<DisclosureProps, 'onClick'>,
        Pick<LinkProps, 'href' | 'routerOptions' | 'onPress'> {
    isCurrent?: boolean
    tooltip?: ReactNode | string
    badge?: string | number | undefined
    style?: CSSProperties
}

const SidebarItem = ({ className, isCurrent, ...props }: SidebarItemProps) => {
    const { state, collapsible } = useSidebar()
    const collapsedDock = state === 'collapsed' && collapsible === 'dock'

    const renderMenuWithHref = (
        <Link
            className={cn(
                'relative col-span-full cursor-pointer items-center rounded-lg text-sm outline-hidden',
                'focus-visible:ring-2 focus-visible:ring-sidebar-ring/50 focus-visible:ring-offset-2',
                'disabled:cursor-default disabled:opacity-50',
                collapsedDock ? 'flex size-8 justify-center gap-2 p-0' : 'grid grid-cols-subgrid gap-x-3 px-2.5 py-2',
                state === 'collapsed' && 'group-data-section:*:[[slot=label]]:hidden',
                isCurrent
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'pressed:bg-sidebar-accent/80 pressed:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                className
            )}
            {...props}
        >
            {props.children as ReactNode}
        </Link>
    )

    return 'href' in props && collapsedDock ? (
        <Tooltip delay={100}>
            {renderMenuWithHref}
            <Tooltip.Content className='flex items-center gap-2' isInverse placement='right top'>
                {props.children as ReactNode}
            </Tooltip.Content>
        </Tooltip>
    ) : 'href' in props && !collapsedDock ? (
        renderMenuWithHref
    ) : state === 'expanded' ? (
        <Disclosure
            className={composeRenderProps(className, (className) =>
                cn(
                    'relative col-span-full grid grid-cols-subgrid items-center gap-x-3 gap-y-0.5 rounded-lg text-sm outline-hidden disabled:opacity-50 expanded:*:[button]:data-[slot=indicator]:rotate-90',
                    className
                )
            )}
            isExpanded
            {...props}
        />
    ) : (
        <DialogTrigger>{props.children as ReactNode}</DialogTrigger>
    )
}

const SidebarLabel = ({ className, ...props }: TextProps) => {
    return <Text className={cn('col-start-2 line-clamp-1 text-left', className)} slot='label' {...props} />
}

const SidebarSubItemTrigger = ({ children, className, ...props }: ButtonProps) => {
    const { state, collapsible } = useSidebar()
    const collapsedDock = state === 'collapsed' && collapsible === 'dock'
    return (
        <Button
            slot='trigger'
            {...props}
            className={cn(
                'col-span-full cursor-pointer items-center rounded-lg outline-hidden',
                'pressed:bg-accent/80 pressed:text-sidebar-accent-foreground hover:bg-accent/90 hover:text-sidebar-accent-foreground',
                collapsedDock ? 'flex size-8 justify-center p-0' : 'grid grid-cols-subgrid px-2.5 py-2 text-left',
                'focus-visible:ring-2 focus-visible:ring-sidebar-ring/50 focus-visible:ring-offset-2',
                'aria-expanded:*:data-[slot=indicator]:rotate-90',
                state === 'collapsed' && '*:[[slot=label]]:hidden',
                className
            )}
        >
            {(values) => (
                <>
                    {typeof children === 'function' ? children(values) : children}
                    {!collapsedDock && (
                        <IconChevronRight
                            className={cn('ml-auto size-3.5 text-inherit transition-transform')}
                            data-slot='indicator'
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
        <DisclosurePanel className={cn('col-span-full grid grid-cols-subgrid gap-y-0.5', className)} {...props}>
            {children}
        </DisclosurePanel>
    ) : (
        <Popover
            className='group flex flex-col rounded-lg border bg-sidebar p-1 **:[[slot=label]]:hidden'
            placement='right top'
        >
            <OverlayArrow className='group'>
                <svg
                    className='group-placement-left:-rotate-90 block fill-sidebar stroke-sidebar-border group-placement-bottom:rotate-180 group-placement-right:rotate-90'
                    height={12}
                    viewBox='0 0 12 12'
                    width={12}
                >
                    <path d='M0 0 L6 6 L12 0' />
                </svg>
            </OverlayArrow>
            {children}
        </Popover>
    )
}

const SidebarTrigger = ({ children, ...props }: ComponentProps<typeof Button>) => {
    const { toggleSidebar, variant, collapsible, isMobile, open } = useSidebar()
    return (
        !isMobile &&
        collapsible !== 'none' && (
            <Button
                aria-label='Toggle Sidebar'
                className={cn(
                    'absolute z-50 inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground outline-hidden transition-transform',
                    'hover:bg-accent hover:text-accent-foreground',
                    'focus-visible:ring-4 focus-visible:ring-sidebar-ring/50',
                    'pressed:bg-accent/80 pressed:text-sidebar-accent-foreground',
                    variant === 'default' ? 'top-2 right-2' : 'top-4 right-4',
                    open ? 'translate-x-0' : `${variant === 'default' ? 'translate-x-12' : 'translate-x-16'}`
                )}
                onPress={toggleSidebar}
                {...props}
            >
                {children || <IconMenu className='size-4' />}
            </Button>
        )
    )
}

const SidebarRail = ({ className, ...props }: ButtonProps) => {
    const { toggleSidebar, state, isMobile } = useSidebar()
    return (
        !isMobile && (
            <Button
                aria-label='Toggle Sidebar'
                className={composeRenderProps(className, (className) =>
                    cn(
                        'fixed inset-y-0 max-h-full w-4 bg-transparent transition',
                        state === 'collapsed' ? '-right-2' : 'right-0',
                        state === 'collapsed' ? 'cursor-e-resize' : 'cursor-w-resize',
                        'pressed:border-sidebar-primary pressed:border-r-2 hover:border-sidebar-primary hover:border-r-2',
                        className
                    )
                )}
                data-rail
                excludeFromTabOrder
                onPress={toggleSidebar}
                slot={null}
                {...props}
            />
        )
    )
}

const SidebarInset = ({ ...props }: ComponentProps<'main'>) => {
    return (
        <div
            className={cn(
                'relative flex h-dvh w-full flex-1 flex-col peer-data-[variant=inset]:bg-sidebar md:p-2',
                'peer-data-[variant=default]:p-0 peer-data-[variant=default]:*:border-0',
                'peer-data-[variant=float]:peer-data-[open=true]:pl-0',
                'peer-data-[variant=inset]:peer-data-[open=true]:pl-0',
                'peer-data-[open=false]:**:[[slot=nav]]:pl-12'
            )}
        >
            <main
                className='relative flex h-full max-h-full flex-1 flex-col overflow-auto rounded-lg bg-background md:border'
                {...props}
            />
        </div>
    )
}

const SidebarNav = ({ className, ...props }: ComponentPropsWithRef<'nav'>) => {
    return (
        <nav
            className={cn(
                'isolate flex min-h-12 items-center justify-between gap-x-2 rounded-t-lg border-b bg-sidebar/60 px-4 text-sidebar-foreground backdrop-blur-lg md:w-full md:justify-start',
                'sticky top-0 z-10'
            )}
            slot='nav'
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

export { Sidebar, SidebarInset, SidebarNav }
