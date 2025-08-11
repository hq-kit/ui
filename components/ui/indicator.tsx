'use client'

import type { ComponentPropsWithRef, ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const indicatorStyle = tv({
    base: 'absolute right-0.5 left-auto z-10 inline-flex w-auto translate-x-1/2 select-none items-center justify-center whitespace-nowrap border-2 py-[3px]',
    variants: {
        variant: {
            primary: '[--background:var(--color-primary)] [--foreground:var(--color-primary-foreground)]',
            secondary: '[--background:var(--color-muted-foreground)] [--foreground:var(--color-muted)]',
            destructive: '[--background:var(--color-destructive)] [--foreground:var(--color-border)]',
            outline: '[--background:var(--color-background)] [--foreground:var(--color-foreground)]'
        },
        position: {
            top: '-translate-y-1/2 top-0.5 bottom-auto',
            bottom: 'top-auto bottom-0.5 translate-y-1/2'
        },
        isInverse: {
            true: 'border-(--background) bg-(--foreground) text-(--background)',
            false: 'border-(--foreground) bg-(--background) text-(--foreground)'
        },
        shape: {
            circle: 'rounded-full',
            square: 'rounded-md'
        },
        size: {
            xs: 'size-3',
            sm: 'size-4',
            md: 'size-5',
            lg: 'size-6'
        },
        isText: {
            true: 'size-auto px-1.5 text-xs has-[svg]:px-[3px] *:[svg]:size-4 *:[svg]:shrink-0'
        }
    },
    defaultVariants: {
        variant: 'primary',
        position: 'top',
        isInverse: false,
        shape: 'circle',
        size: 'sm'
    }
})

interface IndicatorProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof indicatorStyle> {
    text?: ReactNode
}

const Indicator = ({ className, children, ...props }: IndicatorProps) => {
    return (
        <div className='relative inline-block w-fit'>
            {children}
            <span className={indicatorStyle({ className, isText: !!props.text, ...props })}>{props.text}</span>
        </div>
    )
}

export { Indicator }
