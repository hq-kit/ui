'use client'

import { createContext, use, useCallback, useId, useMemo, useState } from 'react'

import { IconMenu } from 'hq-icons'
import { LayoutGroup, motion } from 'motion/react'
import type { LinkProps } from 'react-aria-components'
import { Link } from 'react-aria-components'
import { type VariantProps, tv } from 'tailwind-variants'

import { Button, type ButtonProps } from './button'
import { Sheet } from './sheet'
import { cn, cr, ctr, useMediaQuery } from './utils'

type NavbarOptions = {
    side?: 'left' | 'right'
    isSticky?: boolean
    variant?: 'navbar' | 'float' | 'inset'
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

interface NavbarProps extends React.ComponentProps<'header'>, NavbarOptions {
    defaultOpen?: boolean
    isOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

const navbarStyles = tv({
    base: 'relative isolate flex w-full flex-col',
    variants: {
        variant: {
            float: 'px-2.5 pt-2',
            navbar: '',
            inset: 'bg-bg min-h-svh'
        }
    }
})

const Navbar = ({
    children,
    isOpen: openProp,
    onOpenChange: setOpenProp,
    defaultOpen = false,
    className,
    side = 'left',
    isSticky = false,
    variant = 'navbar',
    ...props
}: NavbarProps) => {
    const isCompact = useMediaQuery('(max-width: 768px)')
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
            isSticky,
            side
        }),
        [open, setOpen, isCompact, toggleNavbar, variant, isSticky, side]
    )
    return (
        <NavbarContext value={contextValue}>
            <header
                data-navbar-variant={variant}
                className={navbarStyles({ variant, className })}
                {...props}
            >
                {children}
            </header>
        </NavbarContext>
    )
}

const navStyles = tv({
    base: [
        'group peer hidden h-(--navbar-height) w-full items-center px-4 [--navbar-height:3.5rem] md:flex',
        '[&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[1680px] [&>div]:items-center md:[&>div]:flex'
    ],
    variants: {
        isSticky: {
            true: 'sticky top-0 z-40'
        },
        variant: {
            float: 'bg-bg text-fg mx-auto w-full max-w-7xl rounded-xl border md:px-4 2xl:max-w-(--breakpoint-2xl)',
            navbar: 'bg-bg text-fg border-b md:px-6',
            inset: [
                'mx-auto md:px-6',
                '[&>div]:mx-auto [&>div]:w-full [&>div]:items-center md:[&>div]:flex 2xl:[&>div]:max-w-(--breakpoint-2xl)'
            ]
        }
    }
})

interface NavbarNavProps extends React.ComponentProps<'div'> {
    variant?: 'navbar' | 'float' | 'inset'
    isSticky?: boolean
    side?: 'left' | 'right'
    useDefaultResponsive?: boolean
}

