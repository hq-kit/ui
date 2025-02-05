'use client'

import type { TooltipProps as TooltipPrimitiveProps } from 'react-aria-components'
import {
    Button,
    OverlayArrow,
    Tooltip as TooltipPrimitive,
    TooltipTrigger as TooltipTriggerPrimitive
} from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cr } from './utils'

const tooltipStyles = tv({
    base: 'group rounded-lg border px-2.5 py-1.5 text-sm will-change-transform',
    variants: {
        variant: {
            default: 'bg-bg text-fg **:data-arrow:fill-bg **:data-arrow:stroke-border',
            inverse: 'bg-fg text-bg **:data-arrow:fill-fg'
        },
        isEntering: {
            true: [
                'fade-in animate-in',
                'data-[placement=left]:slide-in-from-right-1 data-[placement=right]:slide-in-from-left-1 data-[placement=top]:slide-in-from-bottom-1 data-[placement=bottom]:slide-in-from-top-1'
            ]
        },
        isExiting: {
            true: [
                'fade-in direction-reverse animate-in',
                'data-[placement=left]:slide-out-to-right-1 data-[placement=right]:slide-out-to-left-1 data-[placement=top]:slide-out-to-bottom-1 data-[placement=bottom]:slide-out-to-top-1'
            ]
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

type TooltipProps = React.ComponentProps<typeof TooltipTriggerPrimitive>
const Tooltip = (props: TooltipProps) => <TooltipTriggerPrimitive {...props} />

interface TooltipContentProps
    extends Omit<TooltipPrimitiveProps, 'children'>,
        VariantProps<typeof tooltipStyles> {
    showArrow?: boolean
    children: React.ReactNode
}

const TooltipContent = ({
    offset = 10,
    showArrow = true,
    variant = 'default',
    children,
    ...props
}: TooltipContentProps) => {
    return (
        <TooltipPrimitive
            {...props}
            offset={offset}
            className={cr(props.className, (className, renderProps) =>
                tooltipStyles({
                    ...renderProps,
                    variant,
                    className
                })
            )}
        >
            {showArrow && (
                <OverlayArrow>
                    <svg
                        data-arrow
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        className='group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90'
                    >
                        <path d='M0 0 L6 6 L12 0' />
                    </svg>
                </OverlayArrow>
            )}
            {children}
        </TooltipPrimitive>
    )
}

const TooltipTrigger = Button

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent

export { Tooltip }
export type { TooltipContentProps, TooltipProps }
