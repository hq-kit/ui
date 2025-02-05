'use client'

import type {
    DialogTriggerProps,
    ModalOverlayProps,
    PopoverProps as PopoverPrimitiveProps
} from 'react-aria-components'
import {
    type DialogProps,
    DialogTrigger,
    Modal,
    ModalOverlay,
    OverlayArrow,
    PopoverContext,
    Popover as PopoverPrimitive,
    useSlottedContext
} from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import type {
    DialogBodyProps,
    DialogFooterProps,
    DialogHeaderProps,
    DialogTitleProps
} from './dialog'
import { Dialog } from './dialog'
import { cn, cr, useMediaQuery } from './utils'

type PopoverProps = DialogTriggerProps
const Popover = (props: PopoverProps) => {
    return <DialogTrigger {...props} />
}

const PopoverTitle = ({ level = 2, className, ...props }: DialogTitleProps) => (
    <Dialog.Title
        className={twMerge('sm:leading-none', level === 2 && 'sm:text-lg', className)}
        {...props}
    />
)

const PopoverHeader = ({ className, ...props }: DialogHeaderProps) => (
    <Dialog.Header className={twMerge('sm:p-4', className)} {...props} />
)

const PopoverFooter = ({ className, ...props }: DialogFooterProps) => (
    <Dialog.Footer className={cn('sm:p-4', className)} {...props} />
)

const PopoverBody = ({ className, ref, ...props }: DialogBodyProps) => (
    <Dialog.Body ref={ref} className={cn('sm:px-4 sm:pt-0', className)} {...props} />
)

const content = tv({
    base: [
        'peer/popover-content bg-bg text-fg max-w-xs rounded-xl border bg-clip-padding shadow-xs transition-transform sm:max-w-3xl sm:text-sm dark:backdrop-saturate-200'
    ],
    variants: {
        isPicker: {
            true: 'max-h-72 min-w-(--trigger-width) overflow-y-auto p-0',
            false: 'min-w-80'
        },
        isMenu: {
            true: 'p-0'
        },
        isEntering: {
            true: [
                'fade-in animate-in duration-150 ease-out',
                'data-[placement=left]:slide-in-from-right-1 data-[placement=right]:slide-in-from-left-1 data-[placement=top]:slide-in-from-bottom-1 data-[placement=bottom]:slide-in-from-top-1'
            ]
        },
        isExiting: {
            true: [
                'fade-out animate-out duration-100 ease-in',
                'data-[placement=left]:slide-out-to-right-1 data-[placement=right]:slide-out-to-left-1 data-[placement=top]:slide-out-to-bottom-1 data-[placement=bottom]:slide-out-to-top-1'
            ]
        }
    }
})

const drawer = tv({
    base: [
        'bg-bg fixed top-auto bottom-0 z-50 max-h-full w-full max-w-2xl border border-b-transparent outline-hidden'
    ],
    variants: {
        isMenu: {
            true: 'rounded-t-xl p-0 [&_[role=dialog]]:*:not-has-[[data-slot=dialog-body]]:px-1',
            false: 'rounded-t-2xl'
        },
        isEntering: {
            true: [
                '[will-change:transform] [transition:transform_0.5s_cubic-bezier(0.32,_0.72,_0,_1)]',
                'fade-in-0 slide-in-from-bottom-56 animate-in duration-200',
                '[transition:translate3d(0,_100%,_0)]',
                'sm:slide-in-from-bottom-auto sm:slide-in-from-top-[20%]'
            ]
        },
        isExiting: {
            true: 'slide-out-to-bottom-56 animate-out duration-200 ease-in'
        }
    }
})

interface PopoverContentProps
    extends Omit<React.ComponentProps<typeof Modal>, 'children'>,
        Omit<PopoverPrimitiveProps, 'children' | 'className'>,
        Omit<ModalOverlayProps, 'className'> {
    children: React.ReactNode
    showArrow?: boolean
    style?: React.CSSProperties
    respectScreen?: boolean
    'aria-label'?: DialogProps['aria-label']
    'aria-labelledby'?: DialogProps['aria-labelledby']
    className?: string | ((values: { defaultClassName?: string }) => string)
}

const PopoverContent = ({
    respectScreen = true,
    children,
    showArrow = true,
    className,
    ...props
}: PopoverContentProps) => {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const popoverContext = useSlottedContext(PopoverContext)!
    const isMenuTrigger = popoverContext?.trigger === 'MenuTrigger'
    const isSubmenuTrigger = popoverContext?.trigger === 'SubmenuTrigger'
    const isMenu = isMenuTrigger || isSubmenuTrigger
    const offset = showArrow ? 12 : 8
    const effectiveOffset = isSubmenuTrigger ? offset - 5 : offset
    return isMobile && respectScreen ? (
        <ModalOverlay
            className='bg-bg/10 fixed top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-full [--visual-viewport-vertical-padding:16px]'
            {...props}
            isDismissable
        >
            <Modal
                className={cr(className, (className, renderProps) =>
                    drawer({ ...renderProps, isMenu, className })
                )}
            >
                <Dialog
                    data-dialog
                    aria-label={props['aria-label'] || isMenu ? 'Menu' : undefined}
                    className='has-input:overflow-visible outline-hidden'
                >
                    {children}
                </Dialog>
            </Modal>
        </ModalOverlay>
    ) : (
        <PopoverPrimitive
            offset={effectiveOffset}
            {...props}
            className={cr(className, (className, renderProps) =>
                content({
                    ...renderProps,
                    className
                })
            )}
        >
            {showArrow && (
                <OverlayArrow className='group'>
                    <svg
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        className='fill-bg stroke-border block group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90'
                    >
                        <path d='M0 0 L6 6 L12 0' />
                    </svg>
                </OverlayArrow>
            )}
            <Dialog
                role='dialog'
                aria-label={props['aria-label'] || isMenu ? 'Menu' : undefined}
                className='outline-hidden'
            >
                {children}
            </Dialog>
        </PopoverPrimitive>
    )
}

const PopoverPicker = ({ children, className, ...props }: PopoverContentProps) => {
    return (
        <PopoverPrimitive
            {...props}
            className={cr(className, (className, renderProps) =>
                content({
                    ...renderProps,
                    isPicker: true,
                    className
                })
            )}
        >
            {children}
        </PopoverPrimitive>
    )
}

const PopoverTrigger = Dialog.Trigger
const PopoverClose = Dialog.Close
const PopoverDescription = Dialog.Description

Popover.Trigger = PopoverTrigger
Popover.Close = PopoverClose
Popover.Description = PopoverDescription
Popover.Content = PopoverContent
Popover.Body = PopoverBody
Popover.Footer = PopoverFooter
Popover.Header = PopoverHeader
Popover.Picker = PopoverPicker
Popover.Title = PopoverTitle

export { Popover }
export type { PopoverContentProps, PopoverProps }
