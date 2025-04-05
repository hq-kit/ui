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
    ModalOverlay,
    Modal as RACModal,
    Text
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const Modal = (props: DialogTriggerProps) => <DialogTrigger {...props} />

interface ModalContentProps
    extends Omit<ModalOverlayProps, 'className' | 'children'>,
        Pick<DialogProps, 'aria-label' | 'aria-labelledby' | 'role' | 'children' | 'className'> {
    closeButton?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
}

const Content = ({
    isDismissable: isDismissableInternal,
    className,
    children,
    size = 'lg',
    role = 'dialog',
    closeButton = true,
    ...props
}: ModalContentProps) => {
    const isDismissable = isDismissableInternal ?? role !== 'alertdialog'
    return (
        <ModalOverlay
            isDismissable={isDismissable}
            className={({ isEntering, isExiting }) =>
                cn(
                    'fixed outline-hidden top-0 left-0 isolate z-50 flex h-(--visual-viewport-height) w-full items-end justify-end bg-black/80 backdrop-blur [--visual-viewport-vertical-padding:32px] sm:block',
                    isEntering && 'fade-in animate-in duration-200 ease-out',
                    isExiting && 'fade-out animate-out ease-in'
                )
            }
            {...props}
        >
            <RACModal
                isDismissable={isDismissable}
                className={composeRenderProps(className, (className, { isEntering, isExiting }) =>
                    cn(
                        'max-h-full w-full rounded-t-lg sm:rounded-lg bg-bg text-fg align-middle shadow-lg overflow-hidden dark:border',
                        {
                            'max-w-xs': size === 'xs',
                            'max-w-sm': size === 'sm',
                            'max-w-md': size === 'md',
                            'max-w-lg': size === 'lg',
                            'max-w-xl': size === 'xl',
                            'max-w-2xl': size === '2xl',
                            'max-w-3xl': size === '3xl',
                            'max-w-4xl': size === '4xl',
                            'max-w-5xl': size === '5xl',
                            'max-w-full': size === 'full'
                        },
                        'sm:-translate-x-1/2 sm:-translate-y-1/2 sm:fixed sm:top-1/2 sm:left-[50vw]',
                        isEntering &&
                            'fade-in slide-in-from-bottom animate-in duration-200 ease-out sm:zoom-in-95 sm:slide-in-from-bottom-0',
                        isExiting &&
                            'slide-out-to-bottom animate-out duration-150 sm:slide-out-to-bottom-0 sm:zoom-out-95 sm:ease-in',
                        className
                    )
                )}
                {...props}
            >
                <Dialog
                    role={role}
                    className='relative flex flex-col max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] overflow-hidden outline-hidden'
                >
                    {composeRenderProps(children, (children) => (
                        <>
                            {children}
                            {closeButton && (
                                <Button
                                    aria-label='Close'
                                    slot='close'
                                    className={({ isPressed, isHovered, isFocusVisible }) =>
                                        cn(
                                            'absolute top-2 right-2 bg-bg shrink-0 inline-flex size-8 items-center justify-center rounded-md text-muted-fg outline-hidden',
                                            isHovered && 'bg-muted/40',
                                            isFocusVisible && 'ring-4 ring-primary/20',
                                            isPressed && 'bg-muted/50'
                                        )
                                    }
                                >
                                    <IconX />
                                </Button>
                            )}
                        </>
                    ))}
                </Dialog>
            </RACModal>
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

Modal.Trigger = Button
Modal.Header = Header
Modal.Title = Title
Modal.Description = Description
Modal.Footer = Footer
Modal.Body = Body
Modal.Content = Content

export { Modal }
