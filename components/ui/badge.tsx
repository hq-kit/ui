'use client'

import { type VariantProps, tv } from 'tailwind-variants'

const badgeStyles = tv({
    base: 'inline-flex items-center gap-x-1.5 px-2 py-0.5 text-xs/5 font-medium ring-1 **:data-[slot=icon]:size-3',
    variants: {
        variant: {
            primary: 'ring-primary/20 bg-primary/5 text-primary',
            secondary: 'ring-secondary-fg/20 bg-secondary/20 text-secondary-fg',
            success: 'ring-success/20 bg-success/5 text-success',
            warning: 'ring-warning/20 bg-warning/5 text-warning',
            danger: 'ring-danger/20 bg-danger/5 text-danger',
            dark: 'ring-fg/20 bg-fg/5 text-fg'
        },
        shape: {
            rounded: 'rounded-md',
            sharp: 'rounded-none',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'primary',
        shape: 'rounded'
    }
})

interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeStyles> {
    className?: string
    children: React.ReactNode
}

const Badge = ({ children, variant, shape, className, ...props }: BadgeProps) => {
    return (
        <span {...props} className={badgeStyles({ variant, shape, className })}>
            {children}
        </span>
    )
}

export { Badge, badgeStyles }
export type { BadgeProps }
