'use client'

import { IconMenu } from 'hq-icons'
import { LayoutGroup, motion } from 'motion/react'
import {
    type ComponentProps,
    type ComponentPropsWithRef,
    type RefObject,
    createContext,
    use,
    useCallback,
    useId,
    useMemo,
    useState
} from 'react'
import type { LinkProps } from 'react-aria-components'
import { Link, composeRenderProps } from 'react-aria-components'

import { useIsMobile } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from './button'
import { Sheet } from './sheet'

const HEIGHT = '3.5rem'

type NavbarOptions = {
    isSticky?: boolean
    variant?: 'default' | 'float' | 'inset'
}

type NavbarContextProps = {
    open: boolean
    setOpen: (open: boolean) => void
    isCompact: boolean
    toggleNavbar: () => void
} & NavbarOptions

const NavbarContext = createContext<NavbarContextProps | null>(null)

function useNavbar() {
    const context = use(NavbarContext)
    if (!context) {
        throw new Error('useNavbar must be used within a Navbar.')
    }

    return context
}

interface NavbarProps extends ComponentProps<'header'>, NavbarOptions {
    defaultOpen?: boolean
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

const Navbar = ({
    children,
    isOpen: openProp,
    onOpenChange: setOpenProp,
    defaultOpen = false,
    className,
    isSticky = false,
    variant = 'default',
    ...props
}: NavbarProps) => {
    const isCompact = useIsMobile()
    const [_open, _setOpen] = useState(defaultOpen)
    const open = openProp ?? _open

    const setOpen = useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            if (setOpenProp) {
                return setOpenProp?.(typeof value === 'function' ? value(open) : value)
            }

            _setOpen(value)
        },
        [setOpenProp, open]
    )

    const toggleNavbar = useCallback(() => {
        setOpen((open) => !open)
    }, [setOpen])

    const contextValue = useMemo<NavbarContextProps>(
        () => ({
            open,
            setOpen,
            isCompact,
            toggleNavbar,
            variant,
            isSticky
        }),
        [open, setOpen, isCompact, toggleNavbar, variant, isSticky]
    )
    return (
        <NavbarContext value={contextValue}>
            <header
                data-navbar-variant={variant}
                className={cn(
                    `[--navbar-height:${HEIGHT}] group/navbar [--navbar-breadcrumbs-height:0px] has-data-navbar-breadcrumbs:[--navbar-breadcrumbs-height:3rem]`,
                    'relative isolate flex w-full flex-col',
                    variant === 'float' && 'px-2.5 pt-2',
                    variant === 'inset' && 'min-h-dvh bg-bg',
                    className
                )}
                {...props}
            >
                {children}
            </header>
        </NavbarContext>
    )
}

interface NavbarNavProps extends ComponentProps<'div'> {
    variant?: 'navbar' | 'float' | 'inset'
    isSticky?: boolean
    useDefaultResponsive?: boolean
}

const NavbarNav = ({ useDefaultResponsive = true, className, ref, ...props }: NavbarNavProps) => {
    const { isCompact, variant, isSticky, open, setOpen } = useNavbar()

    if (isCompact && useDefaultResponsive) {
        return (
            <Sheet isOpen={open} onOpenChange={setOpen} {...props}>
                <Sheet.Trigger className='sr-only' />
                <Sheet.Content
                    side='left'
                    aria-label='Compact Navbar'
                    data-navbar='compact'
                    isFloating={variant === 'float'}
                >
                    <Sheet.Body className='px-2 md:px-4'>{props.children}</Sheet.Body>
                </Sheet.Content>
            </Sheet>
        )
    }

    return (
        <div
            data-navbar-nav='true'
            ref={ref}
            className={cn(
                'group peer hidden w-full items-center px-4 md:flex',
                'h-(--navbar-height)',
                '[&>div]:mx-auto [&>div]:w-full [&>div]:max-w-7xl [&>div]:items-center md:[&>div]:flex',
                isSticky && 'sticky top-0 z-40 bg-bg/20 backdrop-blur-lg',
                variant === 'float' && 'mx-auto w-full max-w-7xl rounded-lg border bg-bg px-4 text-fg',
                variant === 'default' && 'border-b bg-bg text-fg md:px-6',
                variant === 'inset' &&
                    'mx-auto md:px-6 [&>div]:mx-auto [&>div]:w-full [&>div]:items-center md:[&>div]:flex 2xl:[&>div]:max-w-(--breakpoint-2xl)',
                className
            )}
            {...props}
        >
            <div>{props.children}</div>
        </div>
    )
}

interface NavbarTriggerProps extends ButtonProps {
    ref?: RefObject<HTMLButtonElement>
}
const NavbarTrigger = ({ className, onPress, ref, ...props }: NavbarTriggerProps) => {
    const { toggleNavbar } = useNavbar()
    return (
        <Button
            ref={ref}
            data-navbar-trigger='true'
            variant='ghost'
            aria-label={props['aria-label'] || 'Toggle Navbar'}
            icon
            className={className}
            onPress={(event) => {
                onPress?.(event)
                toggleNavbar()
            }}
            {...props}
        >
            <IconMenu />
            <span className='sr-only'>Toggle Navbar</span>
        </Button>
    )
}

const NavbarSection = ({ className, ...props }: ComponentProps<'div'>) => {
    const { isCompact } = useNavbar()
    const id = useId()
    return (
        <LayoutGroup id={id}>
            <div
                data-navbar-section='true'
                className={cn('flex', isCompact ? 'flex-col gap-y-4' : 'flex-row items-center gap-x-3', className)}
                {...props}
            >
                {props.children}
            </div>
        </LayoutGroup>
    )
}

