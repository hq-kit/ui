'use client'

import type { CSSProperties } from 'react'
import type { ButtonProps, DialogProps, DialogTriggerProps, ModalOverlayProps } from 'react-aria-components'
import { Button, DialogTrigger as ModalTrigger, Modal as RACModal, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import {
    Dialog,
    DialogBody,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogX
} from './dialog'

const Modal = (props: DialogTriggerProps) => {
    return <ModalTrigger {...props} />
}

interface ModalContentProps
    extends Omit<ModalOverlayProps, 'className' | 'children'>,
        Pick<DialogProps, 'aria-label' | 'aria-labelledby' | 'role' | 'children' | 'className'> {
    closeButton?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
    style?: CSSProperties
}

const ModalContent = ({
    children,
    size = 'lg',
    role = 'dialog',
    closeButton = true,
    className,
    ...props
}: ModalContentProps) => {
    const isDismissable = role !== 'alertdialog'
    return (
        <DialogOverlay isDismissable={isDismissable} {...props}>
            <RACModal
                isDismissable={isDismissable}
                className={composeRenderProps(className, (className, { isEntering, isExiting }) =>
                    cn(
                        'absolute h-fit max-h-full w-full overflow-hidden bg-bg align-middle text-fg shadow-sm',
                        'bottom-0 rounded-t-lg border-t',
                        'sm:-translate-x-1/2 sm:-translate-y-1/2 sm:fixed sm:top-1/2 sm:left-[50vw] sm:rounded-lg sm:border',
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
                            'h-dvh max-w-full': size === 'full'
                        },
                        isEntering &&
                            'fade-in slide-in-from-bottom sm:zoom-in-95 sm:slide-in-from-bottom-0 animate-in duration-200 ease-out',

                        isExiting &&
                            'slide-out-to-bottom sm:slide-out-to-bottom-0 fade-out sm:zoom-out-95 animate-out duration-150 ease-in',

                        className
                    )
                )}
                {...props}
            >
                <Dialog aria-label='Dialog' role={role}>
                    {(values) => (
                        <>
                            {typeof children === 'function' ? children(values) : children}
                            {closeButton && isDismissable && <DialogX />}
                        </>
                    )}
                </Dialog>
            </RACModal>
        </DialogOverlay>
    )
}

Modal.Trigger = (props: ButtonProps) => <Button {...props} />

Modal.Content = ModalContent

Modal.Header = DialogHeader
Modal.Title = DialogTitle
Modal.Description = DialogDescription
Modal.Footer = DialogFooter
Modal.Body = DialogBody

export { Modal, ModalContent }
