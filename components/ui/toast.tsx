'use client'

import React from 'react'

import { IconCircleAlert, IconCircleCheck, IconInfo, IconTriangleAlert, IconX } from 'hq-icons'
import { motion, useAnimation } from 'motion/react'
import {
    Button,
    ButtonProps,
    Text,
    UNSTABLE_ToastContent as ToastContent,
    UNSTABLE_Toast as Toaster,
    ToastOptions,
    UNSTABLE_ToastQueue as ToastQueue,
    UNSTABLE_ToastRegion as ToastRegion
} from 'react-aria-components'

import { cn } from '@/lib/utils'

interface ToastContent {
    title: string
    description?: string
    action?: () => void
    actionLabel?: React.ReactNode
    altAction?: () => void
    altActionLabel?: React.ReactNode
    type: 'default' | 'success' | 'error' | 'info' | 'warning'
}

const queue = new ToastQueue<ToastContent>({
    wrapUpdate(fn) {
        if ('startViewTransition' in document) {
            document.startViewTransition(() => fn())
        } else fn()
    },
    maxVisibleToasts: 5
})

const ToastProvider = () => {
    const [isHovered, setIsHovered] = React.useState(false)
    return (
        <ToastRegion
            className='fixed w-full h-fit sm:w-fit flex flex-col-reverse items-center sm:items-end p-4 gap-3 sm:bottom-2 sm:right-2 top-0 sm:top-auto'
            queue={queue}
        >
            {({ toast }) => (
                <Toaster
                    key={toast.key}
                    toast={toast}
                    className={cn('sm:min-w-xs will-change-transform sm:w-fit')}
                >
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        key={toast.key}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={cn(
                            'flex flex-col backdrop-blur-lg p-4 gap-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.3)] border',
                            {
                                'border-success/20 text-success bg-success/10':
                                    toast.content.type === 'success',
                                'border-danger/20 bg-danger/5 text-danger':
                                    toast.content.type === 'error',
                                'border-primary/30 text-primary bg-primary/10':
                                    toast.content.type === 'info',
                                'border-warning/40 bg-warning/5 text-warning':
                                    toast.content.type === 'warning',
                                'bg-bg text-fg': toast.content.type === 'default'
                            }
                        )}
                    >
                        <div
                            className={cn('flex items-start gap-2', {
                                'items-center': !toast.content.description
                            })}
                        >
                            {toast.content.type === 'success' ? (
                                <IconCircleCheck className='shrink-0' />
                            ) : toast.content.type === 'error' ? (
                                <IconCircleAlert className='shrink-0' />
                            ) : toast.content.type === 'info' ? (
                                <IconInfo className='shrink-0' />
                            ) : toast.content.type === 'warning' ? (
                                <IconTriangleAlert className='shrink-0' />
                            ) : null}
                            <ToastContent className='w-full flex flex-col'>
                                <Text slot='title' className='font-medium'>
                                    {toast.content.title}
                                </Text>
                                {toast.content.description && (
                                    <Text slot='description' className='text-sm'>
                                        {toast.content.description}
                                    </Text>
                                )}
                            </ToastContent>
                            <TimeoutButton paused={isHovered} timeout={toast.timeout} slot='close'>
                                <IconX />
                            </TimeoutButton>
                        </div>
                        {(toast.content.action || toast.content.altAction) && (
                            <div className='flex items-center gap-2 justify-start'>
                                {toast.content.action && (
                                    <Button
                                        onPress={toast.content.action}
                                        slot='close'
                                        className={({ isHovered, isPressed, isFocusVisible }) =>
                                            cn(
                                                'outline-hidden cursor-pointer flex items-center border justify-center gap-x-1.5 rounded-lg px-2 py-1 text-sm *:[svg]:size-3',
                                                isHovered && 'brightness-80',
                                                isPressed && 'brightness-90',
                                                isFocusVisible && 'ring-4 ring-primary/20',
                                                {
                                                    'border-success text-success-fg bg-success':
                                                        toast.content.type === 'success',
                                                    'border-danger text-danger-fg bg-danger':
                                                        toast.content.type === 'error',
                                                    'border-primary text-primary-fg bg-primary':
                                                        toast.content.type === 'info' ||
                                                        toast.content.type === 'default',
                                                    'border-warning text-warning-fg bg-warning':
                                                        toast.content.type === 'warning'
                                                }
                                            )
                                        }
                                    >
                                        {toast.content.actionLabel || 'Action'}
                                    </Button>
                                )}
                                {toast.content.altAction && (
                                    <Button
                                        onPress={toast.content.altAction}
                                        slot='close'
                                        className={({ isHovered, isPressed, isFocusVisible }) =>
                                            cn(
                                                'outline-hidden cursor-pointer flex items-center border justify-center gap-x-1.5 rounded-lg bg-bg px-2 py-1 text-sm text-fg *:[svg]:size-3',
                                                isHovered && 'bg-muted/40',
                                                isPressed && 'bg-muted/60',
                                                isFocusVisible &&
                                                    'ring-4 ring-primary/20 border-primary'
                                            )
                                        }
                                    >
                                        {toast.content.altActionLabel || 'Cancel'}
                                    </Button>
                                )}
                            </div>
                        )}
                    </motion.div>
                </Toaster>
            )}
        </ToastRegion>
    )
}

