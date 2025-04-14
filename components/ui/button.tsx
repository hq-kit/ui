'use client'

import React from 'react'

import { IconLoaderCircle } from 'hq-icons'
import type { ButtonProps as RACButtonProps } from 'react-aria-components'
import { Button as RACButton, composeRenderProps } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
    base: [
        'inline-flex items-center justify-center border border-muted font-medium whitespace-nowrap backdrop-blur-2xl transition outline-hidden',
        'w-(--width) h-(--height)',
        'focus-visible:ring-2 ring-primary/20 focus-visible:border-primary/70',
        'cursor-pointer disabled:cursor-default disabled:opacity-50'
    ],
    variants: {
        variant: {
            primary: 'bg-primary text-primary-fg border-primary hover:bg-primary/85 pressed:bg-primary/95',
            secondary: 'bg-secondary text-secondary-fg border-secondary hover:bg-secondary/85 pressed:bg-secondary/95',
            info: 'bg-info text-info-fg border-info hover:bg-info/85 pressed:bg-info/95',
            success: 'bg-success text-success-fg border-success hover:bg-success/85 pressed:bg-success/95',
            danger: 'bg-danger text-danger-fg border-danger hover:bg-danger/85 pressed:bg-danger/95',
            warning: 'bg-warning text-warning-fg border-warning hover:bg-warning/85 pressed:bg-warning/95',
            outline: 'bg-bg/80 hover:bg-muted/40 pressed:bg-muted/50 text-fg',
            ghost: 'text-fg hover:bg-muted/40 pressed:bg-muted/50 border-transparent bg-transparent backdrop-blur-none'
        },
        size: {
            xs: '[--height:theme(spacing.6)] [--width:auto] px-2 py-1.5 text-xs **:[svg]:size-3.5 gap-x-1.5',
            sm: '[--height:theme(spacing.8)] [--width:auto] px-3 py-2 text-sm **:[svg]:size-4 gap-x-1.5',
            md: '[--height:theme(spacing.10)] [--width:auto] px-4 py-3 text-sm **:[svg]:size-4 gap-x-2',
            lg: '[--height:theme(spacing.12)] [--width:auto] px-5 py-3.5 text-base **:[svg]:size-6 gap-x-2.5'
        },
        icon: {
            true: 'h-(--height) w-(--height) shrink-0 p-0'
        },
        shape: {
            square: 'rounded-lg',
            circle: 'rounded-full'
        },
        isPending: {
            true: 'pointer-events-none cursor-default opacity-50 *:data-[slot=icon]:hidden'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        shape: 'square'
    }
})

export interface ButtonProps extends RACButtonProps, VariantProps<typeof buttonStyles> {
    ref?: React.Ref<HTMLButtonElement>
}

const Button = ({ className, variant, size, shape, ref, ...props }: ButtonProps) => (
    <RACButton
        ref={ref}
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
            buttonStyles({
                ...renderProps,
                variant,
                size,
                icon: !!props.icon,
                shape,
                className
            })
        )}
    >
        {(values) => (
            <>
                {values.isPending && <IconLoaderCircle data-slot='loader' className='animate-spin size-4' />}
                {typeof props.children === 'function' ? props.children(values) : props.children}
            </>
        )}
    </RACButton>
)

export { Button, buttonStyles }