const NavbarNav = ({ useDefaultResponsive = true, className, ref, ...props }: NavbarNavProps) => {
    const { isCompact, side, variant, isSticky, open, setOpen } = useNavbar()

    if (isCompact && useDefaultResponsive) {
        return (
            <Sheet isOpen={open} onOpenChange={setOpen} {...props}>
                <Sheet.Trigger className='sr-only' />
                <Sheet.Content
                    side={side}
                    aria-label='Compact Navbar'
                    data-navbar='compact'
                    classNames={{
                        content: 'text-fg [&>button]:hidden'
                    }}
                    isFloat={variant === 'float'}
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
            className={navStyles({ isSticky, variant, className })}
            {...props}
        >
            <div>{props.children}</div>
        </div>
    )
}

interface NavbarTriggerProps extends ButtonProps {
    ref?: React.RefObject<HTMLButtonElement>
}
const NavbarTrigger = ({ className, onPress, ref, ...props }: NavbarTriggerProps) => {
    const { toggleNavbar } = useNavbar()
    return (
        <Button
            ref={ref}
            data-navbar-trigger='true'
            variant='ghost'
            aria-label={props['aria-label'] || 'Toggle Navbar'}
            size='icon'
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

const NavbarSection = ({ className, ...props }: React.ComponentProps<'div'>) => {
    const { isCompact } = useNavbar()
    const id = useId()
    return (
        <LayoutGroup id={id}>
            <div
                data-navbar-section='true'
                className={cn(
                    'flex',
                    isCompact ? 'flex-col gap-y-4' : 'flex-row items-center gap-x-3',
                    className
                )}
                {...props}
            >
                {props.children}
            </div>
        </LayoutGroup>
    )
}

const navItemStyles = tv({
    base: [
        'text-muted-fg relative flex cursor-pointer items-center gap-x-2 px-2 no-underline outline-hidden transition-colors *:data-[slot=icon]:-mx-0.5 md:text-sm',
        'data-focused:text-fg data-hovered:text-fg data-pressed:text-fg data-focus-visible:outline-primary data-focus-visible:outline-1',
        '**:data-[slot=chevron]:size-4 **:data-[slot=chevron]:transition-transform',
        'data-pressed:**:data-[slot=chevron]:rotate-180 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0',
        'data-disabled:cursor-default data-disabled:opacity-50'
    ],
    variants: {
        isCurrent: {
            true: 'text-fg cursor-default'
        }
    }
})

interface NavbarItemProps extends LinkProps {
    isCurrent?: boolean
}

const NavbarItem = ({ className, isCurrent, ...props }: NavbarItemProps) => {
    const { variant, isCompact } = useNavbar()
    return (
        <Link
            data-navbar-item='true'
            aria-current={isCurrent ? 'page' : undefined}
            className={cr(className, (className, ...renderProps) =>
                navItemStyles({ ...renderProps, isCurrent, className })
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
                            className='bg-fg absolute inset-x-2 bottom-[calc(var(--navbar-height)*-0.33)] h-0.5 rounded-full'
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
            className={ctr(
                className,
                'text-fg data-focus-visible:outline-primary relative flex items-center gap-x-2 px-2 py-4 data-focus-visible:outline-1 data-focused:outline-hidden md:mr-4 md:px-0 md:py-0'
            )}
            {...props}
        />
    )
}

const NavbarFlex = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
    return (
        <div ref={ref} className={cn('flex items-center gap-2 md:gap-3', className)} {...props} />
    )
}

const compactStyles = tv({
    base: 'bg-bg text-fg flex justify-between peer-has-[[data-navbar-variant=float]]:border md:hidden',
    variants: {
        variant: {
            float: 'h-12 rounded-lg border px-3.5',
            inset: 'h-14 border-b px-4',
            navbar: 'h-14 border-b px-4'
        }
    }
})

interface NavbarCompactProps
    extends React.ComponentProps<'div'>,
        VariantProps<typeof compactStyles> {
    ref?: React.RefObject<HTMLDivElement>
}
const NavbarCompact = ({ className, ref, ...props }: NavbarCompactProps) => {
    const { variant } = useNavbar()
    return <div ref={ref} className={compactStyles({ variant, className })} {...props} />
}

const insetStyles = tv({
    base: 'grow',
    variants: {
        variant: {
            float: '',
            inset: 'bg-bg md:ring-fg/15 md:dark:ring-border md:rounded-lg md:ring-1 md:shadow-xs',
            navbar: ''
        }
    }
})

const NavbarInset = ({ className, ref, ...props }: React.ComponentProps<'div'>) => {
    const { variant } = useNavbar()
    return (
        <main
            ref={ref}
            data-navbar-variant={variant}
            className={cn(
                'flex flex-1 flex-col',
                variant === 'inset' && 'bg-bg pb-2 md:px-2',
                className
            )}
        >
            <div className={insetStyles({ variant, className })}>{props.children}</div>
        </main>
    )
}

Navbar.Nav = NavbarNav
Navbar.Inset = NavbarInset
Navbar.Compact = NavbarCompact
Navbar.Flex = NavbarFlex
Navbar.Trigger = NavbarTrigger
Navbar.Logo = NavbarLogo
Navbar.Item = NavbarItem
Navbar.Section = NavbarSection

export { Navbar }
export type { NavbarCompactProps, NavbarItemProps, NavbarNavProps, NavbarProps, NavbarTriggerProps }