interface TimeoutButtonProps extends ButtonProps {
    timeout: number | undefined
    paused?: boolean
    onComplete?: () => void
}

const TimeoutButton = ({ timeout, onComplete, paused, children, ...props }: TimeoutButtonProps) => {
    const controls = useAnimation()
    const startTimeRef = React.useRef<number | null>(null)
    const elapsedRef = React.useRef<number>(0)
    const size = 28
    const stroke = 2
    const radius = (size - stroke) / 2
    const circumference = 2 * Math.PI * radius

    const animate = (duration: number) => {
        controls
            .start({
                strokeDashoffset: 0,
                transition: { duration, ease: 'linear' }
            })
            .then(() => {
                onComplete?.()
            })
    }

    React.useEffect(() => {
        if (timeout === undefined) return
        startTimeRef.current = performance.now()
        animate(timeout / 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeout])

    React.useEffect(() => {
        if (timeout === undefined) return

        if (paused) {
            controls.stop()
            if (startTimeRef.current) {
                elapsedRef.current += performance.now() - startTimeRef.current
            }
        } else {
            const remaining = timeout - elapsedRef.current
            if (remaining > 0) {
                startTimeRef.current = performance.now()
                animate(remaining / 1000)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paused])

    return (
        <Button
            className={({ isHovered, isPressed, isFocusVisible }) =>
                cn(
                    'relative shrink-0 outline-hidden ml-auto border size-7 rounded-full inline-flex items-center justify-center',
                    isHovered && 'bg-muted/40',
                    isPressed && 'bg-muted/60',
                    isFocusVisible && 'ring-4 ring-primary/20 border-primary'
                )
            }
            {...props}
        >
            {(values) => (
                <>
                    {typeof children === 'function' ? children(values) : children}
                    {timeout !== undefined && (
                        <svg
                            className='absolute top-0 left-0 size-full'
                            viewBox={`0 0 ${size} ${size}`}
                        >
                            <motion.circle
                                stroke='#3b82f6'
                                fill='transparent'
                                strokeWidth={stroke}
                                strokeDasharray={circumference}
                                strokeDashoffset={circumference}
                                animate={controls}
                                r={radius}
                                cx={size / 2}
                                cy={size / 2}
                            />
                        </svg>
                    )}
                </>
            )}
        </Button>
    )
}

const toast = (
    body: string,
    content?: Omit<ToastContent, 'type' | 'title'>,
    options?: ToastOptions
) => queue.add({ ...content, title: body, type: 'default' }, options)

toast.success = (
    body: string,
    content?: Omit<ToastContent, 'type' | 'title'>,
    options?: ToastOptions
) => queue.add({ ...content, title: body, type: 'success' }, options)

toast.error = (
    body: string,
    content?: Omit<ToastContent, 'type' | 'title'>,
    options?: ToastOptions
) => queue.add({ ...content, title: body, type: 'error' }, options)

toast.info = (
    body: string,
    content?: Omit<ToastContent, 'type' | 'title'>,
    options?: ToastOptions
) => queue.add({ ...content, title: body, type: 'info' }, options)

toast.warning = (
    body: string,
    content?: Omit<ToastContent, 'type' | 'title'>,
    options?: ToastOptions
) => queue.add({ ...content, title: body, type: 'warning' }, options)

export { toast, ToastProvider }
