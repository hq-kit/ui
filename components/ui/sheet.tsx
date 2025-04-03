'use client'

import { IconX } from 'hq-icons'
import type {
    DialogProps,
    DialogTriggerProps,
    HeadingProps,
    ModalOverlayProps,
    TextProps
} from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    Dialog,
    DialogTrigger,
    Heading,
    Modal,
    ModalOverlay,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const Sheet = (props: DialogTriggerProps) => <DialogTrigger {...props} />

interface SheetContentProps
    extends Omit<ModalOverlayProps, 'className' | 'children'>,
        Pick<DialogProps, 'aria-label' | 'aria-labelledby' | 'role' | 'children' | 'className'> {
    closeButton?: boolean
    isFloating?: boolean
    className?: string
    side?: 'top' | 'bottom' | 'left' | 'right'
}

const SheetContent = ({
    side = 'right',
    closeButton = true,
    isFloating = false,
    children,
    className,
    ...props
}: SheetContentProps) => {
    return (
        <ModalOverlay
            isDismissable
            className={({ isEntering, isExiting }) =>
                cn(
                    'fixed outline-hidden top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-full items-end justify-end bg-black/80 backdrop-blur [--visual-viewport-vertical-padding:32px] sm:block',
                    isEntering && 'fade-in animate-in duration-200 ease-out',
                    isExiting && 'fade-out animate-out ease-in'
                )
            }
            {...props}
        >
            <Modal
                className={composeRenderProps(className, (className, { isEntering, isExiting }) =>
                    cn(
                        'bg-bg text-fg dark:border fixed z-50 shadow-lg transition ease-in-out',
                        isFloating
                            ? 'ring-fg/5 dark:ring-border'
                            : 'border-fg/20 dark:border-muted',
                        isEntering && 'animate-in',
                        isExiting && 'animate-out',
                        side === 'top' &&
                            `${isEntering && 'slide-in-from-top'} ${isExiting && 'slide-out-to-top'} ${isFloating ? 'top-2 inset-x-2 rounded-lg ring-1 border-b-0' : 'inset-x-0 top-0 rounded-b-2xl border-b'}`,
                        side === 'right' &&
                            `min-w-xs **:[[slot=header]]:text-left ${isEntering && 'slide-in-from-right'} ${isExiting && 'slide-out-to-right'} ${isFloating ? 'right-2 inset-y-2 rounded-lg ring-1 border-l-0' : 'inset-y-0 right-0 h-auto w-full max-w-xs overflow-y-auto border-l'}`,
                        side === 'bottom' &&
                            `${isEntering && 'slide-in-from-bottom'} ${isExiting && 'slide-out-to-bottom'} ${isFloating ? 'bottom-2 inset-x-2 rounded-lg ring-1 border-t-0' : 'inset-x-0 bottom-0 rounded-t-2xl border-t'}`,
                        side === 'left' &&
                            `min-w-xs **:[[slot=header]]:text-left ${isEntering && 'slide-in-from-left'} ${isExiting && 'slide-out-to-left'} ${isFloating ? 'left-2 inset-y-2 rounded-lg ring-1 border-r-0' : 'inset-y-0 left-0 h-auto w-full max-w-xs overflow-y-auto border-r'}`,
                        className
                    )
                )}
                {...props}
            >
                <Dialog className='relative flex flex-col h-full overflow-hidden outline-hidden'>
                    {composeRenderProps(children, (children) => (
                        <>
                            {children}
                            {closeButton && (
                                <Button
                                    aria-label='Close'
                                    slot='close'
                                    className={({
                                        isPressed,
                                        isHovered,
                                        isFocusVisible,
                                        isDisabled
                                    }) =>
                                        cn(
                                            'absolute top-2 right-2 bg-bg shrink-0 inline-flex size-8 items-center justify-center rounded-md text-muted-fg outline-hidden',
                                            isHovered && 'bg-accent/40',
                                            isFocusVisible && 'ring-4 ring-primary/20',
                                            isPressed && 'bg-accent/50',
                                            isDisabled && 'opacity-50'
                                        )
                                    }
                                >
                                    <IconX />
                                </Button>
                            )}
                        </>
                    ))}
                </Dialog>
            </Modal>
        </ModalOverlay>
    )
}

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            slot='header'
            className={cn('flex flex-col p-4 sm:text-left text-center', className)}
            {...props}
        />
    )
}

const Title = ({ className, ...props }: HeadingProps) => (
    <Heading slot='title' className={cn('font-semibold text-lg/8', className)} {...props} />
)

const Description = ({ className, ...props }: TextProps) => (
    <Text slot='description' className={cn('text-muted-fg text-sm', className)} {...props} />
)

const Body = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        slot='body'
        className={cn(
            'isolate flex flex-col overflow-auto px-4 py-1 max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))]',
            className
        )}
        {...props}
    />
)

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            slot='footer'
            className={cn(
                'isolate flex sm:flex-row flex-col-reverse justify-end gap-2 mt-auto p-4',
                className
            )}
            {...props}
        />
    )
}

Sheet.Trigger = Button
Sheet.Footer = Footer
Sheet.Header = Header
Sheet.Title = Title
Sheet.Description = Description
Sheet.Body = Body
Sheet.Content = SheetContent

export { Sheet }
