'use client'

import { tv, type VariantProps } from 'tailwind-variants'

const badgeStyles = tv({
    base: [
        'inline-flex items-center cursor-default border gap-x-1.5 px-2 py-0.5 text-xs/5 font-medium **:data-[slot=icon]:size-3 transition bg-(--bg) text-(--fg) border-(--bg)/20 hover:bg-(--bg)/85 pressed:bg-(--bg)/95'
    ],
    variants: {
        variant: {
            primary: '[--bg:var(--color-primary)] [--fg:var(--color-primary-fg)]',
            secondary: '[--bg:var(--color-secondary)] [--fg:var(--color-secondary-fg)]',
            info: '[--bg:var(--color-info)] [--fg:var(--color-info-fg)]',
            success: '[--bg:var(--color-success)] [--fg:var(--color-success-fg)]',
            danger: '[--bg:var(--color-danger)] [--fg:var(--color-danger-fg)]',
            warning: '[--bg:var(--color-warning)] [--fg:var(--color-warning-fg)]',
            outline:
                'bg-bg/80 text-fg hover:bg-accent/40 pressed:bg-accent/50 hover:text-accent-fg border-accent'
        },
        shape: {
            square: 'rounded-lg',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'primary',
        shape: 'square'
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
        <span data-badge {...props} className={badgeStyles({ variant, shape, className })}>
            {children}
        </span>
    )
}

export { Badge, badgeStyles }
export type { BadgeProps }
