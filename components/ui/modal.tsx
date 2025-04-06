'use client'

import { IconX } from 'hq-icons'
import { motion } from 'motion/react'
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

import { useMediaQuery } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const MModal = motion.create(RACModal)

const Modal = (props: DialogTriggerProps) => <DialogTrigger {...props} />

interface ModalContentProps
    extends Omit<ModalOverlayProps, 'className' | 'children'>,
        Pick<DialogProps, 'aria-label' | 'aria-labelledby' | 'role' | 'children' | 'className'> {
    closeButton?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full'
    style?: React.CSSProperties
    respectScreen?: boolean
    drawer?: boolean
    notch?: boolean
}

const Content = ({
    isDismissable: isDismissableInternal,
    className,
    children,
    size = 'lg',
    role = 'dialog',
    closeButton = true,
    notch = false,
    respectScreen = true,
    drawer = false,
    ...props
}: ModalContentProps) => {
    const isDismissable = isDismissableInternal ?? role !== 'alertdialog'
    const isMobile = useMediaQuery('(max-width: 768px)') || drawer
    const isDesktop = respectScreen ? !isMobile : true
    return (
        <ModalOverlay
            isDismissable={isDismissable}
            className={({ isEntering, isExiting }) =>
                cn(
                    'fixed outline-hidden top-0 left-0 isolate z-50 flex h-(--visual-viewport-height) w-full items-end justify-end bg-black/40 backdrop-blur [--visual-viewport-vertical-padding:32px]',
                    isEntering && 'fade-in animate-in duration-150 ease-out',
                    isExiting && 'fade-out animate-out ease-in',
                    isDesktop && `items-center justify-center ${size !== 'full' && 'p-4 sm:p-6'}`
                )
            }
            {...props}
        >
            {({ state }) => (
                <MModal
                    isDismissable={isDismissable}
                    className={composeRenderProps(
                        className,
                        (className, { isEntering, isExiting }) =>
                            cn(
                                'max-h-full w-full bg-bg text-fg align-middle shadow-sm overflow-hidden dark:border',
                                isDesktop ? 'rounded-lg' : 'rounded-t-lg',
                                {
                                    'max-w-xs': size === 'xs' && isDesktop,
                                    'max-w-sm': size === 'sm' && isDesktop,
                                    'max-w-md': size === 'md' && isDesktop,
                                    'max-w-lg': size === 'lg' && isDesktop,
                                    'max-w-xl': size === 'xl' && isDesktop,
                                    'max-w-2xl': size === '2xl' && isDesktop,
                                    'max-w-3xl': size === '3xl' && isDesktop,
                                    'max-w-4xl': size === '4xl' && isDesktop,
                                    'max-w-5xl': size === '5xl' && isDesktop,
                                    'max-w-full h-svh': size === 'full' && isDesktop
                                },
                                isEntering &&
                                    `fade-in animate-in ease-out ${isDesktop ? 'zoom-in-95 slide-in-from-bottom-0' : 'slide-in-from-bottom duration-150'}`,
                                isExiting &&
                                    `animate-out duration-150 ${isDesktop ? 'slide-out-to-bottom-0 zoom-out-95 ease-in' : 'slide-out-to-bottom'}`,
                                notch && !isDesktop && 'pt-3',
                                className
                            )
                    )}
                    drag={!isDesktop && isDismissable ? 'y' : false}
                    transition={{ duration: 0.2 }}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    onDragEnd={(_, { offset, velocity }) => {
                        if (offset.y > window.innerHeight * 0.5 || velocity.y > 25) {
                            state.close()
                        }
                    }}
                    {...props}
                >
                    {notch && isMobile && (
                        <div className='h-4 w-full'>
                            <div className='mx-auto w-12 h-1.5 rounded-full bg-muted' />
                        </div>
                    )}
                    <Dialog
                        aria-label='Modal'
                        role={role}
                        className='relative flex flex-col max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] overflow-hidden outline-hidden'
                    >
                        {composeRenderProps(children, (children) => (
                            <>
                                {children}
                                {closeButton && isDesktop && (
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
                </MModal>
            )}
        </ModalOverlay>
    )
}
const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            slot='header'
            className={cn('flex flex-col p-4 sm:p-6 sm:text-left text-center', className)}
            {...props}
        />
    )
}

const Title = ({ className, ...props }: HeadingProps) => (
    <Heading slot='title' className={cn('font-semibold text-xl/8', className)} {...props} />
)

const Description = ({ className, ...props }: TextProps) => (
    <Text slot='description' className={cn('text-muted-fg', className)} {...props} />
)

const Body = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        slot='body'
        className={cn(
            'isolate flex flex-col overflow-auto px-4 sm:px-6 py-1 max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))]',
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
                'isolate flex sm:flex-row flex-col-reverse justify-center sm:justify-end gap-2 mt-auto p-4 sm:p-6',
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
