'use client'

import type { ButtonProps, DialogProps, DialogTriggerProps, ModalOverlayProps } from 'react-aria-components'
import { Button, Modal, DialogTrigger as SheetTrigger, composeRenderProps } from 'react-aria-components'

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

const Sheet = (props: DialogTriggerProps) => {
    return <SheetTrigger {...props} />
}

interface SheetContentProps
    extends Omit<React.ComponentProps<typeof Modal>, 'children'>,
        Omit<ModalOverlayProps, 'className'> {
    'aria-label'?: DialogProps['aria-label']
    'aria-labelledby'?: DialogProps['aria-labelledby']
    role?: DialogProps['role']
    closeButton?: boolean
    isBlurred?: boolean
    isFloating?: boolean
    side?: 'top' | 'bottom' | 'left' | 'right'
}

const SheetContent = ({
    isBlurred = false,
    side = 'right',
    role = 'dialog',
    closeButton = true,
    isFloating = false,
    className,
    children,
    ...props
}: SheetContentProps) => {
    const isDismissable = role !== 'alertdialog'
    return (
        <DialogOverlay isDismissable={isDismissable} {...props}>
            <Modal
                className={composeRenderProps(className, (className, { isEntering, isExiting }) =>
                    cn(
                        'fixed z-50 grid gap-4 bg-bg text-fg shadow-sm transition ease-in-out',
                        {
                            'inset-x-2 top-2 rounded-lg border-b-0': isFloating && side === 'top',
                            'inset-x-0 top-0 rounded-b-lg border-b': !isFloating && side === 'top'
                        },
                        {
                            'w-full max-w-xs overflow-y-auto **:[[slot=header]]:text-left': side === 'right',
                            'inset-y-2 right-2 rounded-lg border': isFloating && side === 'right',
                            'inset-y-0 right-0 h-auto border-l': !isFloating && side === 'right'
                        },
                        {
                            'inset-x-2 bottom-2 rounded-lg border-t-0': isFloating && side === 'bottom',
                            'inset-x-0 bottom-0 rounded-t-lg border-t': !isFloating && side === 'bottom'
                        },
                        {
                            'w-full max-w-xs overflow-y-auto **:[[slot=header]]:text-left': side === 'left',
                            'inset-y-2 left-2 rounded-lg border': isFloating && side === 'left',
                            'inset-y-0 left-0 h-auto border-r': !isFloating && side === 'left'
                        },
                        {
                            'slide-in-from-top animate-in duration-150 ease-out': isEntering && side === 'top',
                            'slide-in-from-right animate-in duration-150 ease-out': isEntering && side === 'right',
                            'slide-in-from-bottom animate-in duration-150 ease-out': isEntering && side === 'bottom',
                            'slide-in-from-left animate-in duration-150 ease-out': isEntering && side === 'left'
                        },
                        {
                            'slide-out-to-top animate-out duration-150 ease-in': isExiting && side === 'top',
                            'slide-out-to-right animate-out duration-150 ease-in': isExiting && side === 'right',
                            'slide-out-to-bottom animate-out duration-150 ease-in': isExiting && side === 'bottom',
                            'slide-out-to-left animate-out duration-150 ease-in': isExiting && side === 'left'
                        },
                        className
                    )
                )}
                {...props}
            >
                {(values) => (
                    <Dialog
                        role={role}
                        aria-label='Sheet'
                        className={cn(
                            'relative flex flex-col overflow-hidden outline-hidden',
                            side === 'top' || side === 'bottom'
                                ? 'max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))]'
                                : 'max-h-full'
                        )}
                    >
                        <>
                            {typeof children === 'function' ? children(values) : children}
                            {closeButton && isDismissable && <DialogX />}
                        </>
                    </Dialog>
                )}
            </Modal>
        </DialogOverlay>
    )
}

Sheet.Trigger = (props: ButtonProps) => <Button {...props} />

Sheet.Content = SheetContent

Sheet.Header = DialogHeader
Sheet.Title = DialogTitle
Sheet.Description = DialogDescription
Sheet.Body = DialogBody
Sheet.Footer = DialogFooter

export { Sheet, SheetContent }