interface NavbarItemProps extends LinkProps {
    isCurrent?: boolean
}

const NavbarItem = ({ className, isCurrent, ...props }: NavbarItemProps) => {
    const { variant, isCompact } = useNavbar()
    return (
        <Link
            data-navbar-item
            aria-current={isCurrent ? 'page' : undefined}
            className={composeRenderProps(
                className,
                (className, { isFocused, isHovered, isPressed, isFocusVisible, isDisabled }) =>
                    cn(
                        'relative flex cursor-pointer items-center gap-x-2 px-2 text-muted-fg no-underline outline-hidden transition-colors md:text-sm',
                        '**:data-[slot=chevron]:size-4 **:data-[slot=chevron]:transition-transform',
                        '*:data-[slot=icon]:-mx-0.5 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0',
                        isFocused && 'text-fg',
                        isHovered && 'text-fg',
                        isPressed && 'text-fg **:data-[slot=chevron]:rotate-180',
                        isFocusVisible && 'ring-2 ring-primary/20',
                        isDisabled && 'cursor-default opacity-50',
                        isCurrent && 'cursor-default text-fg',
                        className
                    )
            )}
            {...props}
        >
            {(values) => (
                <>
                    {typeof props.children === 'function' ? props.children(values) : props.children}

                    {(isCurrent || values.isCurrent) && !isCompact && variant !== 'float' && (
                        <motion.span
                            layoutId='current-indicator'
                            data-slot='current-indicator'
                            className='absolute inset-x-2 bottom-[calc(var(--navbar-height)*-0.33)] h-0.5 rounded-full bg-fg'
                        />
                    )}
                </>
            )}
        </Link>
    )
}

const NavbarLogo = ({ className, ...props }: LinkProps) => {
    return (
        <Link
            className={composeRenderProps(className, (className) =>
                cn(
                    'relative flex items-center gap-x-2 px-2 py-4 text-fg focus:outline-hidden focus-visible:outline-1 focus-visible:outline-primary md:mr-4 md:px-0 md:py-0',
                    className
                )
            )}
            {...props}
        />
    )
}

const NavbarFlex = ({ className, ref, ...props }: ComponentProps<'div'>) => {
    return <div ref={ref} className={cn('flex items-center gap-2', className)} {...props} />
}

interface NavbarCompactProps extends ComponentProps<'div'> {
    ref?: RefObject<HTMLDivElement>
    variant?: 'float' | 'inset' | 'navbar'
}
const NavbarCompact = ({ className, ref, ...props }: NavbarCompactProps) => {
    const { variant } = useNavbar()
    return (
        <div
            ref={ref}
            className={cn(
                'flex justify-between bg-bg text-fg peer-has-[[data-navbar-variant=float]]:border md:hidden',
                variant === 'float' && 'h-12 rounded-lg border px-3.5',
                variant === 'inset' && 'h-14 border-b px-4',
                variant === 'default' && 'h-14 border-b px-4',
                className
            )}
            {...props}
        />
    )
}

const NavbarBreadcrumbs = ({ className, ref, children, ...props }: ComponentPropsWithRef<'div'>) => {
    const { variant } = useNavbar()
    return (
        <div
            data-navbar-breadcrumbs={true}
            ref={ref}
            className={cn(
                'flex h-(--navbar-breadcrumbs-height) items-center',
                variant === 'default' && 'w-full border-b bg-bg text-fg *:max-w-7xl *:px-4 md:*:px-6',
                variant === 'inset' &&
                    'w-full rounded-lg rounded-b-none border-b px-4 md:mx-auto md:max-w-[calc(100vw-16px)] md:border md:px-6',
                variant === 'float' && 'mx-auto w-full max-w-7xl rounded-lg bg-bg px-2 text-fg md:px-4',
                className
            )}
            {...props}
        >
            <div className='mx-auto w-full'>{children}</div>
        </div>
    )
}

const NavbarInset = ({ className, ref, ...props }: ComponentProps<'div'>) => {
    const { variant } = useNavbar()
    return (
        <div
            ref={ref}
            className={cn(
                'relative flex w-full flex-col overflow-auto',
                variant === 'inset' &&
                    'h-[calc(100vh-var(--navbar-height,0px)-var(--navbar-breadcrumbs-height,0px))] bg-bg pb-2 md:px-2',
                variant === 'float' && 'h-[calc(100vh-var(--navbar-height,0px)-8px)]',
                variant === 'default' && 'h-[calc(100vh-var(--navbar-height,0px))]',
                className
            )}
        >
            <main
                className={cn(
                    'mx-auto flex size-full flex-1 grow flex-col',
                    variant === 'inset' &&
                        'bg-bg shadow-sm md:rounded-lg md:border md:group-has-data-navbar-breadcrumbs/navbar:rounded-t-none md:group-has-data-navbar-breadcrumbs/navbar:border-t-0',
                    variant === 'default' && 'max-w-7xl overflow-auto px-4 md:px-0',
                    variant === 'float' && 'max-w-7xl'
                )}
            >
                {props.children}
            </main>
        </div>
    )
}

Navbar.Nav = NavbarNav
Navbar.Inset = NavbarInset
Navbar.Compact = NavbarCompact
Navbar.Flex = NavbarFlex
Navbar.Trigger = NavbarTrigger
Navbar.Logo = NavbarLogo
Navbar.Item = NavbarItem
Navbar.Breadcrumbs = NavbarBreadcrumbs
Navbar.Section = NavbarSection

export { Navbar, NavbarInset, NavbarBreadcrumbs }
