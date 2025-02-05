'use client'

import {
    Button as ButtonPrimitive,
    ButtonProps as ButtonPrimitiveProps
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

import { cr, focusButtonStyles } from './utils'

const buttonStyles = tv({
    extend: focusButtonStyles,
    base: [
        'relative inline-flex items-center justify-center gap-x-2 border font-medium whitespace-nowrap no-underline transition',
        '*:svg:-mx-0.5 *:svg:my-1 *:svg:size-4 *:svg:shrink-0'
    ],
    variants: {
        variant: {
            primary: 'bg-primary text-primary-fg border-primary',
            secondary: 'bg-secondary text-secondary-fg border-secondary',
            success: 'bg-success text-success-fg border-success',
            danger: 'bg-danger text-danger-fg border-danger',
            warning: 'bg-warning text-warning-fg border-warning',
            dark: 'bg-fg text-bg border-fg',
            outline: 'bg-bg/80 text-fg border-muted data-hovered:bg-muted',
            ghost: 'text-fg data-hovered:bg-secondary border-transparent bg-transparent'
        },
        size: {
            xs: 'h-8 px-2 text-xs',
            sm: 'h-9 px-3 text-sm',
            md: 'h-10 px-4 py-2 text-sm',
            lg: 'h-11 px-8 text-base',
            icon: 'size-10 shrink-0'
        },
        shape: {
            rounded: 'rounded-lg',
            sharp: 'rounded-none',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        shape: 'rounded'
    }
})

export interface ButtonProps extends ButtonPrimitiveProps, VariantProps<typeof buttonStyles> {
    ref?: React.Ref<HTMLButtonElement>
}

const Button = ({ className, variant, size, shape, ref, ...props }: ButtonProps) => (
    <ButtonPrimitive
        ref={ref}
        {...props}
        className={cr(className, (className, renderProps) =>
            buttonStyles({
                ...renderProps,
                variant,
                size,
                shape,
                className
            })
        )}
    >
        {(values) => (
            <>{typeof props.children === 'function' ? props.children(values) : props.children}</>
        )}
    </ButtonPrimitive>
)

export { Button, buttonStyles }
