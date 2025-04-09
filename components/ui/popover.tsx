'use client'

import React from 'react'

import { AnimatePresence, motion, useDragControls } from 'motion/react'
import type {
    DialogProps,
    DialogTriggerProps,
    HeadingProps,
    ModalOverlayProps,
    PopoverProps,
    TextProps
} from 'react-aria-components'
import {
    Button,
    composeRenderProps,
    Dialog,
    DialogTrigger,
    Heading,
    ModalOverlay,
    OverlayArrow,
    OverlayTriggerStateContext,
    Modal as RACModal,
    Popover as RACPopover,
    Text
} from 'react-aria-components'

import { useMediaQuery } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const Modal = motion.create(RACModal)
const Overlay = motion.create(ModalOverlay)

const Popover = (props: DialogTriggerProps) => <DialogTrigger {...props} />

const DrawerMode = ({
    className,
    ...props
}: Omit<ModalOverlayProps, 'style'> & Pick<DialogProps, 'children'>) => {
    const state = React.useContext(OverlayTriggerStateContext)!
    const controls = useDragControls()
    return (
        <AnimatePresence>
            {(props?.isOpen || state?.isOpen) && (
                <Overlay
                    isOpen={props?.isOpen || state?.isOpen}
                    onOpenChange={props?.onOpenChange || state?.setOpen}
                    initial={{ backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)' }}
                    animate={{ backgroundColor: `rgba(0, 0, 0, 0.5)`, backdropFilter: 'blur(2px)' }}
                    exit={{ backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)' }}
                    className='fixed inset-0 z-50 [--visual-viewport-vertical-padding:32px] will-change-auto'
                    isDismissable
                    {...props}
                >
                    {({ state }) => (
                        <Modal
                            isDismissable
                            className={cn(
                                'bg-bg rounded-t-2xl border-t fixed bottom-0 w-full shadow-sm will-change-transform max-h-full overflow-hidden',
                                className
                            )}
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            drag='y'
                            dragElastic={{ top: 0, bottom: 1 }}
                            whileDrag={{ cursor: 'grabbing' }}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            dragPropagation
                            dragConstraints={{ top: 0, bottom: 0 }}
                            transition={{ duration: 0.15, ease: 'easeInOut' }}
                            onDragEnd={(_, { offset, velocity }) =>
                                (offset.y > screen.availHeight * 0.25 || velocity.y > 100) &&
                                state.close()
                            }
                            dragListener={false}
                            dragControls={controls}
                            {...props}
                        >
                            <Dialog
                                aria-label='Popover'
                                className='relative flex flex-col max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding))] overflow-hidden outline-hidden'
                            >
                                <div
                                    className='w-full h-8 touch-none py-2'
                                    onPointerDown={(e) => controls.start(e)}
                                >
                                    <div className='mx-auto w-12 h-1.5 rounded-full bg-muted' />
                                </div>
                                {props.children as React.ReactNode}
                            </Dialog>
                        </Modal>
                    )}
                </Overlay>
            )}
        </AnimatePresence>
    )
}

const PopoverMode = ({
    className,
    children,
    showArrow,
    ...props
}: PopoverProps & { showArrow?: boolean }) => (
    <RACPopover
        className={composeRenderProps(
            className,
            (className, { isEntering, isExiting, placement }) =>
                cn(
                    'group max-w-sm bg-bg rounded-lg border shadow transition outline-hidden',
                    isEntering && 'fade-in animate-in zoom-in-95',
                    isExiting && 'fade-out animate-out zoom-out-95',
                    placement === 'top' &&
                        `mb-2 ${isEntering ? 'slide-in-from-bottom-2' : 'slide-out-to-bottom-2'}`,
                    placement === 'right' &&
                        `ml-2 ${isEntering ? 'slide-in-from-left-2' : 'slide-out-to-left-2'}`,
                    placement === 'bottom' &&
                        `mt-2 ${isEntering ? 'slide-in-from-top-2' : 'slide-out-to-top-2'}`,
                    placement === 'left' &&
                        `mr-2 ${isEntering ? 'slide-in-from-right-2' : 'slide-out-to-right-2'}`,
                    className
                )
        )}
        {...props}
    >
        {(values) => (
            <>
                {showArrow && (
                    <OverlayArrow className='group'>
                        <svg
                            width={12}
                            height={12}
                            viewBox='0 0 12 12'
                            className='block fill-bg stroke-muted group-placement-left:-rotate-90 group-placement-right:rotate-90 group-placement-bottom:rotate-180'
                        >
                            <path d='M0 0 L6 6 L12 0' />
                        </svg>
                    </OverlayArrow>
                )}
                {typeof children === 'function' ? children(values) : children}
            </>
        )}
    </RACPopover>
)

interface PopoverContentProps
    extends Omit<ModalOverlayProps, 'children' | 'className'>,
        Omit<PopoverProps, 'children' | 'className'> {
    style?: React.CSSProperties
    showArrow?: boolean
    respectScreen?: boolean
    children: React.ReactNode
    className?: string | ((values: { defaultClassName?: string }) => string)
}

const PopoverContent = ({
    showArrow = true,
    respectScreen = true,
    ...props
}: PopoverContentProps) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    return isMobile && respectScreen ? (
        <DrawerMode {...props} />
    ) : (
        <PopoverMode showArrow={showArrow} {...props} />
    )
}

const Header = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            slot='header'
            className={cn('flex flex-col p-4 text-center sm:text-left', className)}
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

Popover.Trigger = Button
Popover.Content = PopoverContent
Popover.Header = Header
Popover.Title = Title
Popover.Description = Description
Popover.Body = Body
Popover.Footer = Footer

export { Popover }
