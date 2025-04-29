'use client'

import { cn } from '@/lib/utils'
import { IconX } from 'hq-icons'
import type { ComponentPropsWithRef, HTMLAttributes } from 'react'
import type { ButtonProps, DialogProps, HeadingProps, ModalOverlayProps, TextProps } from 'react-aria-components'
import { Button, Header, Heading, ModalOverlay, Dialog as RACDialog, Text } from 'react-aria-components'

const DialogTrigger = (props: ButtonProps) => <Button {...props} />

const DialogOverlay = (props: ModalOverlayProps) => (
    <ModalOverlay
        isDismissable={props.isDismissable}
        className={({ isEntering, isExiting }) =>
            cn(
                'fixed inset-0 isolate z-50 flex h-(--visual-viewport-height) w-full items-end justify-end bg-black/50 backdrop-blur',
                'sm:block',
                '[--visual-viewport-vertical-padding:32px]',
                isEntering && 'fade-in animate-in duration-200 ease-out',
                isExiting && 'fade-out animate-out duration-150 ease-in'
            )
        }
        {...props}
    />
)

const Dialog = ({ className, ...props }: DialogProps) => {
    return (
        <RACDialog
            slot='dialog'
            className={cn(
                'relative flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-hidden outline-hidden',
                className
            )}
            {...props}
        />
    )
}

const DialogHeader = ({ className, ...props }: ComponentPropsWithRef<typeof Header>) => {
    return <Header slot='header' className={cn('flex flex-col p-4 text-center sm:text-left', className)} {...props} />
}

const DialogTitle = ({ className, ...props }: HeadingProps) => (
    <Heading slot='title' className={cn('font-semibold text-lg/8', className)} {...props} />
)

const DialogDescription = ({ className, ...props }: TextProps) => (
    <Text slot='description' className={cn('text-muted-fg text-sm', className)} {...props} />
)

const DialogBody = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        slot='body'
        className={cn(
            'isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] flex-col overflow-auto px-4 py-1 will-change-scroll',
            className
        )}
        {...props}
    />
)

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            slot='footer'
            className={cn(
                'isolate mt-auto flex flex-col-reverse justify-center gap-2 p-4 sm:flex-row sm:justify-end',
                className
            )}
            {...props}
        />
    )
}

const DialogX = (props: ButtonProps) => (
    <Button
        slot='close'
        aria-label='Close'
        className={({ isPressed, isHovered, isFocusVisible }) =>
            cn(
                'absolute top-2 right-2 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-bg text-muted-fg outline-hidden',
                isHovered && 'bg-muted/40',
                isFocusVisible && 'ring-4 ring-primary/20',
                isPressed && 'bg-muted/50'
            )
        }
    >
        <IconX />
    </Button>
)

export {
    Dialog,
    DialogTrigger,
    DialogOverlay,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
    DialogX
}
