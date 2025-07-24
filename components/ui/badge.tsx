'use client'

import type { ComponentPropsWithRef } from 'react'

import { type VariantProps, tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const badgeStyle = tv({
    base: 'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 font-medium text-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 *:[svg]:pointer-events-none *:[svg]:size-3',
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive:
                'border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

const Badge = ({ className, variant, ...props }: ComponentPropsWithRef<'span'> & VariantProps<typeof badgeStyle>) => (
    <span data-slot='badge' className={cn(badgeStyle({ variant }), className)} {...props} />
)

export { Badge, badgeStyle }
