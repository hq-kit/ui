'use client'

import type { CSSProperties } from 'react'

import type { ButtonProps, DialogProps, DialogTriggerProps, ModalOverlayProps } from 'react-aria-components'
import { Button, DialogTrigger as ModalTrigger, Modal as RACModal, composeRenderProps } from 'react-aria-components'

import {
    Dialog,
    DialogBody,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogX,
    modalStyle
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
                className={composeRenderProps(className, (className) =>
                    modalStyle({
                        size,
                        className
                    })
                )}
                {...props}
            >
                <Dialog role={role}>
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
