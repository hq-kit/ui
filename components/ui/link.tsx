'use client'

import { Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { cr, focusButtonStyles } from './utils'

const linkStyles = tv({
    extend: focusButtonStyles,
    base: 'outline-primary relative cursor-pointer border-transparent outline-0 transition-colors data-disabled:cursor-default data-disabled:opacity-50',
    variants: {
        variant: {
            default: 'text-fg data-hovered:text-primary',
            unstyled: 'text-current',
            primary: 'text-primary data-hovered:text-primary/80',
            danger: 'text-danger data-hovered:text-danger/80'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

interface LinkProps extends LinkPrimitiveProps {
    variant?: 'primary' | 'danger' | 'default' | 'unstyled'
}

const Link = ({ className, ...props }: LinkProps) => {
    const { variant } = props
    const linkVariant = className ? 'unstyled' : variant
    return (
        <LinkPrimitive
            {...props}
            className={cr(className, (className, ...renderProps) =>
                linkStyles({ ...renderProps, variant: linkVariant, className })
            )}
        >
            {(values) => (
                <>
                    {typeof props.children === 'function' ? props.children(values) : props.children}
                </>
            )}
        </LinkPrimitive>
    )
}

export { Link, type LinkProps }
