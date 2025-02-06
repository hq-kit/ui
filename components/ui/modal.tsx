'use client'

import type { DialogProps, DialogTriggerProps, ModalOverlayProps } from 'react-aria-components'
import { DialogTrigger, ModalOverlay, Modal as ModalPrimitive } from 'react-aria-components'
import { type VariantProps, tv } from 'tailwind-variants'

import { Dialog } from './dialog'
import { cr } from './utils'

const overlay = tv({
    base: [
        'fixed top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-full',
        'bg-fg/15 dark:bg-bg/40 flex items-end justify-end text-center sm:items-center sm:justify-center',
        '[--visual-viewport-vertical-padding:16px] sm:[--visual-viewport-vertical-padding:32px]'
    ],
    variants: {
        isBlurred: {
            true: 'bg-bg supports-backdrop-filter:bg-bg/15 dark:supports-backdrop-filter:bg-bg/40 supports-backdrop-filter:backdrop-blur'
        },
        isEntering: {
            true: 'fade-in animate-in duration-200 ease-out'
        },
        isExiting: {
            true: 'fade-out animate-out duration-150 ease-in'
        }
    }
})
const content = tv({
    base: [
        'bg-bg text-fg ring-fg/5 max-h-full w-full rounded-t-2xl text-left align-middle ring-1 shadow-lg',
        'dark:ring-border overflow-hidden sm:rounded-lg'
    ],
    variants: {
        isEntering: {
            true: [
                'fade-in slide-in-from-bottom animate-in duration-200 ease-out',
                'sm:zoom-in-95 sm:slide-in-from-bottom-0'
            ]
        },
        isExiting: {
            true: [
                'slide-out-to-bottom sm:slide-out-to-bottom-0 sm:zoom-out-95 animate-out duration-150 ease-in'
            ]
        },
        size: {
            xs: 'sm:max-w-xs',
            sm: 'sm:max-w-sm',
            md: 'sm:max-w-md',
            lg: 'sm:max-w-lg',
            xl: 'sm:max-w-xl',
            '2xl': 'sm:max-w-2xl',
            '3xl': 'sm:max-w-3xl',
            '4xl': 'sm:max-w-4xl',
            '5xl': 'sm:max-w-5xl'
        }
    },
    defaultVariants: {
        size: 'lg'
    }
})

const Modal = (props: DialogTriggerProps) => {
    return <DialogTrigger {...props} />
}

interface ModalContentProps
    extends Omit<ModalOverlayProps, 'className' | 'children'>,
        VariantProps<typeof content> {
    'aria-label'?: DialogProps['aria-label']
    'aria-labelledby'?: DialogProps['aria-labelledby']
    role?: DialogProps['role']
    children?: DialogProps['children']
    closeButton?: boolean
    isBlurred?: boolean
    classNames?: {
        overlay?: ModalOverlayProps['className']
        content?: ModalOverlayProps['className']
    }
}

const ModalContent = ({
    classNames,
    isDismissable: isDismissableInternal,
    isBlurred = false,
    children,
    size,
    role = 'dialog',
    closeButton = true,
    ...props
}: ModalContentProps) => {
    const isDismissable = isDismissableInternal ?? role !== 'alertdialog'

    return (
        <ModalOverlay
            isDismissable={isDismissable}
            className={cr(classNames?.overlay, (className, renderProps) => {
                return overlay({
                    ...renderProps,
                    isBlurred,
                    className
                })
            })}
            {...props}
        >
            <ModalPrimitive
                isDismissable={isDismissable}
                className={cr(classNames?.content, (className, renderProps) =>
                    content({
                        ...renderProps,
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
                            {closeButton && <Dialog.CloseIndicator isDismissable={isDismissable} />}
                        </>
                    )}
                </Dialog>
            </ModalPrimitive>
        </ModalOverlay>
    )
}

const ModalTrigger = Dialog.Trigger
const ModalHeader = Dialog.Header
const ModalTitle = Dialog.Title
const ModalDescription = Dialog.Description
const ModalFooter = Dialog.Footer
const ModalBody = Dialog.Body
const ModalClose = Dialog.Close

Modal.Trigger = ModalTrigger
Modal.Header = ModalHeader
Modal.Title = ModalTitle
Modal.Description = ModalDescription
Modal.Footer = ModalFooter
Modal.Body = ModalBody
Modal.Close = ModalClose
Modal.Content = ModalContent

export { Modal }
