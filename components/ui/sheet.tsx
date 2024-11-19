'use client'

import React from 'react'

import * as Aria from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { Dialog } from './dialog'

const sheetOverlayStyles = tv({
    base: [
        'fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-50 flex items-center justify-center p-4'
    ],
    variants: {
        isBlurred: {
            true: 'backdrop-blur',
            false: 'bg-black/15 dark:bg-black/40'
        },
        isEntering: {
            true: 'animate-in fade-in ease-out'
        },
        isExiting: {
            true: 'animate-out fade-out ease-in'
        }
    }
})

type Sides = 'top' | 'bottom' | 'left' | 'right'
const generateCompoundVariants = (sides: Array<Sides>) => {
    return sides.map((side) => ({
        side,
        isStack: true,
        className:
            side === 'top'
                ? 'top-2 inset-x-2 rounded-lg ring-1 border-b-0 ring-dark/5 dark:ring-border'
                : side === 'bottom'
                  ? 'bottom-2 inset-x-2 rounded-lg ring-1 border-t-0 ring-dark/5 dark:ring-border'
                  : side === 'left'
                    ? 'left-2 inset-y-2 rounded-lg ring-1 border-r-0 ring-dark/5 dark:ring-border'
                    : 'right-2 inset-y-2 rounded-lg ring-1 border-l-0 ring-dark/5 dark:ring-border'
    }))
}

const sheetContentStyles = tv({
    base: 'fixed z-50 grid gap-4 bg-background border-dark/5 dark:border-border text-foreground shadow-lg transition ease-in-out',
    variants: {
        isEntering: {
            true: 'animate-in '
        },
        isExiting: {
            true: 'animate-out'
        },
        side: {
            top: 'inset-x-0 top-0 rounded-b-lg border-b entering:slide-in-from-top exiting:slide-out-to-top',
            bottom: 'inset-x-0 bottom-0 rounded-t-lg border-t entering:slide-in-from-bottom exiting:slide-out-to-bottom',
            left: 'inset-y-0 left-0 h-auto w-[19rem] sm:w-3/4 overflow-y-auto border-r entering:slide-in-from-left exiting:slide-out-to-left sm:max-w-xs',
            right: 'inset-y-0 right-0 h-auto w-[19rem] sm:w-3/4 overflow-y-auto border-l entering:slide-in-from-right exiting:slide-out-to-right sm:max-w-xs'
        },
        isStack: {
            true: '',
            false: ''
        }
    },
    compoundVariants: generateCompoundVariants(['top', 'bottom', 'left', 'right'])
})

const Sheet = ({ children, ...props }: Aria.DialogTriggerProps) => {
    return <Aria.DialogTrigger {...props}>{children}</Aria.DialogTrigger>
}

interface SheetContentProps
    extends Omit<React.ComponentProps<typeof Aria.Modal>, 'children' | 'className'>,
        Omit<Aria.ModalOverlayProps, 'className'>,
        VariantProps<typeof sheetOverlayStyles> {
    'aria-label'?: Aria.DialogProps['aria-label']
    'aria-labelledby'?: Aria.DialogProps['aria-labelledby']
    role?: Aria.DialogProps['role']
    closeButton?: boolean
    isBlurred?: boolean
    isStack?: boolean
    side?: Sides
    classNames?: {
        overlay?: Aria.ModalOverlayProps['className']
        content?: Aria.ModalOverlayProps['className']
    }
    children: React.ReactNode
}

const SheetContent = ({
    classNames,
    isBlurred = false,
    isDismissable = true,
    side = 'right',
    role = 'dialog',
    closeButton = true,
    isStack = true,
    children,
    ...props
}: SheetContentProps) => {
    const _isDismissable = role === 'alertdialog' ? false : isDismissable
    return (
        <Aria.ModalOverlay
            isDismissable={_isDismissable}
            className={Aria.composeRenderProps(classNames?.overlay, (className, renderProps) => {
                return sheetOverlayStyles({
                    ...renderProps,
                    isBlurred,
                    className
                })
            })}
            {...props}
        >
            <Aria.Modal
                className={Aria.composeRenderProps(classNames?.content, (className, renderProps) =>
                    sheetContentStyles({
                        ...renderProps,
                        side,
                        isStack,
                        className
                    })
                )}
                {...props}
            >
                <Dialog
                    role={role}
                    aria-label={props['aria-label'] ?? undefined}
                    className='h-full'
                >
                    {(values) => (
                        <>
                            {children}
                            {closeButton && (
                                <Dialog.CloseIndicator
                                    className='top-2.5 right-2.5'
                                    close={values.close}
                                    isDismissable={_isDismissable}
                                />
                            )}
                        </>
                    )}
                </Dialog>
            </Aria.Modal>
        </Aria.ModalOverlay>
    )
}

Sheet.Trigger = Dialog.Trigger
Sheet.Footer = Dialog.Footer
Sheet.Content = SheetContent
Sheet.Header = Dialog.Header
Sheet.Title = Dialog.Title
Sheet.Description = Dialog.Description
Sheet.Body = Dialog.Body
Sheet.Close = Dialog.Close

export { Sheet }
