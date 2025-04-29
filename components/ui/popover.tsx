'use client'

import type { CSSProperties, ReactNode } from 'react'
import type { ButtonProps, DialogTriggerProps, ModalOverlayProps, PopoverProps } from 'react-aria-components'
import { Button, DialogTrigger, OverlayArrow, Popover as RACPopover, composeRenderProps } from 'react-aria-components'

import { useIsMobile } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { DialogBody, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './dialog'
import { SheetContent } from './sheet'

const Popover = (props: DialogTriggerProps) => <DialogTrigger {...props} />

const PopoverMode = ({ className, children, showArrow, ...props }: PopoverProps & { showArrow?: boolean }) => (
    <RACPopover
        className={composeRenderProps(className, (className, { isEntering, isExiting, placement }) =>
            cn(
                'group max-w-sm rounded-lg border bg-bg shadow-sm outline-hidden transition',
                isEntering && 'fade-in zoom-in-95 animate-in',
                isExiting && 'fade-out zoom-out-95 animate-out',
                placement === 'top' && `mb-2 ${isEntering ? 'slide-in-from-bottom-2' : 'slide-out-to-bottom-2'}`,
                placement === 'right' && `ml-2 ${isEntering ? 'slide-in-from-left-2' : 'slide-out-to-left-2'}`,
                placement === 'bottom' && `mt-2 ${isEntering ? 'slide-in-from-top-2' : 'slide-out-to-top-2'}`,
                placement === 'left' && `mr-2 ${isEntering ? 'slide-in-from-right-2' : 'slide-out-to-right-2'}`,
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
                            className='group-placement-left:-rotate-90 block fill-bg stroke-muted group-placement-bottom:rotate-180 group-placement-right:rotate-90'
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
    style?: CSSProperties
    showArrow?: boolean
    respectScreen?: boolean
    children: ReactNode
    className?: string | ((values: { defaultClassName?: string }) => string)
}

const PopoverContent = ({ showArrow = true, respectScreen = true, ...props }: PopoverContentProps) => {
    const isMobile = useIsMobile()
    return isMobile && respectScreen ? (
        <SheetContent
            closeButton={false}
            side={
                props.placement?.endsWith('top')
                    ? 'top'
                    : props.placement?.endsWith('right')
                      ? 'right'
                      : props.placement?.endsWith('left')
                        ? 'left'
                        : 'bottom'
            }
            {...props}
        />
    ) : (
        <PopoverMode showArrow={showArrow} {...props} />
    )
}

Popover.Trigger = (props: ButtonProps) => <Button {...props} />

Popover.Content = PopoverContent

Popover.Header = DialogHeader
Popover.Title = DialogTitle
Popover.Description = DialogDescription
Popover.Body = DialogBody
Popover.Footer = DialogFooter

export { Popover, PopoverContent }
