'use client'

import { IconLoaderCircle } from 'hq-icons'
import type { ButtonProps as RACButtonProps } from 'react-aria-components'
import { composeRenderProps, Button as RACButton } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
    base: [
        'inline-flex items-center justify-center gap-x-2 border font-medium whitespace-nowrap backdrop-blur-2xl transition outline-hidden',
        '**:data-[slot=icon]:size-4',
        'focus-visible:ring-4 ring-primary/20',
        'cursor-pointer disabled:cursor-default disabled:opacity-50'
    ],
    variants: {
        variant: {
            primary:
                'bg-primary text-primary-fg border-primary hover:bg-primary/85 pressed:bg-primary/95',
            secondary:
                'bg-secondary text-secondary-fg border-secondary hover:bg-secondary/85 pressed:bg-secondary/95',
            info: 'bg-info text-info-fg border-info hover:bg-info/85 pressed:bg-info/95',
            success:
                'bg-success text-success-fg border-success hover:bg-success/85 pressed:bg-success/95',
            danger: 'bg-danger text-danger-fg border-danger hover:bg-danger/85 pressed:bg-danger/95',
            warning:
                'bg-warning text-warning-fg border-warning hover:bg-warning/85 pressed:bg-warning/95',
            outline:
                'bg-bg/80 hover:bg-accent/40 pressed:bg-accent/50 text-fg hover:text-accent-fg',
            ghost: 'text-fg hover:bg-accent/40 pressed:bg-accent/50 hover:text-accent-fg border-transparent bg-transparent'
        },
        size: {
            xs: 'h-6 px-2 py-1.5 text-xs',
            sm: 'h-8 px-3 py-2 text-sm',
            md: 'h-10 px-4 py-3 text-sm',
            lg: 'h-12 px-5 py-3.5 text-base',
            icon: 'size-10 shrink-0 text-base'
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
                shape,
                className
            })
        )}
    >
        {(values) => (
            <>
                {values.isPending && (
                    <IconLoaderCircle data-slot='loader' className='animate-spin size-4' />
                )}
                {typeof props.children === 'function' ? props.children(values) : props.children}
            </>
        )}
    </RACButton>
)

export { Button, buttonStyles }
